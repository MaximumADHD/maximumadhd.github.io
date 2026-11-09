import type {
    ClassDescriptor,
    Database,
    Descriptor, 
    SecurityType,
} from "./apiDumpV1";

import {
    compareDescriptors,
    isMember,
    ordinal,
    TYPE_PRIORITIES,
} from "./apiDumpV1";

import type { Value } from "./format";

import {
    descriptorText,
    serializationText,
    tagsText,
    valueText,
} from "./format";


const DIFF_ORDER = { 
    Added: 1,
    Changed: 2,
    Removed: 3,
    Renamed: 0,
};

export type DiffType = keyof typeof DIFF_ORDER;

type IContext<T, V> = {
    Type: T
    Value: V
}

type Context = 
    | IContext<"Tags", string[]> 
    | IContext<"LegacyName", string>

export interface Diff {
    Type: DiffType;
    Target: Descriptor;
    
    Field: string;
    Detailed: boolean;
    
    From: Value[];
    To: Value[];
    
    Children: Diff[];
    Context?: Context;

    Parented: boolean;
    Disposed: boolean;
}

export function compareDiffs(a: Diff, b: Diff): number {
    const priority = (d: Diff) =>
          d.Field.startsWith("Tag") ? 8
        : d.Field.startsWith("Legacy") ? 7
        : TYPE_PRIORITIES[d.Target.DescriptorType];
    
    const biasHack = a.Context?.Type === "LegacyName";
    
    return (
        DIFF_ORDER[a.Type] - DIFF_ORDER[b.Type] ||
        priority(a) - priority(b) ||

        (!biasHack ? ordinal(a.Field, b.Field) : 0) ||
        compareDescriptors(a.Target, b.Target) ||

        (biasHack ? ordinal(a.Field, b.Field) : 0)
    );
}

const stringValue = (value: string): Value => ({
    Type: "string", 
    Value: value
});

const secValue = (value: SecurityType, prefix = "🔒"): Value => ({
    Type: "Security",
    Prefix: prefix,
    Value: value,
});

function addChild(parent: Diff, diff: Diff): void {
    parent.Children.push(diff);
    diff.Parented = true;
}

