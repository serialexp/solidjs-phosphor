import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMjE5Ljc2bC01MS4zOC01MS4zOGE4Ni4xNSw4Ni4xNSwwLDEsMC04LjQ4LDguNDhsNTEuMzgsNTEuMzhhNiw2LDAsMCwwLDguNDgtOC40OFpNMzgsMTEyYTc0LDc0LDAsMSwxLDc0LDc0QTc0LjA5LDc0LjA5LDAsMCwxLDM4LDExMloiLz48L3N2Zz4=)
 */
export function PhMagnifyingGlassLightIcon(props: PhMagnifyingGlassLightIconProps) {
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
      <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"/>
    </svg>
  );
}
