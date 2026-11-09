import { Fragment, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { createPortal } from 'react-dom';
import remarkBreaks from 'remark-breaks';
import Markdown from 'react-markdown';
import { DOCS_URL_BASE } from '../format';
import type { ReactNode, RefObject } from 'react';

let activeTooltip: { id: string; close: () => void } | null = null;

export const tagDescriptions: Record<string, string> = {
    ReadOnly: 'This property can only be read by scripts. Attempting to write to it will result in an error.',
    NotReplicated: 'This API does not directly cross the network boundary. It may derive from another source which does, but it is otherwise local to the observing session.',
    NotCreatable: 'This object cannot be created using `Instance.new`',
    Service: 'This class can be obtained as a singleton by calling the `game:GetService(className: string)` function.\n\n(**Note**: A few specific services are provided under `settings()` and `UserSettings()` instead!)',
    Deprecated: 'This API is deprecated. Prefer a supported alternative when available.',
    Preliminary: 'This API is not production ready yet and may be subject to change.',
    Hidden: 'This property is not displayed in the property window or object browser.',
    NotScriptable: 'This API is not accessible from scripts.',
    NotBrowsable: 'This API will not be shown in the object browser, or in enum dropdowns.',
    Yields: 'Calling this function will temporarily yield the running thread until a response is received.',
    CustomLuaState: 'Internally, this function\'s C++ implementation bypasses reflection and hooks into the `lua_State` C-struct directly. It may not directly follow the described argument(s) and return type(s) of the API signature.',
};

const securityDescriptions: Record<string, string> = {
    None: 'No security-level restriction is specified. Other restrictions, such as capabilities and tags may still apply.',
    Plugin: 'This API is restricted to plugins, or the command bar in Roblox Studio.',
    LocalUser: 'This API can only be used from the command bar in Roblox Studio.',
    RobloxScript: 'This API is restricted to privileged frontend Luau code authored by Roblox.',
    RobloxEngine: 'This API is restricted to privileged backend Luau code authored by Roblox.',
    NotAccessible: 'This API is not accessible to scripts in any capacity.',
};

const threadDescriptions: Record<string, string> = {
    Safe: 'This API is safe to use in parallel Luau execution.',
    Unsafe: 'This API is not safe to use in parallel Luau execution.',
    ReadSafe: 'This API is safe to read in parallel Luau execution, but cannot be written to.',
};

const serializationDescriptions: Record<string, string> = {
    None: 'This property is neither saved nor loaded by the engine.',
    SaveOnly: 'This property can be serialized by the engine, but will not be loaded.',
    LoadOnly: 'This property can be loaded, but is not serialized by the engine.',
    Serialized: 'This property can be both saved and loaded by the engine.',
};

type BadgeDescription = {
    Category: string;
    Header: string,
    Text: string[];
    Link?: string;
}

export function badgeDescription(
    className: string,
    text: string,
): BadgeDescription | undefined {
    const type = className.split(' ')[0];

    if (type === 'Tag') {
        let rawTag = text.replace(/^\[🏷️|\]$/gu, '');

        return {
            Category: 'API Tag',
            Header: text,
            Text: [tagDescriptions[rawTag]]
        };
    }

    if (type === 'Security') {
        const match = [...text.matchAll(/\{(🔒|🔍|✏️)(\w+)\}/gu)][0];

        if (!match)
            return undefined;

        const symbol = match[1]
        let direction = "🔒 API Permissions"

        if (symbol === '🔍') {
            direction = '🔍 API Read Permissions';
        } else if (symbol === '✏️') {
            direction = '✏️ API Write Permissions';
        }

        let securityType = match[2];
        let description = securityDescriptions[securityType] ?? "";

        return {
            Header: text,
            Category: direction,
            Text: [description],
        };
    }

    if (type === 'ThreadSafety') {
        const name = text.match(/\{🧬(\w+)\}/u)?.[1];

        return {
            Header: text,
            Category: 'Thread Safety',
            Text: [name ? threadDescriptions[name] : ""]
        };
    }

    if (type === 'Serialization' ||
        (type === 'String' && /^\[(🚫|💾|📁)/u.test(text))) {
        const name = text.match(/(None|SaveOnly|LoadOnly|Serialized)/)?.[1];

        return name ? {
            Header: text,
            Category: 'Serialization',
            Text: [serializationDescriptions[name]]
        } : undefined;
    }

    if (type === 'Capabilities') {
        if (text === '{🚧Undefined}' || text === '{🚧None}')
            return undefined; // TODO?

        return {
            Header: text,
            Category: 'Script Capabilities',

            Text: [
                "In a sandboxed container, these listed \`SecurityCapabilities\` are required to use this API.",
                "",
                "* 🔎 Indicates read-only requirements.",
                "* ✏️ Indicates write-only requirements.",
                "",
                "Click here to learn more!"
            ],

            Link: DOCS_URL_BASE + "scripting/capabilities"
        };
    }

    return undefined;
}

interface TooltipTextProps {
    text: string;
}

export function TooltipText({ text }: TooltipTextProps): ReactNode {
    return <Markdown remarkPlugins={[remarkBreaks]}>{text}</Markdown>;
}

interface TooltipProps {
    className: string;
    text: string;
}

export function Tooltip({ className, text }: TooltipProps): ReactNode {
    const type = className.split(' ')[0];

    const labels = type === 'Security' || type === 'Capabilities'
        ? text.match(/^\{[^{}]+\}(?: \{[^{}]+\})*$/u)?.[0].match(/\{[^{}]+\}/gu)
        : null;
    
    return <>{(labels ?? [text]).map((label, i) => {
        const empty = ['Security', 'Capabilities', 'Serialization'].includes(type)
            && /(?:None|Undefined)[}\]]$/u.test(label);
        
        const classes = className.split(' ')
            .filter(name => name.toLowerCase() !== 'darken');
        
        if (empty)
            classes.push('darken');

        return <Fragment key={i}>
            {i > 0 && <span className="symbol"> </span>}
            <SingleTooltip className={classes.join(' ')} text={label} />
        </Fragment>;
    })}</>;
}

