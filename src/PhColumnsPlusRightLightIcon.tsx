import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsPlusRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwzNEg1NkExNCwxNCwwLDAsMCw0Miw0OFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIODBhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsODAsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDgwYTIsMiwwLDAsMSwyLDJaTTE1MiwzNEgxMjhhMTQsMTQsMCwwLDAtMTQsMTRWMjA4YTE0LDE0LDAsMCwwLDE0LDE0aDI0YTE0LDE0LDAsMCwwLDE0LTE0VjQ4QTE0LDE0LDAsMCwwLDE1MiwzNFptMiwxNzRhMiwyLDAsMCwxLTIsMkgxMjhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0yaDI0YTIsMiwwLDAsMSwyLDJabTkyLTgwYTYsNiwwLDAsMS02LDZIMjIydjE4YTYsNiwwLDAsMS0xMiwwVjEzNEgxOTJhNiw2LDAsMCwxLDAtMTJoMThWMTA0YTYsNiwwLDAsMSwxMiwwdjE4aDE4QTYsNiwwLDAsMSwyNDYsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhColumnsPlusRightLightIcon(props: PhColumnsPlusRightLightIconProps) {
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
      <path d="M80,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V48A14,14,0,0,0,80,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2ZM152,34H128a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,152,34Zm2,174a2,2,0,0,1-2,2H128a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2Zm92-80a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V134H192a6,6,0,0,1,0-12h18V104a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,128Z"/>
    </svg>
  );
}
