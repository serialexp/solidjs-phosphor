import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFastForwardFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTI4YTE1Ljc2LDE1Ljc2LDAsMCwxLTcuMzMsMTMuMzRMMTYwLjQ4LDE5Ny41QTE1LjkxLDE1LjkxLDAsMCwxLDEzNiwxODQuMTZ2LTM3LjNMNTYuNDgsMTk3LjVBMTUuOTEsMTUuOTEsMCwwLDEsMzIsMTg0LjE2VjcxLjg0QTE1LjkxLDE1LjkxLDAsMCwxLDU2LjQ4LDU4LjVMMTM2LDEwOS4xNFY3MS44NEExNS45MSwxNS45MSwwLDAsMSwxNjAuNDgsNTguNWw4OC4xOSw1Ni4xNkExNS43NiwxNS43NiwwLDAsMSwyNTYsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhFastForwardFillIcon(props: PhFastForwardFillIconProps) {
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
      <path d="M256,128a15.76,15.76,0,0,1-7.33,13.34L160.48,197.5A15.91,15.91,0,0,1,136,184.16v-37.3L56.48,197.5A15.91,15.91,0,0,1,32,184.16V71.84A15.91,15.91,0,0,1,56.48,58.5L136,109.14V71.84A15.91,15.91,0,0,1,160.48,58.5l88.19,56.16A15.76,15.76,0,0,1,256,128Z"/>
    </svg>
  );
}