interface TooltipTriggerProps<T extends HTMLElement> {
    ref: RefObject<T | null>;
    'aria-describedby': string | undefined;
    onMouseEnter: (at: { clientX: number; clientY: number }) => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
}

// Shared tooltip behavior: spring fade, cursor following, and dismissal
// on scroll/zoom/Escape. Returns props to spread onto the trigger
// element, plus the portal overlay to render alongside it.
export function useTooltip<T extends HTMLElement>(description: string | undefined): {
    trigger: TooltipTriggerProps<T>;
    overlay: ReactNode;
} {
    const id = useId();

    const trigger = useRef<T>(null);
    const tooltip = useRef<HTMLDivElement>(null);

    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mouse = useRef<{ x: number; y: number } | null>(null);
    const [open, setOpen] = useState(false);

    // Quick spring-driven fade for the tooltip appearing and disappearing.
    const transitions = useTransition(open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 400, friction: 26, clamp: true },
    });

    const cancelClose = () => {
        if (timer.current !== null)
            clearTimeout(timer.current);

        timer.current = null;
    };

    const show = (at: { clientX: number; clientY: number } | null) => {
        if (!description)
            return;

        mouse.current = at ? { x: at.clientX, y: at.clientY } : null;
        cancelClose();

        if (activeTooltip?.id !== id)
            activeTooltip?.close();

        activeTooltip = {
            id,
            close: () => {
                cancelClose();
                setOpen(false);
            },
        };

        setOpen(true);
    };

    const hide = () => {
        if (activeTooltip?.id !== id)
            return;

        activeTooltip = null;
        cancelClose();

        setOpen(false);
    };

    const hideSoon = () => {
        cancelClose();

        timer.current = setTimeout(() => {
            if (document.activeElement !== trigger.current) {
                hide();
            }
        }, 150);
    };

    useEffect(() => () => {
        if (activeTooltip?.id === id)
            activeTooltip = null;

        cancelClose();
    }, [id]);

    useLayoutEffect(() => {
        if (!open)
            return;

        const size = { width: 0, height: 0 };

        // Position the tooltip beside the cursor, or anchored to the badge
        // when opened via keyboard focus, clamped to the viewport.
        const place = () => {
            const node = tooltip.current;

            if (!node)
                return;

            const margin = 8;
            const offset = 14;
            const point = mouse.current;

            let left: number;
            let top: number;

            if (point) {
                left = point.x + offset;
                top = point.y + offset;

                if (top + size.height > window.innerHeight - margin) {
                    top = Math.max(margin, point.y - size.height - offset);
                }
            } else {
                const anchor = trigger.current?.getBoundingClientRect();

                if (!anchor)
                    return;

                left = anchor.right;
                top = anchor.bottom + margin;

                if (top + size.height > window.innerHeight - margin) {
                    top = Math.max(margin, anchor.top - size.height - margin);
                }
            }

            left = Math.max(
                margin,
                Math.min(
                    left,
                    document.documentElement.clientWidth - size.width - margin,
                ),
            );

            node.style.left = `${left}px`;
            node.style.top = `${top}px`;
        };

        // Follow the mouse in real time. Styles are written directly to the
        // DOM so movement doesn't wait on React re-renders.
        const move = (event: MouseEvent) => {
            mouse.current = { x: event.clientX, y: event.clientY };
            place();
        };

        const measure = () => {
            const box = tooltip.current?.getBoundingClientRect();

            if (box) {
                size.width = box.width;
                size.height = box.height;
            }

            place();
        };

        const dismiss = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                hide();
            }
        };

        // Hide instead of chasing the anchor when the page moves under the
        // cursor (scrolling, zooming, or resizing the window).
        const scrolled = (event: Event) => {
            if (event.target instanceof Node && tooltip.current?.contains(event.target))
                return;

            hide();
        };

        const observer = new ResizeObserver(measure);
        measure();

        if (tooltip.current)
            observer.observe(tooltip.current);

        window.addEventListener('resize', hide);
        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('scroll', scrolled, { capture: true, passive: true });

        window.visualViewport?.addEventListener('resize', hide);
        window.addEventListener('keydown', dismiss);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', move);
            window.removeEventListener('resize', hide);
            window.removeEventListener('scroll', scrolled, true);
            window.visualViewport?.removeEventListener('resize', hide);
            window.removeEventListener('keydown', dismiss);
        };
    }, [open]);

    const overlay = transitions((style, shown) => shown && createPortal(
        <animated.div
            ref={tooltip}
            id={id}
            role="tooltip"
            className="api-badge-tooltip"
            style={style}
            onMouseEnter={cancelClose}
            onMouseLeave={hideSoon}>
            <TooltipText text={description ?? ''} />
        </animated.div>,
        document.body,
    ));

    return {
        trigger: {
            ref: trigger,
            'aria-describedby': open ? id : undefined,
            onMouseEnter: show,
            onMouseLeave: hideSoon,
            onFocus: () => show(null),
            onBlur: hideSoon,
        },
        overlay,
    };
}

