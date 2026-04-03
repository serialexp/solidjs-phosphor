import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineHorizontalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsNDBWMjE2YTYsNiwwLDAsMS0xMiwwVjQwYTYsNiwwLDAsMSwxMiwwWk02OC4yNCw5MS43NmE2LDYsMCwwLDAtOC40OCw4LjQ4TDgxLjUxLDEyMkgxNmE2LDYsMCwwLDAsMCwxMkg4MS41MUw1OS43NiwxNTUuNzZhNiw2LDAsMSwwLDguNDgsOC40OGwzMi0zMmE2LDYsMCwwLDAsMC04LjQ4Wk0yNDAsMTIySDE3NC40OWwyMS43NS0yMS43NmE2LDYsMCwwLDAtOC40OC04LjQ4bC0zMiwzMmE2LDYsMCwwLDAsMCw4LjQ4bDMyLDMyYTYsNiwwLDAsMCw4LjQ4LTguNDhMMTc0LjQ5LDEzNEgyNDBhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhArrowsInLineHorizontalLightIcon(props: PhArrowsInLineHorizontalLightIconProps) {
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
      <path d="M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM68.24,91.76a6,6,0,0,0-8.48,8.48L81.51,122H16a6,6,0,0,0,0,12H81.51L59.76,155.76a6,6,0,1,0,8.48,8.48l32-32a6,6,0,0,0,0-8.48ZM240,122H174.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L174.49,134H240a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
