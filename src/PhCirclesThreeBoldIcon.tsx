import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCirclesThreeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNzZhNDgsNDgsMCwxLDAtNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsMTc2LDc2Wm0tNDgsMjRhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTI4LDEwMFptNjAsMjRhNDgsNDgsMCwxLDAsNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsMTg4LDEyNFptMCw3MmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwxODgsMTk2Wk02OCwxMjRhNDgsNDgsMCwxLDAsNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsNjgsMTI0Wm0wLDcyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDY4LDE5NloiLz48L3N2Zz4=)
 */
export function PhCirclesThreeBoldIcon(props: PhCirclesThreeBoldIconProps) {
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
      <path d="M176,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,76Zm-48,24a24,24,0,1,1,24-24A24,24,0,0,1,128,100Zm60,24a48,48,0,1,0,48,48A48.05,48.05,0,0,0,188,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,188,196ZM68,124a48,48,0,1,0,48,48A48.05,48.05,0,0,0,68,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,68,196Z"/>
    </svg>
  );
}
