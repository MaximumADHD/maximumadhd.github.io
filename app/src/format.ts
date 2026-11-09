import type {
    LuauType,
    Parameter,
    Descriptor,
    Capabilities,
    SecurityType,
    Serialization,
    DescriptorType,
    PropertySecurity,
} from "./apiDumpV1";

import {
    cleanTags,
    isMember,
} from "./apiDumpV1";

export const LUAU_TYPES: Record<string, string> = {
    Dictionary: "{ [string]: any }",
    Map: "{ [any]: any }",
    Array: "{ any }",
    Objects: "{ Instance }",
    Instances: "{ Instance }",
    Function: "((...any) -> ...any)",
    OptionalCoordinateFrame: "CFrame?",
    CoordinateFrame: "CFrame",
    ProtectedString: "string",
    ContentId: "string",
    null: "()",
    void: "()",
    int: "number",
    int64: "number",
    float: "number",
    double: "number",
    bool: "boolean",
    Variant: "any",
};

export const DOCS_URL_BASE = "https://create.roblox.com/docs/";
export const ANCHOR_PREFIX = "Click here to view the full docs for ";
export const ROOT_CLASS_NAME = "<<<ROOT>>>";

export const ROOT_CLASS_DESCRIPTION =
    "`<<<ROOT>>>`\n"
    + "--\n"
    + "`<<<ROOT>>>` is the static default name used for Roblox's reflection "
    + "class descriptor, and it's also the root static entry point to the "
    + "class tree on the C++ side of things.\n\n"
    + "Its existence is confirmed by calling `object:IsA(\"<<<ROOT>>>\")` "
    + "on any `Object` or `Instance`, which will always return true.";

export function absoluteName(type: LuauType) {
    return type.Name.replaceAll("?", "");
}

export function luauType(type: LuauType): string {
    const name = absoluteName(type);
    
    if (LUAU_TYPES[name])
        return LUAU_TYPES[name];

    if (name === "Tuple")
        return type.SubTypes.length
            ? `(${type.SubTypes.map(t => luauType(t)
                .replaceAll("?", ""))
                .join(", ")
            })`
            : "...any";
    
    return type.Name;
}

export function isOptional(type: LuauType) {
    return type.Name.endsWith("?") || luauType(type).endsWith("?");
}

export function typeText(type: LuauType) {
    let text = type.Category === "Enum" ? `Enum.${type.Name}` : luauType(type);

    if (isOptional(type) && !text.endsWith("?"))
        text += "?";
    else if (!isOptional(type) && type.Name === "Function")
        text = "(...any) -> ...any";

    return text;
}

