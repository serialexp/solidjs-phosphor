import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSignInIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDEuNjYsMTMzLjY2bC00MCw0MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEzNkgyNGE4LDgsMCwwLDEsMC0xNmg5Mi42OUw5MC4zNCw5My42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJsNDAsNDBBOCw4LDAsMCwxLDE0MS42NiwxMzMuNjZaTTIwMCwzMkgxMzZhOCw4LDAsMCwwLDAsMTZoNTZWMjA4SDEzNmE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsOC04VjQwQTgsOCwwLDAsMCwyMDAsMzJaIi8+PC9zdmc+)
 */
export function PhSignInIcon(props: PhSignInIconProps) {
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
      <path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"/>
    </svg>
  );
}