export function compareDatabases(oldInput: Database, newInput: Database): Diff[] {
    // The desktop modifiers mutate descriptors. Keep repeated comparisons independent.
    const oldApi = structuredClone(oldInput);
    const newApi = structuredClone(newInput);
    const results: Diff[] = [];

    const record = (
        type: DiffType,
        target: Descriptor,
        detailed = false,
        field = target.DescriptorType as string,
    ): Diff => {
        const diff: Diff = {
            Type: type,
            Target: target,
            Field: field,
            Detailed: detailed,
            From: [],
            To: [],
            Children: [],
            Parented: false,
            Disposed: false,
        };

        results.push(diff);
        return diff;
    };

    const added = results.filter(d =>
        d.Type === "Added" &&
        d.Target.DescriptorType === "Class" &&
        d.Target.Members.length,
    );
    
    const removed = results.filter(d =>
        d.Type === "Removed" &&
        d.Target.DescriptorType === "Class" &&
        d.Target.Members.length,
    );
    
    const changed = (
        target: Descriptor,
        field: string,
        from: Value,
        to: Value,
    ): void => {
        if (valueText(from) === valueText(to)) 
            return;

        const diff = record("Changed", target, false, field);
        diff.From.push(from);
        diff.To.push(to);
    };

    const flagDescriptor = (
        type: "Added" | "Removed",
        target: Descriptor,
        detailed = type === "Added",
        field = target.DescriptorType as string,
    ): Diff => {
        target.Tags = target.Tags.map((t) =>
            t === "Deprecated" ? "Preliminary" : t,
        );

        return record(type, target, detailed, field);
    };

    const flagDescriptorHierarchy = (type: "Added" | "Removed", target: Descriptor): Diff => {
        const root = flagDescriptor(type, target);

        if (target.DescriptorType === "Class")
            for (const m of target.Members)
                addChild(root, flagDescriptor(type, m));

        if (target.DescriptorType === "Enum")
            for (const item of target.Items)
                addChild(root, flagDescriptor(type, item));
        
        return root;
    };

    const recordTagChanges = (target: Descriptor, oldTags: string[], newTags: string[]): Map<string, Diff> => {
        const map = new Map<string, Diff>();

        for (const type of ["Added", "Removed"] as const) {
            const source = type === "Added" ? newTags : oldTags;
            const other = type === "Added" ? oldTags : newTags;

            const tags = [
                ...new Set(source.filter((t) => !other.includes(t))),
            ].sort();

            if (!tags.length)
                continue;

            const signature = `Tag${tags.length > 1 ? "s" : ""} ${tagsText(tags)}`;

            const diff = flagDescriptor(
                type, target, false,
                `${signature} ${type === "Added" ? "to" : "from"}`,
            );

            diff.Context = {
                Type: "Tags",
                Value: tags
            };

            map.set(`${type}:${signature}`, diff);
        }

        return map;
    };

    const mergeTags = (
        parent: Map<string, Diff>,
        children: Map<string, Diff>,
    ): void => {
        for (const [key, diff] of parent) {
            const matching = children.get(key);
            
            if (matching) {
                addChild(diff, matching);
            }
        }
    };

    for (const [name, c] of newApi.Classes)
        if (!oldApi.Classes.has(name))
            flagDescriptorHierarchy("Added", c);
    
    for (const [name, c] of oldApi.Classes)
        if (!newApi.Classes.has(name))
            flagDescriptorHierarchy("Removed", c);

    for (const add of added) {
        for (const remove of removed) {
            if (add.Disposed || remove.Disposed ||
                add.Target.DescriptorType !== "Class" ||
                remove.Target.DescriptorType !== "Class")
                continue;
            
            const oldClass = remove.Target;
            const newClass = add.Target;

            const newLines = diffText(add, false)
                .split(/\r?\n/)
                .map((x) => x.trim())
                .filter(Boolean);
            
            const oldLines = diffText(remove, false)
                .replaceAll(oldClass.Name, newClass.Name)
                .replaceAll("Removed", "Added")
                .split(/\r?\n/)
                .map((x) => x.trim())
                .filter(Boolean);
            
            const intersects = new Set(
                newLines.filter((line) => oldLines.includes(line)),
            ).size;

            if (intersects < Math.floor((newLines.length + oldLines.length) / 2))
                continue;

            const dummy: ClassDescriptor = {
                ...oldClass,
                Tags: [],
                Members: [],
                SortIndex: -1,
                Security: "None",
            };

            const rename = record("Renamed", dummy, false, "Class");
            rename.To.push(stringValue(newClass.Name));

            oldApi.Classes.delete(oldClass.Name);
            oldClass.Name = newClass.Name;
            
            oldApi.Classes.set(oldClass.Name, oldClass);
            add.Disposed = remove.Disposed = true;
        }
    }

    for (const [name, oldClass] of oldApi.Classes) {
        const newClass = newApi.Classes.get(name);

        if (!newClass)
            continue;

        const classTags = recordTagChanges(oldClass, oldClass.Tags, newClass.Tags);

        changed(
            oldClass,
            "superclass",
            stringValue(oldClass.Superclass),
            stringValue(newClass.Superclass),
        );

        changed(
            oldClass,
            "memory category",
            stringValue(oldClass.MemoryCategory),
            stringValue(newClass.MemoryCategory),
        );

        const oldMembers = new Map(oldClass.Members.map(m => [m.Name, m]));
        const newMembers = new Map(newClass.Members.map(m => [m.Name, m]));

        for (const [name, m] of newMembers)
            if (oldMembers.get(name)?.DescriptorType !== m.DescriptorType)
                flagDescriptor("Added", m, true);
        
        for (const [name, oldMember] of oldMembers) {
            const newMember = newMembers.get(name);

            if (!newMember) {
                flagDescriptor("Removed", oldMember);
                continue;
            }

            if (oldMember.DescriptorType !== newMember.DescriptorType)
                continue;

            if (oldMember.ThreadSafety !== "Unknown")
                changed(
                    newMember,
                    "thread safety",
                    { Type: "ThreadSafety", Value: oldMember.ThreadSafety },
                    { Type: "ThreadSafety", Value: newMember.ThreadSafety },
                );
            
            mergeTags(classTags, recordTagChanges(newMember, oldMember.Tags, newMember.Tags));

            changed(
                newMember,
                "capabilities",
                { Type: "Capabilities", Value: oldMember.Capabilities },
                { Type: "Capabilities", Value: newMember.Capabilities },
            );

            if (oldMember.DescriptorType === "Property" &&
                newMember.DescriptorType === "Property") {
                
                if (oldMember.Security.Read === oldMember.Security.Write && newMember.Security.Read === newMember.Security.Write) {
                    changed(
                        newMember, "security",
                        { Type: "ReadWrite", Value: oldMember.Security },
                        { Type: "ReadWrite", Value: newMember.Security },
                    );
                } else {
                    changed(
                        newMember, "read permissions",

                        secValue(
                            oldMember.Security.Read,
                            oldMember.Security.Read === oldMember.Security.Write ? "🔒" : "🔍",
                        ),

                        secValue(
                            newMember.Security.Read,
                            newMember.Security.Read === newMember.Security.Write ? "🔒" : "🔍",
                        ),
                    );
                    
                    changed(
                        newMember, "write permissions",
                        secValue(oldMember.Security.Write, "✏️"),
                        secValue(newMember.Security.Write, "✏️"),
                    );
                }
                
                changed(
                    newMember, "serialization",
                    { Type: "Serialization", Value: serializationText(oldMember.Serialization, true) },
                    { Type: "Serialization", Value: serializationText(newMember.Serialization, true) },
                );

                changed(
                    newMember, "value-type",
                    { Type: "Type", Value: oldMember.ValueType },
                    { Type: "Type", Value: newMember.ValueType },
                );

                changed(
                    newMember, "category",
                    stringValue(oldMember.Category),
                    stringValue(newMember.Category),
                );
            } else if ("Parameters" in oldMember && "Parameters" in newMember) {
                changed(
                    newMember, "security",
                    secValue(oldMember.Security),
                    secValue(newMember.Security),
                );

                changed(
                    newMember, "parameters",
                    { Type: "Parameters", Value: oldMember.Parameters },
                    { Type: "Parameters", Value: newMember.Parameters },
                );

                if ("ReturnType" in oldMember && "ReturnType" in newMember) {
                    changed(
                        newMember,

                        newMember.DescriptorType === "Callback"
                            ? "expected return-type"
                            : "return-type",
                        
                        { Type: "Type", Value: oldMember.ReturnType },
                        { Type: "Type", Value: newMember.ReturnType },
                    );
                }
            }
        }
    }

    for (const [name, e] of newApi.Enums)
        if (!oldApi.Enums.has(name))
            flagDescriptorHierarchy("Added", e);
    
    for (const [name, oldEnum] of oldApi.Enums) {   
        const newEnum = newApi.Enums.get(name);

        if (!newEnum) {
            flagDescriptorHierarchy("Removed", oldEnum);
            continue;
        }

        const enumTags = recordTagChanges(newEnum, oldEnum.Tags, newEnum.Tags);
        const oldItems = new Map(oldEnum.Items.map((item) => [item.Name, item]));
        const newItems = new Map(newEnum.Items.map((item) => [item.Name, item]));

        for (const [name, item] of newItems)
            if (!oldItems.has(name))
                flagDescriptor("Added", item, true);
        
        for (const [name, old] of oldItems) {
            const item = newItems.get(name);

            if (!item) {
                flagDescriptor("Removed", old);
                continue;
            }

            changed(
                item,
                "value",
                { Type: "number", Value: old.Value },
                { Type: "number", Value: item.Value },
            );

            mergeTags(enumTags, recordTagChanges(item, old.Tags, item.Tags));

            for (const type of ["Added", "Removed"] as const) {
                const source = type === "Added" ? item.LegacyNames : old.LegacyNames;
                const other = type === "Added" ? old.LegacyNames : item.LegacyNames;

                for (const name of [
                    ...new Set(source.filter((n) => !other.includes(n))),
                ].sort()) {
                    const diff = flagDescriptor(
                        type,
                        item,
                        false,
                        `LegacyName "${name}" ${type === "Added" ? "to" : "from"}`,
                    );
                    
                    diff.Context = {
                        Type: "LegacyName",
                        Value: name
                    };
                }
            }
        }
    }
    
    let diffs = results.filter((d) => !d.Parented && !d.Disposed);
    const changes = diffs.filter((d) => d.Type === "Changed");

    for (const diff of changes) {
        if (diff.Disposed)
            continue;

        for (const similar of changes.filter(d => d !== diff && d.Target === diff.Target)) {
            diff.Field = diff.Field.replaceAll(" and ", ", ") + ", and " + similar.Field;
            diff.From.push(...similar.From);
            diff.To.push(...similar.To);
            similar.Disposed = true;
        }
    }

    const securityGroups = new Map<ClassDescriptor, Diff[]>();

    for (const d of diffs) {
        if (d.Disposed || d.Type !== "Changed" || d.Field !== "security" || !isMember(d.Target))
            continue;

        const group = securityGroups.get(d.Target.Parent) ?? [];
        group.push(d);

        securityGroups.set(d.Target.Parent, group);
    }

    for (const [target, group] of securityGroups) {
        const first = group[0];

        if (group.length !== target.Members.length || !group.every(d =>
            changeText(d.From) === changeText(first.From) &&
            changeText(d.To) === changeText(first.To)))
            continue;
        
        for (const diff of group)
            diff.Disposed = true;

        const diff = record("Changed", target, false, "security");
        diff.From = first.From;
        diff.To = first.To;
        
        diffs.push(diff);
    }

    diffs = diffs
        .filter(d => !d.Disposed)
        .sort(compareDiffs);

    const sortChildren = (diff: Diff): void => {
        diff.Children.sort(compareDiffs);
        diff.Children.forEach(sortChildren);
    };

    diffs.forEach(sortChildren);
    return diffs;
}

