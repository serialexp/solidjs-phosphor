import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopySimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjRINDBhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDgsOEgxODRhOCw4LDAsMCwwLDgtOFY3MkE4LDgsMCwwLDAsMTg0LDY0Wm0tOCwxNDRINDhWODBIMTc2Wk0yMjQsNDBWMTg0YTgsOCwwLDAsMS0xNiwwVjQ4SDcyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDQwWiIvPjwvc3ZnPg==)
 */
export function PhCopySimpleIcon(props: PhCopySimpleIconProps) {
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
      <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"/>
    </svg>
  );
}
