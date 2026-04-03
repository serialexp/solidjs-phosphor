import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsNTAuODMsMTUzLjY2LDEwOEgxOTJhNCw0LDAsMCwxLDAsOEgxNDRhNCw0LDAsMCwxLTQtNFY2NGE0LDQsMCwwLDEsOCwwdjM4LjM0bDU3LjE3LTU3LjE3YTQsNCwwLDEsMSw1LjY2LDUuNjZaTTExMiwxNDBINjRhNCw0LDAsMCwwLDAsOGgzOC4zNEw0NS4xNywyMDUuMTdhNCw0LDAsMCwwLDUuNjYsNS42NkwxMDgsMTUzLjY2VjE5MmE0LDQsMCwwLDAsOCwwVjE0NEE0LDQsMCwwLDAsMTEyLDE0MFoiLz48L3N2Zz4=)
 */
export function PhArrowsInSimpleThinIcon(props: PhArrowsInSimpleThinIconProps) {
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
      <path d="M210.83,50.83,153.66,108H192a4,4,0,0,1,0,8H144a4,4,0,0,1-4-4V64a4,4,0,0,1,8,0v38.34l57.17-57.17a4,4,0,1,1,5.66,5.66ZM112,140H64a4,4,0,0,0,0,8h38.34L45.17,205.17a4,4,0,0,0,5.66,5.66L108,153.66V192a4,4,0,0,0,8,0V144A4,4,0,0,0,112,140Z"/>
    </svg>
  );
}
