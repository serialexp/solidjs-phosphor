import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPictureInPictureBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMjAsMjAsMCwwLDAsMjAsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY2NEEyMCwyMCwwLDAsMCwyMTYsNDRaTTQ0LDY4SDIxMnY0OEgxMzZhMTIsMTIsMCwwLDAtMTIsMTJ2NjBINDRaTTE0OCwxODhWMTQwaDY0djQ4WiIvPjwvc3ZnPg==)
 */
export function PhPictureInPictureBoldIcon(props: PhPictureInPictureBoldIconProps) {
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
      <path d="M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM44,68H212v48H136a12,12,0,0,0-12,12v60H44ZM148,188V140h64v48Z"/>
    </svg>
  );
}