export function changeText(values: Value[]): string {
    return values.map(valueText).join(" ");
}

export function diffText(
    diff: Diff,
    detailed = diff.Detailed,
    depth = 0,
): string {
    let what = descriptorText(diff.Target, detailed);

    if (diff.Type !== "Changed")
        what = (what.startsWith(diff.Field) ? "" : `${diff.Field} `) + what;
    else
        what = `the ${diff.Field} of ${what}`;

    let result = `${"\t".repeat(depth)}${diff.Type} ${what}`;
    
    if (diff.Type === "Changed") {
        const from = changeText(diff.From);
        const to = changeText(diff.To);
        
        const grouped = `from ${from} to ${to}`;
        result += grouped.length < 18 ? ` ${grouped}` : ` \r\n\tfrom: ${from}\r\n\t  to: ${to}\r\n`;
    } else if (diff.Type === "Renamed") {
        result = `Renamed ${diff.Field}\r\n"${diff.Target.Name}" to "${changeText(diff.To)}"`;
    }

    if (diff.Children.length)
        result += "\r\n"
            + [...diff.Children]
            .sort(compareDiffs)
            .map(child => diffText(child, detailed, depth + 1))
            .join("\r\n")
            + "\r\n";
    
    return result;
}

export interface DiffLayout {
    diff: Diff;
    breakAfter: boolean;
    breakBefore: boolean;
}

export function layoutDiffs(diffs: Diff[]): DiffLayout[] {
    let previousLead = "";
    let lastLine = "\r\n";
    
    return diffs.map((diff) => {
        const line = diffText(diff);
        const words = line.split(" ");
        
        const lead = `${words[0]} ${words[1]?.toLowerCase() === "the" ? words[2] : words[1]}`.trim();
        const lastNoBreak = !lastLine.endsWith("\r\n");

        let breakBefore = lead !== previousLead && previousLead !== "" && lastNoBreak;

        if (!breakBefore && lastNoBreak && line.endsWith("\r\n"))
            breakBefore = true;
        
        previousLead = lead;
        lastLine = line;
        
        return {
            diff,
            breakBefore,
            breakAfter: line.endsWith("\r\n"),
        };
    });
}
