import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNavigationArrowBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNywxMDIuNDYsNjIuODEsMzcuMjFsLS4yNS0uMDlBMjAsMjAsMCwwLDAsMzcuMTIsNjIuNTZsLjA5LjI1TDEwMi40NiwyMzguN0EyMCwyMCwwLDAsMCwxMjEuMywyNTJoLjM1YTIwLDIwLDAsMCwwLDE4Ljc3LTE0LjEybC4wOS0uMjksMjEuMjMtNzUuODUsNzUuODUtMjEuMjMuMjktLjA5YTIwLDIwLDAsMCwwLC44Mi0zOFptLTg5LjkzLDM4YTEyLDEyLDAsMCwwLTguMzIsOC4zMmwtMTkuNjgsNzAuMjlMNjIuOCw2Mi44bDE1Ni4yNiw1OFoiLz48L3N2Zz4=)
 */
export function PhNavigationArrowBoldIcon(props: PhNavigationArrowBoldIconProps) {
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
      <path d="M238.7,102.46,62.81,37.21l-.25-.09A20,20,0,0,0,37.12,62.56l.09.25L102.46,238.7A20,20,0,0,0,121.3,252h.35a20,20,0,0,0,18.77-14.12l.09-.29,21.23-75.85,75.85-21.23.29-.09a20,20,0,0,0,.82-38Zm-89.93,38a12,12,0,0,0-8.32,8.32l-19.68,70.29L62.8,62.8l156.26,58Z"/>
    </svg>
  );
}
