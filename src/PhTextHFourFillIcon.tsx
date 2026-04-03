import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHFourFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuNDYsMTQ0LDE4NCwxMTkuMTNWMTQ0Wk0yMjQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhaTTEyOCw4MGE4LDgsMCwwLDAtMTYsMHYzMkg3MlY4MGE4LDgsMCwwLDAtMTYsMHY4MGE4LDgsMCwwLDAsMTYsMFYxMjhoNDB2MzJhOCw4LDAsMCwwLDE2LDBabTg0LDcyYTgsOCwwLDAsMC04LThoLTRWOTZhOCw4LDAsMCwwLTE0LjI5LTQuOTRsLTQ0LDU2QTgsOCwwLDAsMCwxNDgsMTYwaDM2djE2YTgsOCwwLDAsMCwxNiwwVjE2MGg0QTgsOCwwLDAsMCwyMTIsMTUyWiIvPjwvc3ZnPg==)
 */
export function PhTextHFourFillIcon(props: PhTextHFourFillIconProps) {
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
      <path d="M164.46,144,184,119.13V144ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,80a8,8,0,0,0-16,0v32H72V80a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V128h40v32a8,8,0,0,0,16,0Zm84,72a8,8,0,0,0-8-8h-4V96a8,8,0,0,0-14.29-4.94l-44,56A8,8,0,0,0,148,160h36v16a8,8,0,0,0,16,0V160h4A8,8,0,0,0,212,152Z"/>
    </svg>
  );
}
