import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserCircleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk03NC4wOCwxOTcuNWE2NCw2NCwwLDAsMSwxMDcuODQsMCw4Ny44Myw4Ny44MywwLDAsMS0xMDcuODQsMFpNOTYsMTIwYTMyLDMyLDAsMSwxLDMyLDMyQTMyLDMyLDAsMCwxLDk2LDEyMFptOTcuNzYsNjYuNDFhNzkuNjYsNzkuNjYsMCwwLDAtMzYuMDYtMjguNzUsNDgsNDgsMCwxLDAtNTkuNCwwLDc5LjY2LDc5LjY2LDAsMCwwLTM2LjA2LDI4Ljc1LDg4LDg4LDAsMSwxLDEzMS41MiwwWiIvPjwvc3ZnPg==)
 */
export function PhUserCircleIcon(props: PhUserCircleIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"/>
    </svg>
  );
}
