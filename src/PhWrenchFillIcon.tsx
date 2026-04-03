import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWrenchFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTZhNzIsNzIsMCwwLDEtMTAwLjk0LDY2TDc5LDIyMi4yMmMtLjEyLjE0LS4yNi4yOS0uMzkuNDJhMzIsMzIsMCwwLDEtNDUuMjYtNDUuMjZjLjE0LS4xMy4yOC0uMjcuNDMtLjM5TDk0LDEyNC45NGE3Mi4wNyw3Mi4wNywwLDAsMSw4My41NC05OC43OCw4LDgsMCwwLDEsMy45MywxMy4xOUwxNDQsODBsNS42NiwyNi4zNUwxNzYsMTEybDQwLjY1LTM3LjUyYTgsOCwwLDAsMSwxMy4xOSwzLjkzQTcyLjYsNzIuNiwwLDAsMSwyMzIsOTZaIi8+PC9zdmc+)
 */
export function PhWrenchFillIcon(props: PhWrenchFillIconProps) {
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
      <path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"/>
    </svg>
  );
}
