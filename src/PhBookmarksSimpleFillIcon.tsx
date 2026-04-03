import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookmarksSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZINjRBMTYsMTYsMCwwLDAsNDgsNzJWMjI0YTgsOCwwLDAsMCwxMi42NSw2LjUxTDExMiwxOTMuODNsNTEuMzYsMzYuNjhBOCw4LDAsMCwwLDE3NiwyMjRWNzJBMTYsMTYsMCwwLDAsMTYwLDU2WiIvPjxwYXRoIGQ9Ik0xOTIsMjRIODhhOCw4LDAsMCwwLDAsMTZIMTkyVjE5MmE4LDgsMCwwLDAsMTYsMFY0MEExNiwxNiwwLDAsMCwxOTIsMjRaIi8+PC9zdmc+)
 */
export function PhBookmarksSimpleFillIcon(props: PhBookmarksSimpleFillIconProps) {
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
      <path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Z"/><path d="M192,24H88a8,8,0,0,0,0,16H192V192a8,8,0,0,0,16,0V40A16,16,0,0,0,192,24Z"/>
    </svg>
  );
}
