import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLadderSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjZhNiw2LDAsMCwwLTYsNlY2Nkg3MFYzMmE2LDYsMCwwLDAtMTIsMFYyMjRhNiw2LDAsMCwwLDEyLDBWMTkwSDE4NnYzNGE2LDYsMCwwLDAsMTIsMFYzMkE2LDYsMCwwLDAsMTkyLDI2Wm0tNiw1MnY0NEg3MFY3OFpNNzAsMTc4VjEzNEgxODZ2NDRaIi8+PC9zdmc+)
 */
export function PhLadderSimpleLightIcon(props: PhLadderSimpleLightIconProps) {
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
      <path d="M192,26a6,6,0,0,0-6,6V66H70V32a6,6,0,0,0-12,0V224a6,6,0,0,0,12,0V190H186v34a6,6,0,0,0,12,0V32A6,6,0,0,0,192,26Zm-6,52v44H70V78ZM70,178V134H186v44Z"/>
    </svg>
  );
}
