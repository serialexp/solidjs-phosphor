import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSignInLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAuMjQsMTMyLjI0bC00MCw0MGE2LDYsMCwwLDEtOC40OC04LjQ4TDEyMS41MSwxMzRIMjRhNiw2LDAsMCwxLDAtMTJoOTcuNTFMOTEuNzYsOTIuMjRhNiw2LDAsMCwxLDguNDgtOC40OGw0MCw0MEE2LDYsMCwwLDEsMTQwLjI0LDEzMi4yNFpNMjAwLDM0SDEzNmE2LDYsMCwwLDAsMCwxMmg1OFYyMTBIMTM2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCw2LTZWNDBBNiw2LDAsMCwwLDIwMCwzNFoiLz48L3N2Zz4=)
 */
export function PhSignInLightIcon(props: PhSignInLightIconProps) {
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
      <path d="M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM200,34H136a6,6,0,0,0,0,12h58V210H136a6,6,0,0,0,0,12h64a6,6,0,0,0,6-6V40A6,6,0,0,0,200,34Z"/>
    </svg>
  );
}
