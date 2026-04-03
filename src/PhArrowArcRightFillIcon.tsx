import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODh2NjRhOCw4LDAsMCwxLTgsOEgxNjhhOCw4LDAsMCwxLTUuNjYtMTMuNjZsMjYuMTktMjYuMThBODgsODgsMCwwLDAsNDAsMTg0YTgsOCwwLDAsMS0xNiwwLDEwNCwxMDQsMCwwLDEsMTc1Ljg2LTc1LjE4bDI2LjQ4LTI2LjQ4QTgsOCwwLDAsMSwyNDAsODhaIi8+PC9zdmc+)
 */
export function PhArrowArcRightFillIcon(props: PhArrowArcRightFillIconProps) {
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
      <path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l26.19-26.18A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,175.86-75.18l26.48-26.48A8,8,0,0,1,240,88Z"/>
    </svg>
  );
}
