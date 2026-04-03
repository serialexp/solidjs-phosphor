import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMjI0VjE3NkgxMDRWODBoMzJWMzJsOTYsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjM3LjY2LDEyMi4zNGwtOTYtOTZBOCw4LDAsMCwwLDEyOCwzMlY3MkgxMDRhOCw4LDAsMCwwLTgsOHY5NmE4LDgsMCwwLDAsOCw4aDI0djQwYTgsOCwwLDAsMCwxMy42Niw1LjY2bDk2LTk2QTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0Wk0xNDQsMjA0LjY5VjE3NmE4LDgsMCwwLDAtOC04SDExMlY4OGgyNGE4LDgsMCwwLDAsOC04VjUxLjMxTDIyMC42OSwxMjhaTTQ4LDgwdjk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWm0zMiwwdjk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLinesRightDuotoneIcon(props: PhArrowFatLinesRightDuotoneIconProps) {
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
      <path d="M136,224V176H104V80h32V32l96,96Z" opacity="0.2"/><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
