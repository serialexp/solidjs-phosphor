import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperclipHorizontalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTI4YTU2LjA2LDU2LjA2LDAsMCwxLTU2LDU2SDQ4YTQwLDQwLDAsMCwxLDAtODBIMTkyYTI0LDI0LDAsMCwxLDAsNDhIODBhOCw4LDAsMCwxLDAtMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDQ4YTI0LDI0LDAsMCwwLDAsNDhIMTkyYTQwLDQwLDAsMCwwLDAtODBIODBhOCw4LDAsMCwxLDAtMTZIMTkyQTU2LjA2LDU2LjA2LDAsMCwxLDI0OCwxMjhaIi8+PC9zdmc+)
 */
export function PhPaperclipHorizontalIcon(props: PhPaperclipHorizontalIconProps) {
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
      <path d="M248,128a56.06,56.06,0,0,1-56,56H48a40,40,0,0,1,0-80H192a24,24,0,0,1,0,48H80a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H48a24,24,0,0,0,0,48H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192A56.06,56.06,0,0,1,248,128Z"/>
    </svg>
  );
}
