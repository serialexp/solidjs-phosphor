import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCircleDownLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFpNMTYyLjgzLDkzLjE3YTQsNCwwLDAsMSwwLDUuNjZMMTA1LjY2LDE1NkgxNDRhNCw0LDAsMCwxLDAsOEg5NmE0LDQsMCwwLDEtNC00VjExMmE0LDQsMCwwLDEsOCwwdjM4LjM0bDU3LjE3LTU3LjE3QTQsNCwwLDAsMSwxNjIuODMsOTMuMTdaIi8+PC9zdmc+)
 */
export function PhArrowCircleDownLeftThinIcon(props: PhArrowCircleDownLeftThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM162.83,93.17a4,4,0,0,1,0,5.66L105.66,156H144a4,4,0,0,1,0,8H96a4,4,0,0,1-4-4V112a4,4,0,0,1,8,0v38.34l57.17-57.17A4,4,0,0,1,162.83,93.17Z"/>
    </svg>
  );
}
