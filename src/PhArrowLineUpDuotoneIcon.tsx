import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTQ0SDU2bDcyLTcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEzMy42Niw2Ni4zNGE4LDgsMCwwLDAtMTEuMzIsMGwtNzIsNzJBOCw4LDAsMCwwLDU2LDE1Mmg2NHY3MmE4LDgsMCwwLDAsMTYsMFYxNTJoNjRhOCw4LDAsMCwwLDUuNjYtMTMuNjZaTTc1LjMxLDEzNiwxMjgsODMuMzEsMTgwLjY5LDEzNlpNMjI0LDQwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsNDBaIi8+PC9zdmc+)
 */
export function PhArrowLineUpDuotoneIcon(props: PhArrowLineUpDuotoneIconProps) {
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
      <path d="M200,144H56l72-72Z" opacity="0.2"/><path d="M133.66,66.34a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,152h64v72a8,8,0,0,0,16,0V152h64a8,8,0,0,0,5.66-13.66ZM75.31,136,128,83.31,180.69,136ZM224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"/>
    </svg>
  );
}
