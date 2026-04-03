import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitCommitIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTIwSDE4My40MmE1Niw1NiwwLDAsMC0xMTAuODQsMEg4YTgsOCwwLDAsMCwwLDE2SDcyLjU4YTU2LDU2LDAsMCwwLDExMC44NCwwSDI0OGE4LDgsMCwwLDAsMC0xNlpNMTI4LDE2OGE0MCw0MCwwLDEsMSw0MC00MEE0MCw0MCwwLDAsMSwxMjgsMTY4WiIvPjwvc3ZnPg==)
 */
export function PhGitCommitIcon(props: PhGitCommitIconProps) {
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
      <path d="M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"/>
    </svg>
  );
}
