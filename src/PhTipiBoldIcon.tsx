import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTipiBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDIuMTEsMjA5LjUzbC05OS44Ni0xNTYsMTkuODYtMzFBMTIsMTIsMCwxLDAsMTQxLjg5LDkuNTNMMTI4LDMxLjI0LDExNC4xMSw5LjUzQTEyLDEyLDAsMCwwLDkzLjg5LDIyLjQ3bDE5Ljg2LDMxLTk5Ljg2LDE1NkExMiwxMiwwLDAsMCwyNCwyMjhIMjMyYTEyLDEyLDAsMCwwLDEwLjExLTE4LjQ3Wk05Ni4xNywyMDQsMTI4LDE1NC4yNiwxNTkuODMsMjA0Wm05Mi4xNiwwLTUwLjIyLTc4LjQ3YTEyLDEyLDAsMCwwLTIwLjIyLDBMNjcuNjcsMjA0SDQ1LjkzTDEyOCw3NS43NiwyMTAuMDcsMjA0WiIvPjwvc3ZnPg==)
 */
export function PhTipiBoldIcon(props: PhTipiBoldIconProps) {
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
      <path d="M242.11,209.53l-99.86-156,19.86-31A12,12,0,1,0,141.89,9.53L128,31.24,114.11,9.53A12,12,0,0,0,93.89,22.47l19.86,31-99.86,156A12,12,0,0,0,24,228H232a12,12,0,0,0,10.11-18.47ZM96.17,204,128,154.26,159.83,204Zm92.16,0-50.22-78.47a12,12,0,0,0-20.22,0L67.67,204H45.93L128,75.76,210.07,204Z"/>
    </svg>
  );
}