export function inQuotes(text: string) {
    if (text.length >= 2 && text.startsWith('"') && text.endsWith('"'))
        return text;
    
    return `"${text.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

export function parametersText(params: Parameter[]) {
    return `(${params.map((p) => {
        let result = `${p.Name}: ${typeText(p.Type)}`;

        if (p.Default !== null && p.Type.Category !== "DataType") {
            const def = absoluteName(p.Type) === "string" 
                || p.Type.Category === "Enum"
                    ? inQuotes(p.Default)
                    : p.Default;
            
            result += ` = ${def}`;
        }

        return result;
    }).join(", ")})`;
}

export function securityText(sec: string, prefix = "🔒", displayNone = false) {
    if (!displayNone && sec === "None")
        return "";
    else if (sec == "RobloxSecurity")
        sec = "RobloxEngine";
    else
        sec = sec.replace("Security", "");

    return `{${prefix}${sec}}`;
}

export function readWriteText(sec: PropertySecurity, displayNone = false) {
    const merged = sec.Read === sec.Write;

    return [
        securityText(sec.Read, merged ? "🔒" : "🔍", displayNone),
        merged ? "" : securityText(sec.Write, "✏️", displayNone),
    ].filter(Boolean).join(" ");
}

export function capabilitiesText(caps: Capabilities, displayUndefined = false) {
    const read = [...new Set(caps.Read.filter(x => !caps.Write.includes(x)))]
        .sort().join(" | ");
    
    const write = [...new Set(caps.Write.filter(x => !caps.Read.includes(x)))]
        .sort().join(" | ");
    
    if (read || write) {
        return [
            read ? `{🚧${write ? "🔎" : ""}${read}}` : "",
            write ? `{🚧✏️${write}}` : "",
        ].filter(Boolean).join(" ");
    }

    const union = [...new Set([...caps.Read, ...caps.Write])]
        .sort().join(" | ");
    
    return union ? `{🚧${union}}` : displayUndefined ? "{🚧Undefined}" : "";
}

export function threadSafetyText(safety: string, type?: DescriptorType) {
    if (safety === "Unknown")
        return "";

    let isProperty = (type === "Property");
    let isUnsafe = (safety === "Unsafe");

    if (isProperty !== isUnsafe)
        return "";

    return `{🧬${safety}}`;
}

export function serializationText(
    serial: Serialization,
    diff = false,
): string {
    if (!diff && (serial.CanSave || !serial.CanLoad))
        return "";

    const index = Number(serial.CanSave) | (Number(serial.CanLoad) << 1);
    return `[${["🚫None", "💾SaveOnly", "📁LoadOnly", "💾|📁Serialized"][index]}]`;
}

export function tagsText(tags: string[]): string {
    let result = cleanTags(tags)
        .map((t) => `[${t}]`)
        .join(" ");

    return result;
}

export function linkText(name: string, url: string): string {
    return `[${name}](${url})`;
}

interface TypeValue<T extends string, V> {
    Type: T;
    Value: V;
};

export type Value =
    | TypeValue<"string", string>
    | TypeValue<"number", number>
    | TypeValue<"Serialization", string>
    | TypeValue<"ReadWrite", PropertySecurity>
    | TypeValue<"Security", SecurityType> & { Prefix: string }
    | TypeValue<"Capabilities", Capabilities>
    | TypeValue<"Parameters", Parameter[]>
    | TypeValue<"ThreadSafety", string>
    | TypeValue<"Type", LuauType>
    | TypeValue<"Tags", string[]>

export function valueText(target: Value) {
    switch (target.Type) {
        case "string":
        case "number":
        case "Serialization": {
            return String(target.Value);
        }
        case "Type": {
            return typeText(target.Value);
        }
        case "Parameters": {
            return parametersText(target.Value);
        }
        case "Security": {
            return securityText(target.Value, target.Prefix);
        }
        case "ReadWrite": {
            return readWriteText(target.Value);
        }
        case "Capabilities": {
            return capabilitiesText(target.Value);
        }
        case "ThreadSafety": {
            return threadSafetyText(target.Value);
        }
    }
}

export type Token =
    | TypeValue<"Tags", string[]>
    | TypeValue<"Type", LuauType>
    | TypeValue<"Parameters", Parameter[]>
    | TypeValue<"Capabilities", Capabilities>
    | TypeValue<"Text", string> & { Name: string }
    | TypeValue<"Link", string> & { Name: string; Url?: string, Description?: string }

export function descriptorTokens(desc: Descriptor, detailed: boolean): Token[] {
    const tokens: Token[] = [
        { Type: "Text", Name: "DescriptorType", Value: desc.DescriptorType },
        { Type: "Text", Name: "symbol", Value: " " },
    ];

    let descType = desc.DescriptorType;
    let isEnum = descType === "EnumItem";

    if ("Parent" in desc) {
        let parentUrl = DOCS_URL_BASE
            + "reference/engine/"
            + (isEnum ? "enums/" : "classes/")
            + desc.Parent.Name;
        
        tokens.push({
            Type: "Link",
            Name: isEnum ? "EnumName" : "ClassName",
            Value: desc.Parent.Name,
            Url: parentUrl,
        });

        tokens.push({
            Type: "Text",
            Name: "symbol",
            Value: descType === "Function" ? ":" : ".",
        });

        // Enum doc pages are plain tables with no per-item headers to
        // anchor to, so enum item names render as plain text.
        if (isEnum) {
            tokens.push({
                Type: "Text",
                Name: "Name",
                Value: desc.Name,
            });
        } else {
            tokens.push({
                Name: "Name",
                Type: "Link",
                Url: parentUrl + '#' + desc.Name,
                
                Description: ANCHOR_PREFIX
                    + descType.toLowerCase()
                    + ": `"
                    + desc.Parent.Name 
                    + (descType === "Function" ? ":" : ".")
                    + desc.Name
                    + "`",
                
                Value: desc.Name,
            });
        }
    } else if (descType == "Class" || descType == "Enum") {
        tokens.push({
            Type: "Link",
            Name: "Name",
            Value: desc.Name,
            Url: DOCS_URL_BASE + "reference/engine/" + (descType === "Class" ? "classes/" : "enums/") + desc.Name,
        })
    } else {
        tokens.push({
            Type: "Text",
            Name: `Name ${descType}`,
            Value: desc.Name,
        });
    }

    if (!detailed) 
        return tokens;

    const symbol = (value: string) => tokens.push({
        Type: "Text",
        Name: "symbol",
        Value: value
    });
    
    if (desc.DescriptorType === "Class") {
        symbol(" extends ");    

        if (desc.Superclass === "<<<ROOT>>>") {
            tokens.push({
                Type: "Link",
                Name: "Superclass",
                Value: desc.Superclass,
                Description: ROOT_CLASS_DESCRIPTION,
            });
        } else {
            tokens.push({
                Type: "Link",
                Name: "Superclass",
                Value: desc.Superclass,
                Url: DOCS_URL_BASE + "reference/engine/classes/" + desc.Superclass,
            });
        }
   
        symbol(" ");

        tokens.push({
            Type: "Text",
            Name: "Security",
            Value: securityText(desc.Security),
        });
    } else if (desc.DescriptorType === "EnumItem") {
        symbol(" : ");

        tokens.push({
            Type: "Text",
            Name: "Value",
            Value: String(desc.Value),
        });
    } else if (desc.DescriptorType !== "Enum") {
        if (desc.DescriptorType === "Property") {
            symbol(": ");

            tokens.push({
                Type: "Type",
                Value: desc.ValueType
            });
        } else {
            tokens.push({
                Type: "Parameters",
                Value: desc.Parameters
            });

            if (desc.DescriptorType !== "Event") {
                symbol(" -> ");
                tokens.push({ Type: "Type", Value: desc.ReturnType });
            }
        }
    }

    symbol(" ");

    if (desc.Tags.length) {
        tokens.push({ 
            Type: "Tags", 
            Value: desc.Tags 
        });
    }
    
    if (isMember(desc)) {
        symbol(" ");

        tokens.push({
            Type: "Capabilities",
            Value: desc.Capabilities
        });

        symbol(" ");

        tokens.push({
            Value: desc.DescriptorType === "Property"
                ? readWriteText(desc.Security)
                : securityText(desc.Security),

            Type: "Text",
            Name: "Security",
        });

        if (desc.DescriptorType === "Property") {
            symbol(" ");

            tokens.push({
                Type: "Text",
                Name: "Serialization",
                Value: serializationText(desc.Serialization),
            });
        }

        symbol(" ");

        tokens.push({
            Type: "Text",
            Name: "ThreadSafety",
            Value: threadSafetyText(desc.ThreadSafety, desc.DescriptorType),
        });
        
        if (desc.DescriptorType === "Function" || desc.DescriptorType === "Property") {
            symbol(" ");
        }
    }
    return tokens;
}

export function descriptorText(desc: Descriptor, detailed = false): string {
    let result = descriptorTokens(desc, detailed)
        .map(t => {
            switch (t.Type) {
                case "Text": {
                    return t.Value;
                }
                case "Link": {
                    return t.Value;
                }
                case "Tags": {
                    return tagsText(t.Value);
                }
                case "Type": {
                    return typeText(t.Value);
                }
                case "Parameters": {
                    return parametersText(t.Value);
                }
                case "Capabilities": {
                    return capabilitiesText(t.Value);
                }
            }
        })
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
    
    return result;
}
