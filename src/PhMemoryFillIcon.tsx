import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemoryFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZIMjRBMTYsMTYsMCwwLDAsOCw3MlYyMDBhOCw4LDAsMCwwLDE2LDBWMTg0SDQwdjE2YTgsOCwwLDAsMCwxNiwwVjE4NEg3MnYxNmE4LDgsMCwwLDAsMTYsMFYxODRoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTg0aDE2djE2YTgsOCwwLDAsMCwxNiwwVjE4NGgxNnYxNmE4LDgsMCwwLDAsMTYsMFYxODRoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTg0aDE2djE2YTgsOCwwLDAsMCwxNiwwVjcyQTE2LDE2LDAsMCwwLDIzMiw1NlpNMjA4LDk2djQ4SDE0NFY5NlptLTk2LDB2NDhINDhWOTZaIi8+PC9zdmc+)
 */
export function PhMemoryFillIcon(props: PhMemoryFillIconProps) {
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
      <path d="M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM208,96v48H144V96Zm-96,0v48H48V96Z"/>
    </svg>
  );
}
