import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKanbanLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTBINDBhNiw2LDAsMCwwLTYsNlYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIODhhMTQsMTQsMCwwLDAsMTQtMTRWMTU4aDUydjE4YTE0LDE0LDAsMCwwLDE0LDE0aDQwYTE0LDE0LDAsMCwwLDE0LTE0VjU2QTYsNiwwLDAsMCwyMTYsNTBabS02LDY0SDE2NlY2Mmg0NFpNOTAsNjJ2NTJINDZWNjJabTAsMTQ2YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxMjZIOTBabTEyLTYyVjYyaDUydjg0Wm0xMDYsMzJIMTY4YTIsMiwwLDAsMS0yLTJWMTI2aDQ0djUwQTIsMiwwLDAsMSwyMDgsMTc4WiIvPjwvc3ZnPg==)
 */
export function PhKanbanLightIcon(props: PhKanbanLightIconProps) {
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
      <path d="M216,50H40a6,6,0,0,0-6,6V208a14,14,0,0,0,14,14H88a14,14,0,0,0,14-14V158h52v18a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V56A6,6,0,0,0,216,50Zm-6,64H166V62h44ZM90,62v52H46V62Zm0,146a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V126H90Zm12-62V62h52v84Zm106,32H168a2,2,0,0,1-2-2V126h44v50A2,2,0,0,1,208,178Z"/>
    </svg>
  );
}
