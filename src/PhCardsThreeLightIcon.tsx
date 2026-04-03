import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCardsThreeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTBINDhhMTQsMTQsMCwwLDAtMTQsMTR2OTZhMTQsMTQsMCwwLDAsMTQsMTRIMjA4YTE0LDE0LDAsMCwwLDE0LTE0VjEwNEExNCwxNCwwLDAsMCwyMDgsOTBabTIsMTEwYTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxMDRhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMlpNNTAsNjRhNiw2LDAsMCwxLDYtNkgyMDBhNiw2LDAsMCwxLDAsMTJINTZBNiw2LDAsMCwxLDUwLDY0Wk02NiwzMmE2LDYsMCwwLDEsNi02SDE4NGE2LDYsMCwwLDEsMCwxMkg3MkE2LDYsMCwwLDEsNjYsMzJaIi8+PC9zdmc+)
 */
export function PhCardsThreeLightIcon(props: PhCardsThreeLightIconProps) {
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
      <path d="M208,90H48a14,14,0,0,0-14,14v96a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V104A14,14,0,0,0,208,90Zm2,110a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM50,64a6,6,0,0,1,6-6H200a6,6,0,0,1,0,12H56A6,6,0,0,1,50,64ZM66,32a6,6,0,0,1,6-6H184a6,6,0,0,1,0,12H72A6,6,0,0,1,66,32Z"/>
    </svg>
  );
}
