import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHFourBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsNTZWMTc2YTEyLDEyLDAsMCwxLTI0LDBWMTI4SDUydjQ4YTEyLDEyLDAsMCwxLTI0LDBWNTZhMTIsMTIsMCwwLDEsMjQsMHY0OGg4MFY1NmExMiwxMiwwLDAsMSwyNCwwWk0yNTYsMTg0YTEyLDEyLDAsMCwxLTEyLDEydjEyYTEyLDEyLDAsMCwxLTI0LDBWMTk2SDE4MGExMiwxMiwwLDAsMS05LjczLTE5bDUyLTcyQTEyLDEyLDAsMCwxLDI0NCwxMTJ2NjBBMTIsMTIsMCwwLDEsMjU2LDE4NFptLTM2LTM0Ljg5TDIwMy40NywxNzJIMjIwWiIvPjwvc3ZnPg==)
 */
export function PhTextHFourBoldIcon(props: PhTextHFourBoldIconProps) {
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
      <path d="M156,56V176a12,12,0,0,1-24,0V128H52v48a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v48h80V56a12,12,0,0,1,24,0ZM256,184a12,12,0,0,1-12,12v12a12,12,0,0,1-24,0V196H180a12,12,0,0,1-9.73-19l52-72A12,12,0,0,1,244,112v60A12,12,0,0,1,256,184Zm-36-34.89L203.47,172H220Z"/>
    </svg>
  );
}
