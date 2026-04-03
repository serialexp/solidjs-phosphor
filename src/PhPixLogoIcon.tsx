import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPixLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMzQsMTE2LjcyLDEzOS4yOCwyMC42NmExNiwxNiwwLDAsMC0yMi41NiwwTDIwLjY2LDExNi43MmExNiwxNiwwLDAsMCwwLDIyLjU2bDk2LjA2LDk2LjA2YTE2LDE2LDAsMCwwLDIyLjU2LDBsOTYuMDYtOTYuMDZBMTYsMTYsMCwwLDAsMjM1LjM0LDExNi43MlpNMTI4LDMyLDE4NCw4OEgxNjBhOCw4LDAsMCwwLTUuNjYsMi4zNEwxMjgsMTE2LjY4LDEwMS42Niw5MC4zNEE4LDgsMCwwLDAsOTYsODhINzJaTTU2LDEwNEg5Mi42OGwyNCwyNC0yNCwyNEg1NkwzMiwxMjhabTcyLDEyMEw3MiwxNjhIOTZhOCw4LDAsMCwwLDUuNjYtMi4zNEwxMjgsMTM5LjMxbDI2LjM0LDI2LjM1QTgsOCwwLDAsMCwxNjAsMTY4aDI0Wm03Mi03MkgxNjMuMzJsLTI0LTI0LDI0LTI0SDIwMGwyNCwyNFoiLz48L3N2Zz4=)
 */
export function PhPixLogoIcon(props: PhPixLogoIconProps) {
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
      <path d="M235.34,116.72,139.28,20.66a16,16,0,0,0-22.56,0L20.66,116.72a16,16,0,0,0,0,22.56l96.06,96.06a16,16,0,0,0,22.56,0l96.06-96.06A16,16,0,0,0,235.34,116.72ZM128,32,184,88H160a8,8,0,0,0-5.66,2.34L128,116.68,101.66,90.34A8,8,0,0,0,96,88H72ZM56,104H92.68l24,24-24,24H56L32,128Zm72,120L72,168H96a8,8,0,0,0,5.66-2.34L128,139.31l26.34,26.35A8,8,0,0,0,160,168h24Zm72-72H163.32l-24-24,24-24H200l24,24Z"/>
    </svg>
  );
}
