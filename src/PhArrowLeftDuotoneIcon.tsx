import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNTZWMjAwTDQwLDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsMTIwSDEyMFY1NmE4LDgsMCwwLDAtMTMuNjYtNS42NmwtNzIsNzJhOCw4LDAsMCwwLDAsMTEuMzJsNzIsNzJBOCw4LDAsMCwwLDEyMCwyMDBWMTM2aDk2YTgsOCwwLDAsMCwwLTE2Wk0xMDQsMTgwLjY5LDUxLjMxLDEyOCwxMDQsNzUuMzFaIi8+PC9zdmc+)
 */
export function PhArrowLeftDuotoneIcon(props: PhArrowLeftDuotoneIconProps) {
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
      <path d="M112,56V200L40,128Z" opacity="0.2"/><path d="M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"/>
    </svg>
  );
}
