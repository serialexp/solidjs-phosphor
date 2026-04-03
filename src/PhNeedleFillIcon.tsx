import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNeedleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjgsNDMuNzJhNDAsNDAsMCwwLDAtNTYuNTYsMGwtMjQsMjRhOCw4LDAsMCwwLTIuMjMsNC4zQzEyMC42OSwxMjMuMjgsMzYsMjA4LjczLDM0LjM2LDIxMC4zM2gwYTgsOCwwLDAsMCwxMS4zMSwxMS4zMmgwYy44Ni0uODcsODYuODMtODYuMzEsMTM4LjMyLTk1LjE1YTgsOCwwLDAsMCw0LjMtMi4yM2wyNC0yNGE0MCw0MCwwLDAsMCwwLTU2LjU2Wk0xODkuNjYsNzcuNjZsLTE2LDE2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwxNi0xNmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 */
export function PhNeedleFillIcon(props: PhNeedleFillIconProps) {
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
      <path d="M212.28,43.72a40,40,0,0,0-56.56,0l-24,24a8,8,0,0,0-2.23,4.3C120.69,123.28,36,208.73,34.36,210.33h0a8,8,0,0,0,11.31,11.32h0c.86-.87,86.83-86.31,138.32-95.15a8,8,0,0,0,4.3-2.23l24-24a40,40,0,0,0,0-56.56ZM189.66,77.66l-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
