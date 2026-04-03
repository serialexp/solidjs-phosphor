import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParallelogramFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuNTgsNjIuNTdsLTY0LjgsMTQ0QTE2LDE2LDAsMCwxLDE2Ny4xOSwyMTZIMjRBMTYsMTYsMCwwLDEsOS40MiwxOTMuNDNsNjQuOC0xNDRBMTYsMTYsMCwwLDEsODguODEsNDBIMjMyYTE2LDE2LDAsMCwxLDE0LjU5LDIyLjU3WiIvPjwvc3ZnPg==)
 */
export function PhParallelogramFillIcon(props: PhParallelogramFillIconProps) {
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
      <path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z"/>
    </svg>
  );
}
