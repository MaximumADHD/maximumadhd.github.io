export const TYPE_PRIORITIES = {
    Class: 0,
    Property: 1,
    Function: 2,
    Event: 3,
    Callback: 4,
    Enum: 5,
    EnumItem: 6,
} as const;

export const MEMBER_TYPES = [
    "Property",
    "Function",
    "Callback",
    "Event"
] as const;

export const TYPE_CATEGORIES = [
    "Primitive",
    "Class",
    "Enum",
    "Group",
    "DataType"
] as const;

export const SECURITY_LEVELS = [
    "None",
    "PluginSecurity",
    "LocalUserSecurity",
    "WritePlayerSecurity",
    "RobloxScriptSecurity",
    "RobloxSecurity",
    "NotAccessibleSecurity",
] as const;

export const THREAD_SAFETY = [
    "Safe",
    "Unsafe",
    "ReadSafe",
    "Unknown",
] as const;

const FORCE_OPTIONAL = [
    "Object",
    "Instance",
    "RaycastResult"
]

export type DescriptorType = keyof typeof TYPE_PRIORITIES;
export type TypeCategory = typeof TYPE_CATEGORIES[number];
export type SecurityType = typeof SECURITY_LEVELS[number];
export type ThreadSafety = typeof THREAD_SAFETY[number];
export type MemberType = typeof MEMBER_TYPES[number];

export type PropertySecurity = {
    Read: SecurityType,
    Write: SecurityType,
}

export type Serialization = {
    CanSave: boolean;
    CanLoad: boolean;
}

export interface LuauType {
    Name: string;
    Category: TypeCategory;
    SubTypes: LuauType[];
}

export interface Parameter {
    Name: string;
    Type: LuauType;
    Default: string | null;
}

export interface Capabilities {
    Read: string[];
    Write: string[];
}

interface IDescriptor<T extends DescriptorType> {
    Name: string;
    Tags: string[];
    DescriptorType: T;
}

export interface ClassDescriptor extends IDescriptor<"Class"> {
    DescriptorType: "Class";
    
    Superclass: string;
    MemoryCategory: string;
    
    Security: SecurityType;
    Members: MemberDescriptor[];

    // Position in a pre-order depth-first traversal of the subclass tree.
    // The <<<ROOT>>> class sits at -1, unresolvable ancestry stays at -2.
    SortIndex: number;
}

interface IMemberDescriptor<T extends MemberType, ISecurity = SecurityType> extends IDescriptor<T> {
    MemberType: MemberType;
    Parent: ClassDescriptor;
    ThreadSafety: ThreadSafety;
    Capabilities: Capabilities;
    Security: ISecurity;
}

export interface PropertyDescriptor extends IMemberDescriptor<"Property", PropertySecurity> {
    Serialization: Serialization;
    ValueType: LuauType;
    Category: string;
}

export interface FunctionDescriptor extends IMemberDescriptor<"Function"> {
    Parameters: Parameter[];
    ReturnType: LuauType;
}

export interface CallbackDescriptor extends IMemberDescriptor<"Callback"> {
    Parameters: Parameter[];
    ReturnType: LuauType;
}

export interface EventDescriptor extends IMemberDescriptor<"Event"> {
    Parameters: Parameter[];
}

export type MemberDescriptor =
    | PropertyDescriptor 
    | FunctionDescriptor
    | CallbackDescriptor
    | EventDescriptor;

export interface EnumDescriptor extends IDescriptor<"Enum"> {
    Items: EnumItemDescriptor[];
}

export interface EnumItemDescriptor extends IDescriptor<"EnumItem"> {
    LegacyNames: string[];
    Parent: EnumDescriptor;
    Value: number;
}

export type Descriptor = 
    | ClassDescriptor 
    | MemberDescriptor 
    | EnumDescriptor
    | EnumItemDescriptor;

export interface Database {
    Classes: Map<string, ClassDescriptor>;
    Enums: Map<string, EnumDescriptor>;
}

