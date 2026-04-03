import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNetworkThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTE2SDEzMlY4NGgxMmExMiwxMiwwLDAsMCwxMi0xMlY0MGExMiwxMiwwLDAsMC0xMi0xMkgxMTJhMTIsMTIsMCwwLDAtMTIsMTJWNzJhMTIsMTIsMCwwLDAsMTIsMTJoMTJ2MzJIMjRhNCw0LDAsMCwwLDAsOEg2MHY0MEg0OGExMiwxMiwwLDAsMC0xMiwxMnYzMmExMiwxMiwwLDAsMCwxMiwxMkg4MGExMiwxMiwwLDAsMCwxMi0xMlYxNzZhMTIsMTIsMCwwLDAtMTItMTJINjhWMTI0SDE4OHY0MEgxNzZhMTIsMTIsMCwwLDAtMTIsMTJ2MzJhMTIsMTIsMCwwLDAsMTIsMTJoMzJhMTIsMTIsMCwwLDAsMTItMTJWMTc2YTEyLDEyLDAsMCwwLTEyLTEySDE5NlYxMjRoMzZhNCw0LDAsMCwwLDAtOFpNMTA4LDcyVjQwYTQsNCwwLDAsMSw0LTRoMzJhNCw0LDAsMCwxLDQsNFY3MmE0LDQsMCwwLDEtNCw0SDExMkE0LDQsMCwwLDEsMTA4LDcyWk04NCwxNzZ2MzJhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjE3NmE0LDQsMCwwLDEsNC00SDgwQTQsNCwwLDAsMSw4NCwxNzZabTEyOCwwdjMyYTQsNCwwLDAsMS00LDRIMTc2YTQsNCwwLDAsMS00LTRWMTc2YTQsNCwwLDAsMSw0LTRoMzJBNCw0LDAsMCwxLDIxMiwxNzZaIi8+PC9zdmc+)
 */
export function PhNetworkThinIcon(props: PhNetworkThinIconProps) {
  const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
  const [local, svgProps] = splitProps(merged, ["size", "color"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill={local.color}
      width={local.size}
      height={local.size}
      {...svgProps}
    >
      <path d="M232,116H132V84h12a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V72a12,12,0,0,0,12,12h12v32H24a4,4,0,0,0,0,8H60v40H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H68V124H188v40H176a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H196V124h36a4,4,0,0,0,0-8ZM108,72V40a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V72a4,4,0,0,1-4,4H112A4,4,0,0,1,108,72ZM84,176v32a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80A4,4,0,0,1,84,176Zm128,0v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h32A4,4,0,0,1,212,176Z"/>
    </svg>
  );
}
