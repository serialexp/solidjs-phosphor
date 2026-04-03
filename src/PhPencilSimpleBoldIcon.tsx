import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPencilSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTQsNzAuNTQsMTg1LjQ2LDI1Ljg1YTIwLDIwLDAsMCwwLTI4LjI5LDBMMzMuODYsMTQ5LjE3QTE5Ljg1LDE5Ljg1LDAsMCwwLDI4LDE2My4zMVYyMDhhMjAsMjAsMCwwLDAsMjAsMjBIOTIuNjlhMTkuODYsMTkuODYsMCwwLDAsMTQuMTQtNS44NkwyMzAuMTQsOTguODJhMjAsMjAsMCwwLDAsMC0yOC4yOFpNOTEsMjA0SDUyVjE2NWw4NC04NCwzOSwzOVpNMTkyLDEwMywxNTMsNjRsMTguMzQtMTguMzQsMzksMzlaIi8+PC9zdmc+)
 */
export function PhPencilSimpleBoldIcon(props: PhPencilSimpleBoldIconProps) {
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
      <path d="M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"/>
    </svg>
  );
}
