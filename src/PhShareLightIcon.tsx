import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTA4LjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OC04LjQ4TDIwOS41MSwxMTBIMTY1YTg5Ljk0LDg5Ljk0LDAsMCwwLTg3LjE3LDY3LjUsNiw2LDAsMCwxLTExLjYyLTNBMTAxLjk0LDEwMS45NCwwLDAsMSwxNjUsOThoNDQuNTNMMTcxLjc2LDYwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhsNDgsNDhBNiw2LDAsMCwxLDIyOC4yNCwxMDguMjRaTTE5MiwyMTBIMzhWODhhNiw2LDAsMCwwLTEyLDBWMjE2YTYsNiwwLDAsMCw2LDZIMTkyYTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhShareLightIcon(props: PhShareLightIconProps) {
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
      <path d="M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,110H165a89.94,89.94,0,0,0-87.17,67.5,6,6,0,0,1-11.62-3A101.94,101.94,0,0,1,165,98h44.53L171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24ZM192,210H38V88a6,6,0,0,0-12,0V216a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
