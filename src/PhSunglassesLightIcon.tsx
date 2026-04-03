import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSunglassesLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDJhNiw2LDAsMCwwLDAsMTIsMTgsMTgsMCwwLDEsMTgsMTh2NThIMzhWNzJBMTgsMTgsMCwwLDEsNTYsNTRhNiw2LDAsMCwwLDAtMTJBMzAsMzAsMCwwLDAsMjYsNzJ2OTJhNDIsNDIsMCwwLDAsODQsMFYxNDJoMzZ2MjJhNDIsNDIsMCwwLDAsODQsMFY3MkEzMCwzMCwwLDAsMCwyMDAsNDJaTTM4LDE2NFYxNDIuNDhMODQuNTMsMTg5QTMwLDMwLDAsMCwxLDM4LDE2NFptNjAsMGEyOS44MywyOS44MywwLDAsMS01LDE2LjUzTDU0LjQ4LDE0Mkg5OFptNjAsMFYxNDIuNDhMMjA0LjUzLDE4OUEzMCwzMCwwLDAsMSwxNTgsMTY0Wm01NSwxNi41M0wxNzQuNDgsMTQySDIxOHYyMkEyOS44MywyOS44MywwLDAsMSwyMTMsMTgwLjUzWiIvPjwvc3ZnPg==)
 */
export function PhSunglassesLightIcon(props: PhSunglassesLightIconProps) {
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
      <path d="M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v58H38V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,0V142h36v22a42,42,0,0,0,84,0V72A30,30,0,0,0,200,42ZM38,164V142.48L84.53,189A30,30,0,0,1,38,164Zm60,0a29.83,29.83,0,0,1-5,16.53L54.48,142H98Zm60,0V142.48L204.53,189A30,30,0,0,1,158,164Zm55,16.53L174.48,142H218v22A29.83,29.83,0,0,1,213,180.53Z"/>
    </svg>
  );
}
