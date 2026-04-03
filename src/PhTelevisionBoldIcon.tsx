import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTelevisionBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjBIMTU3bDI3LjUyLTI3LjUyYTEyLDEyLDAsMCwwLTE3LTE3TDEyOCw1NSw4OC40OSwxNS41MWExMiwxMiwwLDAsMC0xNywxN0w5OSw2MEg0MEEyMCwyMCwwLDAsMCwyMCw4MFYyMDBhMjAsMjAsMCwwLDAsMjAsMjBIMjE2YTIwLDIwLDAsMCwwLDIwLTIwVjgwQTIwLDIwLDAsMCwwLDIxNiw2MFpNNDQsODRoODRWMTk2SDQ0Wk0yMTIsMTk2SDE1MlY4NGg2MFptLTQ0LTgwYTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDE2OCwxMTZabTMyLDQ4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDIwMCwxNjRaIi8+PC9zdmc+)
 */
export function PhTelevisionBoldIcon(props: PhTelevisionBoldIconProps) {
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
      <path d="M216,60H157l27.52-27.52a12,12,0,0,0-17-17L128,55,88.49,15.51a12,12,0,0,0-17,17L99,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM44,84h84V196H44ZM212,196H152V84h60Zm-44-80a16,16,0,1,1,16,16A16,16,0,0,1,168,116Zm32,48a16,16,0,1,1-16-16A16,16,0,0,1,200,164Z"/>
    </svg>
  );
}
