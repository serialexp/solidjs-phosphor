import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShieldCheckFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0tMzQuMzIsNjkuNjYtNTYsNTZhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMTIsMTQ4LjY5bDUwLjM0LTUwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 */
export function PhShieldCheckFillIcon(props: PhShieldCheckFillIconProps) {
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
      <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
