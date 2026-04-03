import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookmarksSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZINjRBMTYsMTYsMCwwLDAsNDgsNzJWMjI0YTgsOCwwLDAsMCwxMi42NSw2LjUxTDExMiwxOTMuODNsNTEuMzYsMzYuNjhBOCw4LDAsMCwwLDE3NiwyMjRWNzJBMTYsMTYsMCwwLDAsMTYwLDU2Wm0wLDE1Mi40Ni00My4zNi0zMWE4LDgsMCwwLDAtOS4zLDBMNjQsMjA4LjQ1VjcyaDk2Wk0yMDgsNDBWMTkyYTgsOCwwLDAsMS0xNiwwVjQwSDg4YTgsOCwwLDAsMSwwLTE2SDE5MkExNiwxNiwwLDAsMSwyMDgsNDBaIi8+PC9zdmc+)
 */
export function PhBookmarksSimpleIcon(props: PhBookmarksSimpleIconProps) {
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
      <path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"/>
    </svg>
  );
}
