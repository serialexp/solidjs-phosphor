import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLadderSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjBhMTIsMTIsMCwwLDAtMTIsMTJWNjBINzZWMzJhMTIsMTIsMCwwLDAtMjQsMFYyMjRhMTIsMTIsMCwwLDAsMjQsMFYxOTZIMTgwdjI4YTEyLDEyLDAsMCwwLDI0LDBWMzJBMTIsMTIsMCwwLDAsMTkyLDIwWk0xODAsODR2MzJINzZWODRaTTc2LDE3MlYxNDBIMTgwdjMyWiIvPjwvc3ZnPg==)
 */
export function PhLadderSimpleBoldIcon(props: PhLadderSimpleBoldIconProps) {
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
      <path d="M192,20a12,12,0,0,0-12,12V60H76V32a12,12,0,0,0-24,0V224a12,12,0,0,0,24,0V196H180v28a12,12,0,0,0,24,0V32A12,12,0,0,0,192,20ZM180,84v32H76V84ZM76,172V140H180v32Z"/>
    </svg>
  );
}
