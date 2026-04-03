import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHTwoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTAsNTZWMTc2YTYsNiwwLDAsMS0xMiwwVjEyMkg0NnY1NGE2LDYsMCwwLDEtMTIsMFY1NmE2LDYsMCwwLDEsMTIsMHY1NGg5MlY1NmE2LDYsMCwwLDEsMTIsMFptOTAsMTQ2SDIwNEwyNDAsMTU0LjA1QTMwLDMwLDAsMSwwLDE4Ny43MSwxMjYsNiw2LDAsMSwwLDE5OSwxMzBhMTgsMTgsMCwwLDEsMTQuNDctMTEuODIsMTgsMTgsMCwwLDEsMTYuODcsMjguNjZMMTg3LjIsMjA0LjRBNiw2LDAsMCwwLDE5MiwyMTRoNDhhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhTextHTwoLightIcon(props: PhTextHTwoLightIconProps) {
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
      <path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Zm90,146H204L240,154.05A30,30,0,1,0,187.71,126,6,6,0,1,0,199,130a18,18,0,0,1,14.47-11.82,18,18,0,0,1,16.87,28.66L187.2,204.4A6,6,0,0,0,192,214h48a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
