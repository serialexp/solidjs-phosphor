import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRowsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDQ4YTIwLDIwLDAsMCwwLTIwLDIwdjM2YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFYxNTZBMjAsMjAsMCwwLDAsMjA4LDEzNlptLTQsNTJINTJWMTYwSDIwNFptNC0xNDRINDhBMjAsMjAsMCwwLDAsMjgsNjR2MzZhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjY0QTIwLDIwLDAsMCwwLDIwOCw0NFptLTQsNTJINTJWNjhIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhRowsBoldIcon(props: PhRowsBoldIconProps) {
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
      <path d="M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z"/>
    </svg>
  );
}
