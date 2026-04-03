import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiceFiveFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJaTTkyLDE3NmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw5MiwxNzZabTAtNzJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsOTIsMTA0Wm0zNiwzNmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTQwWm0zNiwzNmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNjQsMTc2Wm0wLTcyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2NCwxMDRaIi8+PC9zdmc+)
 */
export function PhDiceFiveFillIcon(props: PhDiceFiveFillIconProps) {
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
      <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,176a12,12,0,1,1,12-12A12,12,0,0,1,92,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,164,104Z"/>
    </svg>
  );
}