function maybeObject(value: unknown): Record<string, unknown> | null {
    if (!value || typeof value !== "object" || Array.isArray(value))
        return null;

    return value as Record<string, unknown>;
}

function object(value: unknown, path: string): Record<string, unknown> {
    if (!value || typeof value !== "object" || Array.isArray(value))
        throw new Error(`${path} must be an object.`);

    return value as Record<string, unknown>;
}

function array(value: unknown, path: string): unknown[] {
    if (!Array.isArray(value))
        throw new Error(`${path} must be an array.`);

    return value;
}

function string(value: unknown, path: string): string {
    if (typeof value !== "string")
        throw new Error(`${path} must be a string.`);

    return value;
}

function name(value: unknown, path: string): string {
    const result = string(value, path);

    if (!result)
        throw new Error(`${path} must not be empty.`);

    return result;
}

function boolean(value: unknown, path: string): boolean {
    if (typeof value !== "boolean")
        throw new Error(`${path} must be a boolean.`);

    return value;
}

function strings(value: unknown, path: string): string[] {
    return array(value, path).map((item, i) => string(item, `${path}[${i}]`));
}

export function cleanTags(tags: string[]): string[] {
    return tags.filter(tag => tag !== "NotReplicated" || !tags.includes("ReadOnly"));
}

function tags(value: unknown, path: string): string[] {
    if (value === undefined)
        return [];

    const result = array(value, path).flatMap((item, i) => {
        if (typeof item === "string")
            return [item];

        object(item, `${path}[${i}]`); // Metadata entries are not diffable tags.
        return [];
    });

    return cleanTags(result);
}

export function luauType(value: unknown, path: string): LuauType {
    if (Array.isArray(value)) {
        return {
            Name: "Tuple",
            Category: "Group",
            SubTypes: value.map((v, i) => luauType(v, `${path}[${i}]`)),
        };
    }

    const raw = object(value, path);
    const category = string(raw.Category, `${path}.Category`);
    
    if (!TYPE_CATEGORIES.includes(category as any))
        throw new Error(`${path}.Category is unsupported: ${category}.`);
    
    return {
        Name: name(raw.Name, `${path}.Name`),

        SubTypes: raw.SubTypes === undefined ? []
            : array(raw.SubTypes, `${path}.SubTypes`).map((v, i) =>
                luauType(v, `${path}.SubTypes[${i}]`),
            ),
        
        Category: category as TypeCategory,
    };
}

function optional(type: LuauType): LuauType {
    if (!type.Name.endsWith("?")) 
        type.Name += "?";
    
    return type;
}

function security(value: unknown, path: string): SecurityType {
    if (value === undefined)
        return "None";
    
    const result = string(value, path);
    
    if (!SECURITY_LEVELS.includes(result as any))
        throw new Error(`${path} has unsupported security: ${result}.`);
    
    return result as SecurityType;
}

function capabilities(value: unknown, path: string): Capabilities {
    if (value === undefined || value === null)
        return { Read: [], Write: [] };
    
    if (Array.isArray(value)) {
        const items = strings(value, path);
        return { Read: items, Write: [...items] };
    }
    
    const raw = object(value, path);
    
    return {
        Read: raw.Read === undefined ? [] : strings(raw.Read, `${path}.Read`),
        Write: raw.Write === undefined ? [] : strings(raw.Write, `${path}.Write`),
    };
}

function parameters(value: unknown, path: string): Parameter[] {
    return array(value, path).map((item, i) => {
        const p = `${path}[${i}]`;
        const raw = object(item, p);

        const type = luauType(raw.Type, `${p}.Type`);
        const def = raw.Default == null ? null : string(raw.Default, `${p}.Default`);

        if (def !== null)
            optional(type);

        return {
            Name: name(raw.Name, `${p}.Name`),
            Type: type,
            Default: def
        };
    });
}

