import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextColumnsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTgsNjRhNiw2LDAsMCwxLTYsNkg0MGE2LDYsMCwwLDEsMC0xMmg3MkE2LDYsMCwwLDEsMTE4LDY0Wm0tNiwzNEg0MGE2LDYsMCwwLDAsMCwxMmg3MmE2LDYsMCwwLDAsMC0xMlptMCw0MEg0MGE2LDYsMCwwLDAsMCwxMmg3MmE2LDYsMCwwLDAsMC0xMlptMCw0MEg0MGE2LDYsMCwwLDAsMCwxMmg3MmE2LDYsMCwwLDAsMC0xMlpNMTQ0LDcwaDcyYTYsNiwwLDAsMCwwLTEySDE0NGE2LDYsMCwwLDAsMCwxMlptNzIsMjhIMTQ0YTYsNiwwLDAsMCwwLDEyaDcyYTYsNiwwLDAsMCwwLTEyWm0wLDQwSDE0NGE2LDYsMCwwLDAsMCwxMmg3MmE2LDYsMCwwLDAsMC0xMlptMCw0MEgxNDRhNiw2LDAsMCwwLDAsMTJoNzJhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhTextColumnsLightIcon(props: PhTextColumnsLightIconProps) {
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
      <path d="M118,64a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12h72A6,6,0,0,1,118,64Zm-6,34H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM144,70h72a6,6,0,0,0,0-12H144a6,6,0,0,0,0,12Zm72,28H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
