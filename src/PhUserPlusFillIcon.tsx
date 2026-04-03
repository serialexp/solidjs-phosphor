import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserPlusFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTM2YTgsOCwwLDAsMS04LDhIMjMydjE2YTgsOCwwLDAsMS0xNiwwVjE0NEgyMDBhOCw4LDAsMCwxLDAtMTZoMTZWMTEyYTgsOCwwLDAsMSwxNiwwdjE2aDE2QTgsOCwwLDAsMSwyNTYsMTM2Wk0xNDQsMTU3LjY4YTY4LDY4LDAsMSwwLTcxLjksMGMtMjAuNjUsNi43Ni0zOS4yMywxOS4zOS01NC4xNywzNy4xN0E4LDgsMCwwLDAsMjQsMjA4SDE5MmE4LDgsMCwwLDAsNi4xMy0xMy4xNUMxODMuMTgsMTc3LjA3LDE2NC42LDE2NC40NCwxNDQsMTU3LjY4WiIvPjwvc3ZnPg==)
 */
export function PhUserPlusFillIcon(props: PhUserPlusFillIconProps) {
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
      <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z"/>
    </svg>
  );
}