function member(value: unknown, parent: ClassDescriptor, path: string): MemberDescriptor {
    const raw = object(value, path);
    const rawMemberType = string(raw.MemberType, `${path}.MemberType`);

    if (!MEMBER_TYPES.includes(rawMemberType as any))
        throw new Error(`${path}.MemberType is unsupported: ${rawMemberType}.`);

    let memberType = rawMemberType as MemberType
    let safety: ThreadSafety = "Unknown"
    let rawSafety = raw.ThreadSafety
    
    if (rawSafety !== undefined)
        if (THREAD_SAFETY.includes(rawSafety as any))
            safety = rawSafety as ThreadSafety;

    const member = {
        Name: name(raw.Name, `${path}.Name`),
        Tags: tags(raw.Tags, `${path}.Tags`),

        MemberType: memberType,
        Parent: parent,

        ThreadSafety: safety,
        Capabilities: capabilities(raw.Capabilities, `${path}.Capabilities`),
    };

    if (parent.Tags.includes("Deprecated") && !member.Tags.includes("Deprecated"))
        member.Tags.push("Deprecated");

    if (memberType === "Property") {
        const sec = typeof raw.Security === "string"
                ? { Read: raw.Security, Write: raw.Security }
                : object(raw.Security, `${path}.Security`);
        
        const serial = maybeObject(raw.Serialization);
        const type = luauType(raw.ValueType, `${path}.ValueType`);

        if (type.Category === "Class")
            optional(type);

        const result: PropertyDescriptor = {
            ...member,
            DescriptorType: "Property",
            ValueType: type,
            Category: string(raw.Category, `${path}.Category`),

            Security: {
                Read: security(sec.Read, `${path}.Security.Read`),
                Write: security(sec.Write, `${path}.Security.Write`),
            },
            
            Serialization: {
                CanSave: boolean(
                    serial?.CanSave ?? false,
                    `${path}.Serialization.CanSave`,
                ),
            
                CanLoad: boolean(
                    serial?.CanLoad ?? false,
                    `${path}.Serialization.CanLoad`,
                ),
            },
        };

        return result;
    } else {
        const typeWithParams = {
            ...member,
            Security: security(raw.Security, `${path}.Security`),
            Parameters: parameters(raw.Parameters, `${path}.Parameters`),
        }

        if (memberType !== "Event") {
            var returns = luauType(raw.ReturnType, `${path}.ReturnType`);

            if (returns != null && memberType === "Function")
                if (FORCE_OPTIONAL.includes(returns.Name)) 
                    optional(returns);

            return {
                ...typeWithParams,
                ReturnType: returns,
                DescriptorType: memberType,
            }
        } else {
            return {
                ...typeWithParams,
                DescriptorType: "Event",
            };
        }
    }
}

function unique<T extends { Name: string }>(
    items: T[],
    path: string,
): Map<string, T> {
    const map = new Map<string, T>();

    for (const item of items) {
        if (map.has(item.Name))
            throw new Error(`${path} contains duplicate name "${item.Name}".`);

        map.set(item.Name, item);
    }
    
    return map;
}

