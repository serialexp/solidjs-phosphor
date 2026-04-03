import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBridgeDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY4SDI0VjExNS4zNUE2NCw2NCwwLDAsMCw2NCw1NmE2NCw2NCwwLDAsMCwxMjgsMCw2NCw2NCwwLDAsMCw0MCw1OS4zNVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsMTYwSDIwMFYxMDEuMzRhNzEuODksNzEuODksMCwwLDAsMjksMjEuNDIsOCw4LDAsMCwwLDYtMTQuODNBNTUuNzgsNTUuNzgsMCwwLDEsMjAwLDU2YTgsOCwwLDAsMC0xNiwwQTU2LDU2LDAsMCwxLDcyLDU2YTgsOCwwLDAsMC0xNiwwLDU1Ljc4LDU1Ljc4LDAsMCwxLTM1LDUxLjkzLDgsOCwwLDAsMCw2LDE0LjgzLDcxLjg5LDcxLjg5LDAsMCwwLDI5LTIxLjQyVjE2MEgyNGE4LDgsMCwwLDAsMCwxNkg1NnYyNGE4LDgsMCwwLDAsMTYsMFYxNzZIMTg0djI0YTgsOCwwLDAsMCwxNiwwVjE3NmgzMmE4LDgsMCwwLDAsMC0xNlptLTg4LTMzLjhWMTYwSDExMlYxMjYuMmE3Miw3MiwwLDAsMCwzMiwwWm0tNzItMjVhNzIuNDcsNzIuNDcsMCwwLDAsMjQsMTkuMjdWMTYwSDcyWk0xNjAsMTYwVjEyMC40OGE3Mi40Nyw3Mi40NywwLDAsMCwyNC0xOS4yN1YxNjBaIi8+PC9zdmc+)
 */
export function PhBridgeDuotoneIcon(props: PhBridgeDuotoneIconProps) {
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
      <path d="M232,168H24V115.35A64,64,0,0,0,64,56a64,64,0,0,0,128,0,64,64,0,0,0,40,59.35Z" opacity="0.2"/><path d="M232,160H200V101.34a71.89,71.89,0,0,0,29,21.42,8,8,0,0,0,6-14.83A55.78,55.78,0,0,1,200,56a8,8,0,0,0-16,0A56,56,0,0,1,72,56a8,8,0,0,0-16,0,55.78,55.78,0,0,1-35,51.93,8,8,0,0,0,6,14.83,71.89,71.89,0,0,0,29-21.42V160H24a8,8,0,0,0,0,16H56v24a8,8,0,0,0,16,0V176H184v24a8,8,0,0,0,16,0V176h32a8,8,0,0,0,0-16Zm-88-33.8V160H112V126.2a72,72,0,0,0,32,0Zm-72-25a72.47,72.47,0,0,0,24,19.27V160H72ZM160,160V120.48a72.47,72.47,0,0,0,24-19.27V160Z"/>
    </svg>
  );
}
