import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotEqualsIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwYTgsOCwwLDAsMS04LDhIMTAyLjQ1TDUzLjkyLDIyMS4zOGE4LDgsMCwwLDEtMTEuODQtMTAuNzZMODAuODIsMTY4SDQwYTgsOCwwLDAsMSwwLTE2SDk1LjM3TDEzOSwxMDRINDBhOCw4LDAsMCwxLDAtMTZIMTUzLjU1bDQ4LjUzLTUzLjM4YTgsOCwwLDAsMSwxMS44NCwxMC43NkwxNzUuMTgsODhIMjE2YTgsOCwwLDAsMSwwLDE2SDE2MC42M0wxMTcsMTUyaDk5QTgsOCwwLDAsMSwyMjQsMTYwWiIvPjwvc3ZnPg==)
 */
export function PhNotEqualsIcon(props: PhNotEqualsIconProps) {
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
      <path d="M224,160a8,8,0,0,1-8,8H102.45L53.92,221.38a8,8,0,0,1-11.84-10.76L80.82,168H40a8,8,0,0,1,0-16H95.37L139,104H40a8,8,0,0,1,0-16H153.55l48.53-53.38a8,8,0,0,1,11.84,10.76L175.18,88H216a8,8,0,0,1,0,16H160.63L117,152h99A8,8,0,0,1,224,160Z"/>
    </svg>
  );
}
