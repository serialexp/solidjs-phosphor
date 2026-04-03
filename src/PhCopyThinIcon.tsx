import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZIODhhNCw0LDAsMCwwLTQsNFY4NEg0MGE0LDQsMCwwLDAtNCw0VjIxNmE0LDQsMCwwLDAsNCw0SDE2OGE0LDQsMCwwLDAsNC00VjE3Mmg0NGE0LDQsMCwwLDAsNC00VjQwQTQsNCwwLDAsMCwyMTYsMzZaTTE2NCwyMTJINDRWOTJIMTY0Wm00OC00OEgxNzJWODhhNCw0LDAsMCwwLTQtNEg5MlY0NEgyMTJaIi8+PC9zdmc+)
 */
export function PhCopyThinIcon(props: PhCopyThinIconProps) {
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
      <path d="M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"/>
    </svg>
  );
}
