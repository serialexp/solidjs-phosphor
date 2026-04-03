import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowULeftUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODB2ODhhNjQsNjQsMCwwLDEtMTI4LDBWODhINDBhOCw4LDAsMCwxLTUuNjYtMTMuNjZsNDgtNDhhOCw4LDAsMCwxLDExLjMyLDBsNDgsNDhBOCw4LDAsMCwxLDEzNiw4OEg5NnY4MGE0OCw0OCwwLDAsMCw5NiwwVjgwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowULeftUpFillIcon(props: PhArrowULeftUpFillIconProps) {
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
      <path d="M208,80v88a64,64,0,0,1-128,0V88H40a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,136,88H96v80a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
