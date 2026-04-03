import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuMzksMTIzLjA2QTgsOCwwLDAsMSwyMjQsMTI4SDE4NHY4MGExNiwxNiwwLDAsMS0xNiwxNkg4OGExNiwxNiwwLDAsMS0xNi0xNlYxMjhIMzJhOCw4LDAsMCwxLTUuNjYtMTMuNjZsOTYtOTZhOCw4LDAsMCwxLDExLjMyLDBsOTYsOTZBOCw4LDAsMCwxLDIzMS4zOSwxMjMuMDZaIi8+PC9zdmc+)
 */
export function PhArrowFatUpFillIcon(props: PhArrowFatUpFillIconProps) {
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
      <path d="M231.39,123.06A8,8,0,0,1,224,128H184v80a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06Z"/>
    </svg>
  );
}
