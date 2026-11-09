import { Fragment } from "react";
import type { ReactNode } from "react";
import type { Value } from "../format";

import type { Diff } from "../differ";
import { diffText, layoutDiffs } from "../differ";
import { Tooltip } from "./Tooltip";

import {
    DescriptorView,
    ParametersView,
    TagsView,
    TypeView,
    symbol,
} from "./DescriptorViews";

import {
    capabilitiesText,
    readWriteText,
    securityText,
    threadSafetyText,
    inQuotes,
} from "../format";

interface ValueViewProps {
    Target: Value;
    Previous: Value | undefined;
}

function ValueView({ Target: target, Previous: previous }: ValueViewProps): ReactNode {
    switch (target.Type) {
        case "Type": {
            return <>
                {previous?.Type === "Parameters" && symbol("-> ")}
                <TypeView value={target.Value} />
            </>;
        }
        case "Parameters": {
            return <ParametersView values={target.Value} change />;
        }
        case "Security": {
            return <Tooltip
                className={`Security${target.Value === "None" ? " darken" : ""}`}
                text={securityText(target.Value, target.Prefix, true)}
            />;
        }
        case "ReadWrite":
            return <Tooltip
                className={`Security${target.Value.Read === "None" && target.Value.Write === "None" ? " darken" : ""}`}
                text={readWriteText(target.Value, true)}
            />;
        case "Capabilities":
            return <Tooltip
                className={`Capabilities${capabilitiesText(target.Value) ? "" : " darken"}`}
                text={capabilitiesText(target.Value, true)}
            />;
        case "ThreadSafety":
            return <Tooltip
                className="ThreadSafety"
                text={threadSafetyText(target.Value)}
            />;
        case "Serialization": {
            return <Tooltip className="Serialization" text={target.Value} />;
        }
        case "string": {
            return <Tooltip className="String" text={inQuotes(target.Value)} />;
        }
        case "number": {
            return <span className="Int32">{target.Value}</span>;
        }
    }
}

interface ChangeListProps {
    values: Value[];
    direction: "from" | "to";
    multiline: boolean;
}

function ChangeList({ values, direction, multiline }: ChangeListProps): ReactNode {
    const content = <>
        {multiline ? (
            <span className="ChangeListPrefix">
                {direction === "to" ? "  to" : "from"}
                {symbol(": ")}
            </span>
        ) : (` ${direction} `)}

        {values.map((value, i) =>
            multiline ? (<span key={i} className="ChangeListItem">
                <ValueView Target={value} Previous={values[i - 1]} />
            </span>) : (
                <ValueView key={i} Target={value} Previous={values[i - 1]} />
            ),
        )}
    </>
    
    return multiline ? (
        <div className="ChangeList">{content}</div>
    ) : (
        <span className={direction === "from" ? "ChangeFrom" : "ChangeTo"}>
            {content}
        </span>
    );
}

interface DiffEntryProps {
    diff: Diff;
}

function DiffEntry({ diff }: DiffEntryProps): ReactNode {
    let content: ReactNode;

    if (diff.Type === "Changed") {
        const multiline = diffText(diff, false).includes("\r\n");

        content = <>
            {" the "}
            <span className="WhatChanged">{diff.Field}</span>
            {" of "}
            <DescriptorView desc={diff.Target} />
            <ChangeList values={diff.From} direction="from" multiline={multiline}/>
            <ChangeList values={diff.To} direction="to" multiline={multiline}/>
        </>;
    } else if (diff.Type === "Renamed") {
        content = <>
            <DescriptorView desc={diff.Target} />
            <ChangeList values={diff.To} direction="to" multiline={false} />
        </>;
    } else {
        const detailed = diff.Type === "Added" && !diff.Context;

        content = (<>
            {diff.Context?.Type === "Tags" && (<>
                <span className="DiffType Tags">{`Tag${diff.Context.Value.length > 1 ? "s" : ""} `}</span>
                <TagsView tags={diff.Context.Value} />
                {diff.Type === "Added" ? " to " : " from "}
            </>)}

            {diff.Context?.Type === "LegacyName" && (<>
                <span className="DiffType LegacyName">LegacyName </span>

                <span className="String">
                    {inQuotes(diff.Context.Value)}
                </span>

                {diff.Type === "Added" ? " to " : " from "}
            </>)}

            <DescriptorView
                desc={diff.Target}
                detailed={detailed}
                keepDim={diff.Type === "Added"}
            />
        </>);
    }
    return (<div className={diff.Type}>
        <span className={`DiffType ${diff.Type}${diff.Parented ? " child" : ""}`}>
            {diff.Type}{" "}
        </span>
        {content}
        {diff.Children.map((child, i) => (
            <DiffEntry diff={child} key={i} />
        ))}
    </div>);
}

interface DiffViewProps {
    diffs: Diff[];
}

export function DiffView({ diffs }: DiffViewProps): ReactNode {
    return (<>
        {layoutDiffs(diffs).map(({ diff, breakBefore, breakAfter }, i) => (
            <Fragment key={i}>
                {breakBefore && <br />}
                <DiffEntry diff={diff} />
                {breakAfter && <br />}
            </Fragment>
        ))}
    </>);
}
