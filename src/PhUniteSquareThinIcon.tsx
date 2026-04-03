import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUniteSquareThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTJIMTY0VjQwYTQsNCwwLDAsMC00LTRINDBhNCw0LDAsMCwwLTQsNFYxNjBhNCw0LDAsMCwwLDQsNEg5MnY1MmE0LDQsMCwwLDAsNCw0SDIxNmE0LDQsMCwwLDAsNC00Vjk2QTQsNCwwLDAsMCwyMTYsOTJaTTE1My42NiwyMTIsNDQsMTAyLjM0VjQ5LjY2TDIwNi4zNCwyMTJaTTQ5LjY2LDQ0aDUyLjY4TDIxMiwxNTMuNjZ2NTIuNjhaTTIxMiwxNDIuMzQsMTY5LjY2LDEwMEgyMTJabS01Ni01NkwxMTMuNjYsNDRIMTU2Wk00NCwxMTMuNjYsODYuMzQsMTU2SDQ0Wm01Niw1NkwxNDIuMzQsMjEySDEwMFoiLz48L3N2Zz4=)
 */
export function PhUniteSquareThinIcon(props: PhUniteSquareThinIconProps) {
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
      <path d="M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM153.66,212,44,102.34V49.66L206.34,212ZM49.66,44h52.68L212,153.66v52.68ZM212,142.34,169.66,100H212Zm-56-56L113.66,44H156ZM44,113.66,86.34,156H44Zm56,56L142.34,212H100Z"/>
    </svg>
  );
}
