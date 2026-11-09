import { memo, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { animated, useSpring } from "@react-spring/web";
import { DescriptorView } from "./DescriptorViews";
import { descriptorText } from "../format";
import { compareDescriptors, hidden } from "../apiDumpV1";
import type { SpringRef } from "@react-spring/web";
import type { ReactNode, RefObject } from "react";

import type {
    Database,
    Descriptor,
    EnumDescriptor,
    ClassDescriptor,
} from "../apiDumpV1";

interface DescriptorProps<T extends Descriptor> {
    desc: T;
}

interface DumpBlockProps<T extends Descriptor> extends DescriptorProps<T> {
    showHidden: boolean;
}

// One shared observer upgrades blocks from plain text to rich rendering
// as they approach the viewport.
const upgrades = new WeakMap<Element, () => void>();
let watcher: IntersectionObserver | null = null;

// Spinner shown while a batch of lazy blocks is being upgraded. The
// spring is driven imperatively so no React re-renders are involved.
let spinnerApi: SpringRef<{ opacity: number }> | null = null;
let activeBatches = 0;
let hideTimer: ReturnType<typeof setTimeout> | null = null;

// How long the spinner lingers after the last batch finishes. Rapid
// bursts of upgrades merge into one steady spin instead of flickering.
const SPINNER_HOLD = 100;

function showSpinner() {
    if (hideTimer !== null) {
        clearTimeout(hideTimer);
        hideTimer = null;
    }

    spinnerApi?.start({ opacity: 1 });
}

function hideSpinnerSoon() {
    if (hideTimer !== null)
        clearTimeout(hideTimer);

    hideTimer = setTimeout(() => {
        hideTimer = null;
        spinnerApi?.start({ opacity: 0 });
    }, SPINNER_HOLD);
}

function watch(element: Element, upgrade: () => void) {
    watcher ??= new IntersectionObserver((entries) => {
        const batch: (() => void)[] = [];

        // The observer fires 1000px ahead of the viewport; only batches
        // that contain a block actually on screen show the loading coil.
        let onScreen = false;

        for (const entry of entries) {
            if (!entry.isIntersecting)
                continue;

            const upgrade = upgrades.get(entry.target);
            watcher!.unobserve(entry.target);
            upgrades.delete(entry.target);

            if (upgrade) {
                batch.push(upgrade);

                const rect = entry.boundingClientRect;

                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    onScreen = true;
                }
            }
        }

        if (!batch.length)
            return;

        // Reveal the spinner and give the browser one frame to paint it,
        // then run the expensive upgrade renders synchronously and hide
        // it once they've committed.
        activeBatches++;

        if (onScreen)
            showSpinner();

        requestAnimationFrame(() => setTimeout(() => {
            flushSync(() => {
                for (const upgrade of batch) {
                    upgrade();   
                }
            });

            if (--activeBatches === 0) {
                hideSpinnerSoon();
            }
        }));
    }, { rootMargin: "1000px 0px" });

    upgrades.set(element, upgrade);
    watcher.observe(element);
}

function unwatch(element: Element) {
    upgrades.delete(element);
    watcher?.unobserve(element);
}

// Blocks start as cheap plain-text rows (still searchable with Ctrl+F,
// since the text is real DOM) and upgrade to the full badge rendering
// once they come near the viewport.
function useNearViewport(): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [near, setNear] = useState(false);

    useEffect(() => {
        if (near)
            return;

        const element = ref.current;

        if (!element)
            return;

        watch(element, () => setNear(true));
        return () => unwatch(element);
    }, [near]);

    return [ref, near];
}

function PlainText({ desc }: DescriptorProps<Descriptor>): ReactNode {
    var className = desc.DescriptorType;
    
    return <span className={className}>
        {descriptorText(desc, true)}
    </span>
}

function PlainEntry({ desc }: DescriptorProps<Descriptor>): ReactNode {
    return <div className={desc.DescriptorType}>
        <PlainText desc={desc} />
    </div>
}

function DumpEntry({ desc }: DescriptorProps<Descriptor>): ReactNode {
    return <div className={desc.DescriptorType}>
        <DescriptorView desc={desc} detailed keepDim />
    </div>
}

// Height of a single dump row, used to estimate the size of offscreen
// blocks so content-visibility keeps the scrollbar accurate.
const ROW_HEIGHT = 19;

