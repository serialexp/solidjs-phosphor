import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClipboardIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJIMTYzLjc0YTQ3LjkyLDQ3LjkyLDAsMCwwLTcxLjQ4LDBINTZBMTYsMTYsMCwwLDAsNDAsNDhWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDAsMzJabS03MiwwYTMyLDMyLDAsMCwxLDMyLDMySDk2QTMyLDMyLDAsMCwxLDEyOCwzMlptNzIsMTg0SDU2VjQ4SDgyLjc1QTQ3LjkzLDQ3LjkzLDAsMCwwLDgwLDY0djhhOCw4LDAsMCwwLDgsOGg4MGE4LDgsMCwwLDAsOC04VjY0YTQ3LjkzLDQ3LjkzLDAsMCwwLTIuNzUtMTZIMjAwWiIvPjwvc3ZnPg==)
 */
export function PhClipboardIcon(props: PhClipboardIconProps) {
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
      <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"/>
    </svg>
  );
}
