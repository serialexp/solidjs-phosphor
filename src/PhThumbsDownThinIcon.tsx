import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhThumbsDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuODUsMTU3LjUybC0xMi05NkEyMCwyMCwwLDAsMCwyMDQsNDRIMzJBMTIsMTIsMCwwLDAsMjAsNTZ2ODhhMTIsMTIsMCwwLDAsMTIsMTJINzcuNTNsMzguODksNzcuNzlBNCw0LDAsMCwwLDEyMCwyMzZhMzYsMzYsMCwwLDAsMzYtMzZWMTgwaDYwYTIwLDIwLDAsMCwwLDE5Ljg1LTIyLjQ4Wk03NiwxNDhIMzJhNCw0LDAsMCwxLTQtNFY1NmE0LDQsMCwwLDEsNC00SDc2Wm0xNDksMTkuOTRhMTIsMTIsMCwwLDEtOSw0LjA2SDE1MmE0LDQsMCwwLDAtNCw0djI0YTI4LDI4LDAsMCwxLTI1LjU4LDI3LjlMODQsMTUxLjA2VjUySDIwNGExMiwxMiwwLDAsMSwxMS45MSwxMC41MWwxMiw5NkExMiwxMiwwLDAsMSwyMjUsMTY3Ljk0WiIvPjwvc3ZnPg==)
 */
export function PhThumbsDownThinIcon(props: PhThumbsDownThinIconProps) {
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
      <path d="M235.85,157.52l-12-96A20,20,0,0,0,204,44H32A12,12,0,0,0,20,56v88a12,12,0,0,0,12,12H77.53l38.89,77.79A4,4,0,0,0,120,236a36,36,0,0,0,36-36V180h60a20,20,0,0,0,19.85-22.48ZM76,148H32a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H76Zm149,19.94a12,12,0,0,1-9,4.06H152a4,4,0,0,0-4,4v24a28,28,0,0,1-25.58,27.9L84,151.06V52H204a12,12,0,0,1,11.91,10.51l12,96A12,12,0,0,1,225,167.94Z"/>
    </svg>
  );
}