const ClassView = memo(function ({ desc, showHidden }: DumpBlockProps<ClassDescriptor>): ReactNode {
    const [ref, rich] = useNearViewport();

    const members = desc.Members
        .filter(member => showHidden || !hidden(member))
        .sort(compareDescriptors);

    return <div ref={ref} className="Class" style={{ containIntrinsicSize: `auto ${(members.length + 1) * ROW_HEIGHT}px` }}>
        {rich ? (<>
            <DescriptorView desc={desc} detailed keepDim />
            {members.map(member => <DumpEntry key={member.Name} desc={member}/>)}
        </>) : (<>
            <PlainText desc={desc} />
            {members.map(member => <PlainEntry key={member.Name} desc={member}/>)}
        </>)}
    </div>
});

const EnumView = memo(function ({ desc, showHidden }: DumpBlockProps<EnumDescriptor>): ReactNode {
    const [ref, rich] = useNearViewport();

    const items = desc.Items
        .filter(item => showHidden || !hidden(item));

    return <div ref={ref} className="Enum" style={{ containIntrinsicSize: `auto ${(items.length + 1) * ROW_HEIGHT}px` }}>
        {rich ? <>
            <DescriptorView desc={desc} detailed keepDim/>
            {items.map((item) => (<DumpEntry key={item.Name} desc={item}/>))}
        </> : <>
            <PlainText desc={desc} />
            {items.map((item) => (<PlainEntry key={item.Name} desc={item}/>))}
        </>}
    </div>
});

type IDumpBlock<Type extends string, Descriptor> = {
    Type: Type;
    Descriptor: Descriptor;
};

type DumpBlock =
    | IDumpBlock<"class", ClassDescriptor>
    | IDumpBlock<"enum", EnumDescriptor>;

// Number of top-level blocks mounted per commit. Rendering in chunks keeps
// the first screen fast and the main thread responsive for large dumps.
// Blocks mount as cheap plain text, so chunks can be fairly large.
const CHUNK_SIZE = 400;

interface DumpViewProps {
    database: Database;
}

export function DumpView({ database }: DumpViewProps): ReactNode {
    const [showHidden, setShowHidden] = useState(true);

    // Quick spring fade for the upgrade spinner, registered for the
    // imperative show/hide helpers above.
    const [spinnerStyle, spinnerSpring] = useSpring(() => ({
        opacity: 0,
        config: { tension: 800, friction: 30, clamp: true },
    }));

    useEffect(() => {
        spinnerApi = spinnerSpring;
        return () => { spinnerApi = null; };
    }, [spinnerSpring]);

    const blocks = useMemo<DumpBlock[]>(() => [
        ...[...database.Classes.values()]
            .filter(desc => desc.Name != "<<<ROOT>>>")
            .filter(desc => showHidden || !hidden(desc))
            .sort(compareDescriptors)
            .map(desc => ({
                Type: "class",
                Descriptor: desc,
            }) as const),

        ...[...database.Enums.values()]
            .filter(desc => showHidden || !hidden(desc))
            .map(desc => ({
                Type: "enum",
                Descriptor: desc,
            }) as const),
    ], [database, showHidden]);

    const [progress, setProgress] = useState({ database, count: CHUNK_SIZE });

    // Reset the chunk window when a different dump arrives.
    if (progress.database !== database)
        setProgress({ database, count: CHUNK_SIZE });

    const count = Math.min(progress.count, blocks.length);

    useEffect(() => {
        if (count >= blocks.length)
            return;

        const handle = setTimeout(() => {
            setProgress((current) => current.database !== database ? current : {
                database,
                count: Math.min(current.count + CHUNK_SIZE, blocks.length),
            });
        });

        return () => clearTimeout(handle);
    }, [count, blocks, database]);

    return <>
        <label className="dump-option">
            <input
                type="checkbox"
                checked={showHidden}
                onChange={(event) => setShowHidden(event.target.checked)}
            />
            Show hidden members
        </label>
        <animated.div
            className="dump-blur"
            aria-hidden="true"
            style={spinnerStyle}
        />
        <animated.div
            className="dump-spinner"
            aria-hidden="true"
            style={spinnerStyle}
        />
        {blocks.slice(0, count).map(block => block.Type === "class"
            ? <ClassView key={`Class:${block.Descriptor.Name}`} desc={block.Descriptor} showHidden={showHidden} />
            : <EnumView key={`Enum:${block.Descriptor.Name}`} desc={block.Descriptor} showHidden={showHidden} />
        )}
    </>;
}
