import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListBulletsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Niw2NEExMiwxMiwwLDAsMSw4OCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg4OEExMiwxMiwwLDAsMSw3Niw2NFptMTQwLDUySDg4YTEyLDEyLDAsMCwwLDAsMjRIMjE2YTEyLDEyLDAsMCwwLDAtMjRabTAsNjRIODhhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFpNNDQsMTEyYTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDQ0LDExMlptMC02NEExNiwxNiwwLDEsMCw2MCw2NCwxNiwxNiwwLDAsMCw0NCw0OFptMCwxMjhhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsNDQsMTc2WiIvPjwvc3ZnPg==)
 */
export function PhListBulletsBoldIcon(props: PhListBulletsBoldIconProps) {
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
      <path d="M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z"/>
    </svg>
  );
}
