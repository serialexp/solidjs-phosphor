import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextUnderlineBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMjI0YTEyLDEyLDAsMCwxLTEyLDEySDY0YTEyLDEyLDAsMCwxLDAtMjRIMTkyQTEyLDEyLDAsMCwxLDIwNCwyMjRabS03Ni0yOGE2OC4wNyw2OC4wNywwLDAsMCw2OC02OFY1NmExMiwxMiwwLDAsMC0yNCwwdjcyYTQ0LDQ0LDAsMCwxLTg4LDBWNTZhMTIsMTIsMCwwLDAtMjQsMHY3MkE2OC4wNyw2OC4wNywwLDAsMCwxMjgsMTk2WiIvPjwvc3ZnPg==)
 */
export function PhTextUnderlineBoldIcon(props: PhTextUnderlineBoldIconProps) {
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
      <path d="M204,224a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,224Zm-76-28a68.07,68.07,0,0,0,68-68V56a12,12,0,0,0-24,0v72a44,44,0,0,1-88,0V56a12,12,0,0,0-24,0v72A68.07,68.07,0,0,0,128,196Z"/>
    </svg>
  );
}
