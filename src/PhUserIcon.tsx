import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuOTIsMjEyYy0xNS4yMy0yNi4zMy0zOC43LTQ1LjIxLTY2LjA5LTU0LjE2YTcyLDcyLDAsMSwwLTczLjY2LDBDNjMuNzgsMTY2Ljc4LDQwLjMxLDE4NS42NiwyNS4wOCwyMTJhOCw4LDAsMSwwLDEzLjg1LDhjMTguODQtMzIuNTYsNTIuMTQtNTIsODkuMDctNTJzNzAuMjMsMTkuNDQsODkuMDcsNTJhOCw4LDAsMSwwLDEzLjg1LThaTTcyLDk2YTU2LDU2LDAsMSwxLDU2LDU2QTU2LjA2LDU2LjA2LDAsMCwxLDcyLDk2WiIvPjwvc3ZnPg==)
 */
export function PhUserIcon(props: PhUserIconProps) {
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
      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
    </svg>
  );
}
