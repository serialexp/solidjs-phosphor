import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandbagSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuODksMTk4LjEybC0xNC4yNi0xMjBhMTYsMTYsMCwwLDAtMTYtMTQuMTJIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBINDYuMzNhMTYsMTYsMCwwLDAtMTYsMTQuMTJsLTE0LjI2LDEyMEExNiwxNiwwLDAsMCwyMCwyMTAuNmExNi4xMywxNi4xMywwLDAsMCwxMiw1LjRIMjIzLjkyQTE2LjEzLDE2LjEzLDAsMCwwLDIzNiwyMTAuNiwxNiwxNiwwLDAsMCwyMzkuODksMTk4LjEyWk0xMjgsMzJhMzIsMzIsMCwwLDEsMzIsMzJIOTZBMzIsMzIsMCwwLDEsMTI4LDMyWiIvPjwvc3ZnPg==)
 */
export function PhHandbagSimpleFillIcon(props: PhHandbagSimpleFillIconProps) {
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
      <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"/>
    </svg>
  );
}
