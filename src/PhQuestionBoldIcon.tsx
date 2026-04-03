import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuestionBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTgwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxODBabTkyLTUyQTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTI0LDBhODQsODQsMCwxLDAtODQsODRBODQuMDksODQuMDksMCwwLDAsMjEyLDEyOFpNMTI4LDY0Yy0yNC4yNiwwLTQ0LDE3Ljk0LTQ0LDQwdjRhMTIsMTIsMCwwLDAsMjQsMHYtNGMwLTguODIsOS0xNiwyMC0xNnMyMCw3LjE4LDIwLDE2LTksMTYtMjAsMTZhMTIsMTIsMCwwLDAtMTIsMTJ2OGExMiwxMiwwLDAsMCwyMy43MywyLjU2QzE1OC4zMSwxMzcuODgsMTcyLDEyMi4zNywxNzIsMTA0LDE3Miw4MS45NCwxNTIuMjYsNjQsMTI4LDY0WiIvPjwvc3ZnPg==)
 */
export function PhQuestionBoldIcon(props: PhQuestionBoldIconProps) {
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
      <path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z"/>
    </svg>
  );
}
