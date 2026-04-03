import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsLeftRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMTcxLjc2YTYsNiwwLDAsMSwwLDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LTguNDhMMTkzLjUxLDE4Mkg0OGE2LDYsMCwwLDEsMC0xMkgxOTMuNTFsLTIxLjc1LTIxLjc2YTYsNiwwLDAsMSw4LjQ4LTguNDhaTTc1Ljc2LDExNi4yNGE2LDYsMCwwLDAsOC40OC04LjQ4TDYyLjQ5LDg2SDIwOGE2LDYsMCwwLDAsMC0xMkg2Mi40OUw4NC4yNCw1Mi4yNGE2LDYsMCwwLDAtOC40OC04LjQ4bC0zMiwzMmE2LDYsMCwwLDAsMCw4LjQ4WiIvPjwvc3ZnPg==)
 */
export function PhArrowsLeftRightLightIcon(props: PhArrowsLeftRightLightIconProps) {
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
      <path d="M212.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L193.51,182H48a6,6,0,0,1,0-12H193.51l-21.75-21.76a6,6,0,0,1,8.48-8.48ZM75.76,116.24a6,6,0,0,0,8.48-8.48L62.49,86H208a6,6,0,0,0,0-12H62.49L84.24,52.24a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48Z"/>
    </svg>
  );
}
