import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPiIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTcyYTM2LDM2LDAsMCwxLTcyLDBWNzJIOTZWMjAwYTgsOCwwLDAsMS0xNiwwVjcySDcyYTQwLDQwLDAsMCwwLTQwLDQwLDgsOCwwLDAsMS0xNiwwQTU2LjA2LDU2LjA2LDAsMCwxLDcyLDU2SDIyNGE4LDgsMCwwLDEsMCwxNkgxNzZWMTcyYTIwLDIwLDAsMCwwLDQwLDAsOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 */
export function PhPiIcon(props: PhPiIconProps) {
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
      <path d="M232,172a36,36,0,0,1-72,0V72H96V200a8,8,0,0,1-16,0V72H72a40,40,0,0,0-40,40,8,8,0,0,1-16,0A56.06,56.06,0,0,1,72,56H224a8,8,0,0,1,0,16H176V172a20,20,0,0,0,40,0,8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