export function parseDatabase(value: unknown): Database {
    const raw = object(value, "API dump");
    
    if (raw.Classes === undefined && raw.classes !== undefined)
        throw new Error("API dump v2 is not supported.");

    const classes = array(raw.Classes, "Classes").map((value, i) => {
        const path = `Classes[${i}]`;
        const raw = object(value, path);

        const result: ClassDescriptor = {
            DescriptorType: "Class",
            Name: name(raw.Name, `${path}.Name`),
            Tags: tags(raw.Tags, `${path}.Tags`),
            Superclass: string(raw.Superclass, `${path}.Superclass`),

            MemoryCategory: raw.MemoryCategory === undefined
                ? "" : string(raw.MemoryCategory, `${path}.MemoryCategory`),
            
            Members: [],
            Security: "None",
            SortIndex: -2,
        };

        const members = array(raw.Members, `${path}.Members`).map((m, j) =>
            member(m, result, `${path}.Members[${j}]`),
        );
        
        result.Members = members;
        unique(members, `${path}.Members`);
        
        if (members.length &&
            members.every(m => m.Tags.includes("Deprecated")) &&
            !result.Tags.includes("Deprecated"))
            result.Tags.push("Deprecated");
        
        const counts = new Map<number, number>();

        for (const m of members) {
            const levels = m.DescriptorType === "Property" ? [
                SECURITY_LEVELS.indexOf(m.Security.Read),
                SECURITY_LEVELS.indexOf(m.Security.Write),
            ] : [ SECURITY_LEVELS.indexOf(m.Security) ];
            
            if (levels.every((level) => level >= 4)) {
                const level = Math.max(...levels);
                counts.set(level, (counts.get(level) ?? 0) + 1);
            }
        }
        if (members.length &&
            [...counts.values()].reduce((a, b) => a + b, 0) ===
            members.length
        ) {
            const level = [...counts].sort(
                ([a, x], [b, y]) => x * 1000 + a - (y * 1000 + b),
            )[0][0];

            result.Security = SECURITY_LEVELS[level];
        }
        
        return result;
    });
    
    const classMap = unique(classes, "Classes");
    const root = classMap.get("<<<ROOT>>>");

    // Subclass tree: the reverse of each class's Superclass reference.
    const subclasses = new Map<string, ClassDescriptor[]>();

    for (const item of classes) {
        if (item === root)
            continue;
        
        const siblings = subclasses.get(item.Superclass);

        if (siblings)
            siblings.push(item);
        else
            subclasses.set(item.Superclass, [item]);
    }

    for (const siblings of subclasses.values())
        siblings.sort((a, b) => ordinal(a.Name, b.Name));

    // Pre-order depth-first traversal of the subclass tree, so each class
    // sorts directly ahead of its subclasses. Iterative so deeply nested
    // uploads cannot overflow the stack.
    if (root)
        root.SortIndex = -1;

    const stack = [...(subclasses.get("<<<ROOT>>>") ?? [])].reverse();
    let index = 0;

    while (stack.length) {
        const item = stack.pop()!;
        item.SortIndex = index++;

        const children = subclasses.get(item.Name);

        if (children)
            for (let i = children.length - 1; i >= 0; i--)
                stack.push(children[i]);
    }

    // Anything the traversal never reached is orphaned or part of a cycle;
    // reject cycles like before, and leave orphans unresolved.
    for (const start of classes) {
        if (start.SortIndex !== -2)
            continue;
        
        const seen = new Set<ClassDescriptor>();
        let current: ClassDescriptor | undefined = start;

        while (current && current.SortIndex === -2) {
            if (seen.has(current))
                throw new Error(`Classes contain an inheritance cycle at "${current.Name}".`);
            
            seen.add(current);
            current = classMap.get(current.Superclass);
        }
    }
    
    const enums = array(raw.Enums, "Enums").map((value, i) => {
        const path = `Enums[${i}]`;
        const raw = object(value, path);

        const result: EnumDescriptor = {
            DescriptorType: "Enum",
            Name: name(raw.Name, `${path}.Name`),
            Tags: tags(raw.Tags, `${path}.Tags`),
            Items: [],
        };
        
        result.Items = array(raw.Items, `${path}.Items`).map((value, j) => {
            const p = `${path}.Items[${j}]`;
            const raw = object(value, p);

            if (typeof raw.Value !== "number" || !Number.isSafeInteger(raw.Value))
                throw new Error(`${p}.Value must be an integer.`);

            const itemTags = tags(raw.Tags, `${p}.Tags`);

            if (result.Tags.includes("Deprecated"))
                if (!itemTags.includes("Deprecated"))
                    itemTags.push("Deprecated");

            return {
                DescriptorType: "EnumItem",
                Name: name(raw.Name, `${p}.Name`),
                
                Tags: itemTags,
                Parent: result,

                LegacyNames: raw.LegacyNames === undefined
                    ? [] : strings(raw.LegacyNames, `${p}.LegacyNames`),
                
                Value: raw.Value,
            };
        });

        let items = result.Items
        unique(items, `${path}.Items`);

        if (!result.Tags.includes("Deprecated") && items.length)
            if (items.every(item => item.Tags.includes("Deprecated")))
                result.Tags.push("Deprecated");

        return result;
    });

    return {
        Classes: classMap,
        Enums: unique(enums, "Enums")
    };
}

