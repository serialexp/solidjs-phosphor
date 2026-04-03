import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBracketsSquareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Niw0NlYyMTBIODBhNiw2LDAsMCwxLDAsMTJINDBhNiw2LDAsMCwxLTYtNlY0MGE2LDYsMCwwLDEsNi02SDgwYTYsNiwwLDAsMSwwLDEyWk0yMTYsMzRIMTc2YTYsNiwwLDAsMCwwLDEyaDM0VjIxMEgxNzZhNiw2LDAsMCwwLDAsMTJoNDBhNiw2LDAsMCwwLDYtNlY0MEE2LDYsMCwwLDAsMjE2LDM0WiIvPjwvc3ZnPg==)
 */
export function PhBracketsSquareLightIcon(props: PhBracketsSquareLightIconProps) {
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
      <path d="M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z"/>
    </svg>
  );
}
