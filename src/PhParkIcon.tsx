import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParkIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTkySDIwMFYxNjhoMjRhOCw4LDAsMCwwLDcuNzYtOS45NGwtMzItMTI4YTgsOCwwLDAsMC0xNS41MiwwbC0zMiwxMjhBOCw4LDAsMCwwLDE2MCwxNjhoMjR2MjRIMTIwVjE3Nmg4YTgsOCwwLDAsMCwwLTE2aC04VjE0NGg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2aDh2MTZINDBhOCw4LDAsMCwwLDAsMTZoOHYxNkgyNGE4LDgsMCwwLDAsMCwxNkgyMzJhOCw4LDAsMCwwLDAtMTZaTTE5Miw2NWwyMS43NSw4N2gtNDMuNVpNNjQsMTQ0aDQwdjE2SDY0Wm0wLDMyaDQwdjE2SDY0Wm01Mi04MEEyOCwyOCwwLDEsMCw4OCw2OCwyOCwyOCwwLDAsMCwxMTYsOTZabTAtNDBhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDU2WiIvPjwvc3ZnPg==)
 */
export function PhParkIcon(props: PhParkIconProps) {
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
      <path d="M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z"/>
    </svg>
  );
}
