import { Fragment } from "react";
import type { ReactNode } from "react";
import { hidden } from "../apiDumpV1";

import type {
    Descriptor,
    Parameter,
    LuauType,
} from "../apiDumpV1";

import {
    capabilitiesText,
    descriptorTokens,
    DOCS_URL_BASE,
    ANCHOR_PREFIX,
    absoluteName,
    isOptional,
    LUAU_TYPES,
    luauType,
    inQuotes,
} from "../format";

import {
    Tooltip,
    TooltipAnchor,
    TooltipSpan,
} from "./Tooltip";

export const type = (text: string) => <span className="Type">{text}</span>;

export const symbol = (text: string, link?: string): ReactNode => {
    if (link !== undefined)
        return <a className="symbol" href={link}>{text}</a>;

    return <span className="symbol">{text}</span>;
}

function typeTokens(text: string): ReactNode {
    let result = text
        .split(/([()[\]{}:.,+<>?=|&*\/%-]+)/)
        .map((part, i) => (
            <Fragment key={i}>
                {/^[()[\]{}:.,+<>?=|&*\/%-]+$/.test(part)
                    ? symbol(part)
                    : part && type(part)}
            </Fragment>
        ));

    return result;
}

interface TypeViewProps {
    value: LuauType;
}

const PRIMITIVE_BASE_URL = `${DOCS_URL_BASE}luau`;
const ENGINE_BASE_URL = `${DOCS_URL_BASE}reference/engine`;

const PRIMITIVE_URLS = {
    nil: `${PRIMITIVE_BASE_URL}/nil`,
    Tuple: `${PRIMITIVE_BASE_URL}/tuples`,
    number: `${PRIMITIVE_BASE_URL}/numbers`,
    string: `${PRIMITIVE_BASE_URL}/strings`,
    boolean: `${PRIMITIVE_BASE_URL}/booleans`,
    buffer: `${ENGINE_BASE_URL}/libraries/buffer`,
    Array: `${PRIMITIVE_BASE_URL}/tables#arrays`,
    Functions: `${PRIMITIVE_BASE_URL}/functions`,
    Dictionary: `${PRIMITIVE_BASE_URL}/tables#dictionaries`,
}

export function TypeView({ value }: TypeViewProps): ReactNode {
    const category = value.Category;
    const name = absoluteName(value);

    const displayName = name in LUAU_TYPES
        ? LUAU_TYPES[name]
        : undefined;
    
    let content: ReactNode;

    switch (name) {
        case "Array": {
            content = <TooltipAnchor href={PRIMITIVE_URLS.Array} description={ANCHOR_PREFIX + "type: `Array`"}>
                {symbol("{ ")}
                {type("any")}
                {symbol(" }")}
            </TooltipAnchor>;
            
            break;
        }
        case "Dictionary":
        case "Map": {
            content = <TooltipAnchor href={PRIMITIVE_URLS.Dictionary} description={ANCHOR_PREFIX + "type: `" + name + "`"}>
                {symbol("{ [")}
                {type(name === "Dictionary" ? "string" : "any")}
                {symbol("]: ")}
                {type("any")}
                {symbol(" }")}
            </TooltipAnchor>;

            break;
        }
        case "Objects":
        case "Instances": {
            content = <TooltipAnchor href={PRIMITIVE_URLS.Array} description={ANCHOR_PREFIX + "type: `" + name + "`"}>
                {symbol("{ ")}
                {type("Instance")}
                {symbol(" }")}
            </TooltipAnchor>;

            break;
        }
        case "Tuple": {
            content = <TooltipAnchor href={PRIMITIVE_URLS.Tuple} description={ANCHOR_PREFIX + "type: `Tuple`"}>
                {value.SubTypes.length ? (<>
                    {symbol("(")}
                    {value.SubTypes.map((t, i) => (
                        <Fragment key={i}>
                            {i > 0 && symbol(", ")}
                            <TypeView value={t} />
                        </Fragment>
                    ))}
                    {symbol(")")}
                </>) : (<>
                    {symbol("...")}
                    {type("any")}
                </>)}
            </TooltipAnchor>;

            break;
        }
        case "Function": {
            content = <>
                {isOptional(value) && symbol("(")}
                <TooltipAnchor href={PRIMITIVE_URLS.Functions} description={ANCHOR_PREFIX + "type: `Function`"}>
                    {symbol("(...")}
                    {type("any")}
                    {symbol(") -> ...")}
                    {type("any")}
                </TooltipAnchor>
                {isOptional(value) && symbol(")")}
            </>;

            break;
        }
        case "null": {
            content = <TooltipAnchor href={PRIMITIVE_URLS.nil} description={ANCHOR_PREFIX + "type: `nil`"}>{type("nil")}</TooltipAnchor>;
            break;
        }
        case "void": {
            content = <TooltipSpan className="void" description={"`void`\n No values are returned."}>{symbol("()")}</TooltipSpan>;
            break;
        }
        default: {
            content = typeTokens(luauType(value).replaceAll("?", ""));
        }
    }

    if (category === "Enum") {
        content = <TooltipAnchor href={ENGINE_BASE_URL + "/enums/" + name} description={ANCHOR_PREFIX + "enum: `" + name + "`"}>
            {type("Enum")}
            {symbol(".")}
            {content}
        </TooltipAnchor>;
    } else if (category === "Class") {
        content = <TooltipAnchor href={ENGINE_BASE_URL + "/classes/" + name} description={ANCHOR_PREFIX + "class: `" + name + "`"}>{content}</TooltipAnchor>;
    } else if (name in PRIMITIVE_URLS) {
        let key = name as keyof typeof PRIMITIVE_URLS;
        content = <TooltipAnchor href={PRIMITIVE_URLS[key]} description={ANCHOR_PREFIX + "type: `" + name + "`"}>{content}</TooltipAnchor>;
    } else if (displayName && displayName in PRIMITIVE_URLS) {
        let key = displayName as keyof typeof PRIMITIVE_URLS;
        content = <TooltipAnchor href={PRIMITIVE_URLS[key]} description={ANCHOR_PREFIX + "type: `" + displayName + "`"}>{content}</TooltipAnchor>;
    } else if (category == "DataType") {
        content = <TooltipAnchor href={ENGINE_BASE_URL + "/datatypes/" + name} description={ANCHOR_PREFIX + "datatype: `" + name + "`"}>{content}</TooltipAnchor>;
    }

    return <>
        {content}
        {isOptional(value) && symbol("?")}
    </>;
}