export function parseJson(text: string, label: string): Database {
    try {
        return parseDatabase(
            JSON.parse(text.replace(/^\uFEFF/, "")) as unknown,
        );
    } catch (error) {
        throw new Error(`${label}: ${error instanceof Error ? error.message : String(error)}`);
    }
}

export function isMemberType(type: string): type is MemberType {
    return MEMBER_TYPES.includes(type as MemberType);
}

export function isMember(desc: Descriptor): desc is MemberDescriptor {
    var descType = desc.DescriptorType;
    return isMemberType(descType);
}

export function hidden(desc: Descriptor): boolean {
    if (desc.Tags.includes("Hidden") || desc.Tags.includes("Deprecated"))
        return true;

    if (desc.DescriptorType === "Class") {
        return (
            SECURITY_LEVELS.indexOf(desc.Security) >= 4 ||
            desc.Members.length > 0 && desc.Members.every(hidden)
        );
    }
    
    if (!isMember(desc))
        return false;

    const secured = desc.DescriptorType === "Property" 
        ? [ desc.Security.Read, desc.Security.Write ]
            .every(sec => SECURITY_LEVELS.indexOf(sec) >= 4)
        : SECURITY_LEVELS.indexOf(desc.Security) >= 4;

    const capabilities = [
        ...desc.Capabilities.Read,
        ...desc.Capabilities.Write,
    ];

    return secured || capabilities.includes("InternalTest");
}

export function compareDescriptors(a: Descriptor, b: Descriptor): number {
    // Member sorting calls the desktop tool"s typed class overload (no inheritance ordering).
    const compareParents = (a: ClassDescriptor, b: ClassDescriptor) =>
        Number(hidden(a)) - Number(hidden(b)) || ordinal(a.Name, b.Name);

    if (a.DescriptorType === "Class" && b.DescriptorType === "Class" && a.SortIndex !== b.SortIndex)
        return a.SortIndex - b.SortIndex;
    
    if (a.DescriptorType === "EnumItem" && b.DescriptorType === "EnumItem")
        return a.Parent !== b.Parent
            ? compareDescriptors(a.Parent, b.Parent)
            : a.Value - b.Value;
    
    if (a.DescriptorType === "Property" && b.DescriptorType === "Property") {
        if (hidden(a) !== hidden(b))
            return hidden(a) ? 1 : -1;

        if (a.Parent !== b.Parent)
            return compareParents(a.Parent, b.Parent);
        
        const lower = (s: string) => s[0] !== s[0].toUpperCase();
        
        if (lower(a.Name) === lower(b.Name) && a.Category !== b.Category) {
            return ordinal(a.Category, b.Category);
        }
    }

    if (isMember(a) && isMember(b) && a.Parent !== b.Parent) {
        return compareParents(a.Parent, b.Parent);
    }
    
    let typePriorityA = TYPE_PRIORITIES[a.DescriptorType];
    let typePriorityB = TYPE_PRIORITIES[b.DescriptorType];

    if (typePriorityA && typePriorityB && typePriorityA !== typePriorityB)
        return typePriorityA - typePriorityB;

    let hiddenA = hidden(a);
    let hiddenB = hidden(b);

    if (hiddenA !== hiddenB)
        return hiddenA ? 1 : -1;
    
    return ordinal(a.Name, b.Name)
}

export function ordinal(a: string, b: string): number {
    return a < b ? -1 : a > b ? 1 : 0;
}