import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFoldersFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRIMTU0LjY3TDEyNi45Myw0My4yYTE2LjEyLDE2LjEyLDAsMCwwLTkuNi0zLjJINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE5Mi44OUExNS4xMywxNS4xMywwLDAsMCwyMDgsMjAwLjg5VjE4NGgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyNDAsMTY4Ljg5VjgwQTE2LDE2LDAsMCwwLDIyNCw2NFptMCwxMDRIMjA4VjExMmExNiwxNiwwLDAsMC0xNi0xNkgxMjIuNjdMOTQuOTMsNzUuMmExNi4xMiwxNi4xMiwwLDAsMC05LjYtMy4ySDcyVjU2aDQ1LjMzTDE0Ny4yLDc4LjRBOCw4LDAsMCwwLDE1Miw4MGg3MloiLz48L3N2Zz4=)
 */
export function PhFoldersFillIcon(props: PhFoldersFillIconProps) {
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
      <path d="M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64Zm0,104H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z"/>
    </svg>
  );
}
