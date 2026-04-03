import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodeSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Miw2OC40OSwyNSwxMjhsNjcsNTkuNTJhNiw2LDAsMSwxLTgsOWwtNzItNjRhNiw2LDAsMCwxLDAtOWw3Mi02NGE2LDYsMCwwLDEsOCw5Wm0xNTIsNTUtNzItNjRhNiw2LDAsMCwwLTgsOUwyMzEsMTI4bC02Nyw1OS41MmE2LDYsMCwxLDAsOCw5bDcyLTY0YTYsNiwwLDAsMCwwLTlaIi8+PC9zdmc+)
 */
export function PhCodeSimpleLightIcon(props: PhCodeSimpleLightIconProps) {
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
      <path d="M92,68.49,25,128l67,59.52a6,6,0,1,1-8,9l-72-64a6,6,0,0,1,0-9l72-64a6,6,0,0,1,8,9Zm152,55-72-64a6,6,0,0,0-8,9L231,128l-67,59.52a6,6,0,1,0,8,9l72-64a6,6,0,0,0,0-9Z"/>
    </svg>
  );
}
