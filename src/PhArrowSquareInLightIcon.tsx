import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareInLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTM2djY0YTYsNiwwLDAsMS0xMiwwVjE1MC40OUw0NC4yNCwyMjAuMjRhNiw2LDAsMCwxLTguNDgtOC40OEwxMDUuNTEsMTQySDU2YTYsNiwwLDAsMSwwLTEyaDY0QTYsNiwwLDAsMSwxMjYsMTM2Wk0yMDgsMzRIODBBMTQsMTQsMCwwLDAsNjYsNDhWOTZhNiw2LDAsMCwwLDEyLDBWNDhhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMlYxNzZhMiwyLDAsMCwxLTIsMkgxNjBhNiw2LDAsMCwwLDAsMTJoNDhhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowSquareInLightIcon(props: PhArrowSquareInLightIconProps) {
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
      <path d="M126,136v64a6,6,0,0,1-12,0V150.49L44.24,220.24a6,6,0,0,1-8.48-8.48L105.51,142H56a6,6,0,0,1,0-12h64A6,6,0,0,1,126,136ZM208,34H80A14,14,0,0,0,66,48V96a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V176a2,2,0,0,1-2,2H160a6,6,0,0,0,0,12h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z"/>
    </svg>
  );
}
