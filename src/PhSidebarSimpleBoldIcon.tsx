import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSidebarSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZaTTQ0LDYwSDc2VjE5Nkg0NFpNMjEyLDE5NkgxMDBWNjBIMjEyWiIvPjwvc3ZnPg==)
 */
export function PhSidebarSimpleBoldIcon(props: PhSidebarSimpleBoldIconProps) {
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
      <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,60H76V196H44ZM212,196H100V60H212Z"/>
    </svg>
  );
}
