import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleSevenFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zMS41Miw2Ni43My0zMiw4OEE4LDgsMCwwLDEsMTIwLDE4NGE3LjksNy45LDAsMCwxLTIuNzMtLjQ4LDgsOCwwLDAsMS00Ljc5LTEwLjI1TDE0MC41OCw5NkgxMDRhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDcuNTIsMTAuNzNaIi8+PC9zdmc+)
 */
export function PhNumberCircleSevenFillIcon(props: PhNumberCircleSevenFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm31.52,66.73-32,88A8,8,0,0,1,120,184a7.9,7.9,0,0,1-2.73-.48,8,8,0,0,1-4.79-10.25L140.58,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,7.52,10.73Z"/>
    </svg>
  );
}
