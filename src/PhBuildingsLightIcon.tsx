import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEwSDIyMlY5NmExNCwxNCwwLDAsMC0xNC0xNEgxNDJWMzJhMTQsMTQsMCwwLDAtMjEuNzctMTEuNjRsLTgwLDUzLjMzQTE0LDE0LDAsMCwwLDM0LDg1LjM0VjIxMEgxNmE2LDYsMCwwLDAsMCwxMkgyNDBhNiw2LDAsMCwwLDAtMTJaTTIwOCw5NGEyLDIsMCwwLDEsMiwyVjIxMEgxNDJWOTRaTTQ2LDg1LjM0YTIsMiwwLDAsMSwuODktMS42Nmw4MC01My4zNEEyLDIsMCwwLDEsMTMwLDMyVjIxMEg0NlpNMTEwLDExMnYxNmE2LDYsMCwwLDEtMTIsMFYxMTJhNiw2LDAsMCwxLDEyLDBabS0zMiwwdjE2YTYsNiwwLDAsMS0xMiwwVjExMmE2LDYsMCwwLDEsMTIsMFptMCw1NnYxNmE2LDYsMCwwLDEtMTIsMFYxNjhhNiw2LDAsMCwxLDEyLDBabTMyLDB2MTZhNiw2LDAsMCwxLTEyLDBWMTY4YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhBuildingsLightIcon(props: PhBuildingsLightIconProps) {
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
      <path d="M240,210H222V96a14,14,0,0,0-14-14H142V32a14,14,0,0,0-21.77-11.64l-80,53.33A14,14,0,0,0,34,85.34V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM208,94a2,2,0,0,1,2,2V210H142V94ZM46,85.34a2,2,0,0,1,.89-1.66l80-53.34A2,2,0,0,1,130,32V210H46ZM110,112v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm-32,0v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm0,56v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm32,0v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