interface ParameterViewProps {
    parameter: Parameter;
}

function ParameterView({ parameter: p }: ParameterViewProps): ReactNode {
    const name = absoluteName(p.Type);

    const ty = luauType(p.Type)
        .replaceAll("?", "");
    
    let def: ReactNode = null;

    if (p.Default !== null && p.Default !== "nil" && p.Type.Category !== "DataType") {
        let content: ReactNode;
        
        if (p.Type.Category === "Enum" || ty === "string")
            content = <span className="String">{inQuotes(p.Default)}</span>;
        else if (name === "Array" || name === "Dictionary")
            content = symbol(p.Default);
        else if (ty === "number" && p.Default.startsWith("-"))
            content = <>
                {symbol("-")}
                <span className="number">{p.Default.slice(1)}</span>
            </>;
        else 
            content = <span className={ty}>{p.Default}</span>;
        
        def = <>
            {symbol(" = ")}
            {content}
        </>;
    }

    return <span className="Parameter">
        {p.Type.Name === "Tuple" ? (<>
            {symbol("...: ")}
            {type("any")}
        </>) : (<>
            <span className="ParamName">{p.Name}</span>
            {symbol(": ")}
            <TypeView value={p.Type} />
        </>)}
        {def}
    </span>
}

interface ParametersViewProps {
    values: Parameter[];
    change?: boolean;
}

export function ParametersView({
    values,
    change = false,
}: ParametersViewProps): ReactNode {
    return <span className={`Parameters${change ? " change" : ""}`}>
        {symbol("(")}
        {values.map((p, i) => (
            <Fragment key={i}>
                {i > 0 && symbol(", ")}
                <ParameterView parameter={p} />
            </Fragment>
        ))}
        {symbol(")")}
    </span>;
}

interface TagsViewProps {
    tags: string[];
}

export function TagsView({ tags }: TagsViewProps): ReactNode {
    return <>
        {[...tags].sort().map((tag, i) => (
            <Fragment key={i}>
                {i > 0 && symbol(" ")}
                <Tooltip className="Tag" text={`[🏷️${tag}]`} />
            </Fragment>
        ))}
    </>;
}

interface DescriptorViewProps {
    desc: Descriptor;
    keepDim?: boolean;
    detailed?: boolean;
}

export function DescriptorView({
    desc,
    keepDim = false,
    detailed = false,
}: DescriptorViewProps): ReactNode {
    return <span className={`${desc.DescriptorType}${keepDim && hidden(desc) ? " dim" : ""}`}>
        {descriptorTokens(desc, detailed).map((token, i) => {
            let content: ReactNode;
            
            switch (token.Type) {
                case "Link": {
                    const description = token.Description ?? (ANCHOR_PREFIX 
                        + (token.Name === "EnumName"
                        ? "enum: `" + token.Value + "`"
                        : "class: `" + token.Value + "`"));
                    
                    content = token.Url !== undefined ? (
                        <TooltipAnchor description={description} href={token.Url}>
                            {token.Value}
                        </TooltipAnchor>
                    ) : (
                        <TooltipSpan description={description}>
                            {token.Value}
                        </TooltipSpan>
                    );
                    
                    break;
                }
                case "Text": {
                    if (token.Name == "symbol") {
                        content = symbol(token.Value);
                    } else if (token.Name == "Type") {
                        content = <Tooltip
                            className="Type"
                            text={token.Value.trim()}
                        />;
                    } else {
                        content = <Tooltip
                            className={token.Name === "DescriptorType"
                                ? `DescriptorType ${desc.DescriptorType}`
                                : token.Name
                            }
                            text={token.Value.trim()}
                        />;
                    }
                    
                    break;
                }
                case "Tags": {
                    content = <TagsView tags={token.Value}/>;
                    break;
                }
                case "Type": {
                    content = <TypeView value={token.Value}/>;
                    break;
                }
                case "Parameters": {
                    content = <ParametersView values={token.Value}/>;
                    break;
                }
                case "Capabilities": {
                    const text = capabilitiesText(token.Value);

                    content = text ? (
                        <Tooltip className="Capabilities" text={text}/>
                    ) : null;

                    break;
                }
            }
            
            return <Fragment key={i}>{content}</Fragment>;
        })}
    </span>
}
