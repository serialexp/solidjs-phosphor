import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockLaminatedLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODJIMTc0VjU2YTQ2LDQ2LDAsMCwwLTkyLDBWODJINDhBMTQsMTQsMCwwLDAsMzQsOTZWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY5NkExNCwxNCwwLDAsMCwyMDgsODJaTTQ2LDEyNkgyMTB2MjBINDZabTAsMzJIMjEwdjIwSDQ2Wk05NCw1NmEzNCwzNCwwLDAsMSw2OCwwVjgySDk0Wk00OCw5NEgyMDhhMiwyLDAsMCwxLDIsMnYxOEg0NlY5NkEyLDIsMCwwLDEsNDgsOTRaTTIwOCwyMTBINDhhMiwyLDAsMCwxLTItMlYxOTBIMjEwdjE4QTIsMiwwLDAsMSwyMDgsMjEwWiIvPjwvc3ZnPg==)
 */
export function PhLockLaminatedLightIcon(props: PhLockLaminatedLightIconProps) {
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
      <path d="M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM46,126H210v20H46Zm0,32H210v20H46ZM94,56a34,34,0,0,1,68,0V82H94ZM48,94H208a2,2,0,0,1,2,2v18H46V96A2,2,0,0,1,48,94ZM208,210H48a2,2,0,0,1-2-2V190H210v18A2,2,0,0,1,208,210Z"/>
    </svg>
  );
}
