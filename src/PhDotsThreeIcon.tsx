import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMTI4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxMjhabTU2LTEyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE5NiwxMTZaTTYwLDExNmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw2MCwxMTZaIi8+PC9zdmc+)
 */
export function PhDotsThreeIcon(props: PhDotsThreeIconProps) {
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
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"/>
    </svg>
  );
}
