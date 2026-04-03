import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCornersOutIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWODhhOCw4LDAsMCwxLTE2LDBWNTZIMTY4YTgsOCwwLDAsMSwwLTE2aDQwQTgsOCwwLDAsMSwyMTYsNDhaTTg4LDIwMEg1NlYxNjhhOCw4LDAsMCwwLTE2LDB2NDBhOCw4LDAsMCwwLDgsOEg4OGE4LDgsMCwwLDAsMC0xNlptMTIwLTQwYTgsOCwwLDAsMC04LDh2MzJIMTY4YTgsOCwwLDAsMCwwLDE2aDQwYTgsOCwwLDAsMCw4LThWMTY4QTgsOCwwLDAsMCwyMDgsMTYwWk04OCw0MEg0OGE4LDgsMCwwLDAtOCw4Vjg4YTgsOCwwLDAsMCwxNiwwVjU2SDg4YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhCornersOutIcon(props: PhCornersOutIconProps) {
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
      <path d="M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
