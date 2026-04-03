import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrashSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZhOCw4LDAsMCwxLTgsOGgtOFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINjRhMTYsMTYsMCwwLDEtMTYtMTZWNjRINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsNTZaTTg4LDMyaDgwYTgsOCwwLDAsMCwwLTE2SDg4YTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhTrashSimpleFillIcon(props: PhTrashSimpleFillIconProps) {
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
      <path d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