interface SingleTooltipProps {
    className: string;
    text: string;
}

function SingleTooltip({ className, text }: SingleTooltipProps): ReactNode {
    const badgeDesc = badgeDescription(className, text);

    let description = badgeDesc ? [
        badgeDesc.Header,
        "--",
        `**${badgeDesc.Category}**`,
        "",
        ...badgeDesc.Text,
    ].join('\n') : "";

    let link = badgeDesc?.Link;
    const { trigger, overlay } = useTooltip<HTMLSpanElement>(description);
    
    if (!description)
    {
        if (link)
            return <a className={className} href={link}>{text}</a>;
        
        return <span className={className}>{text}</span>;
    }

    if (link)
        return <TooltipAnchor
            href={link}
            description={description}
            className={className}>
            {text}
        </TooltipAnchor>
    
    return <>
        <span
            {...trigger}
            className={className}
            tabIndex={0}>{text}
        </span>
        {overlay}
    </>;
}

interface TooltipAnchorProps {
    href: string;
    description: string;
    className?: string;
    children: ReactNode;
}

// An anchor that shows the markdown tooltip instead of a native title.
export function TooltipAnchor({
    href,
    description,
    className,
    children,
}: TooltipAnchorProps): ReactNode {
    const { trigger, overlay } = useTooltip<HTMLAnchorElement>(description);

    return (<>
        <a {...trigger} href={href} className={className}>{children}</a>
        {overlay}
    </>);
}

interface TooltipSpanProps {
    description: string;
    className?: string;
    children: ReactNode;
}

// A non-interactive span that shows the markdown tooltip, for terms
// that have no documentation page to link to.
export function TooltipSpan({
    description,
    className,
    children,
}: TooltipSpanProps): ReactNode {
    const { trigger, overlay } = useTooltip<HTMLSpanElement>(description);

    return (<>
        <span {...trigger} className={className} tabIndex={0}>{children}</span>
        {overlay}
    </>);
}
