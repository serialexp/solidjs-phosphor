import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjA4SDcyVjExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsNDhhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEsMC0xNkgyMjRBOCw4LDAsMCwxLDIzMiw0OFpNMTg5LjY2LDkwLjM0YTgsOCwwLDAsMSwwLDExLjMyTDEzMS4zMSwxNjBsNDIuMzUsNDIuMzRBOCw4LDAsMCwxLDE2OCwyMTZINzJhOCw4LDAsMCwxLTgtOFYxMTJhOCw4LDAsMCwxLDEzLjY2LTUuNjZMMTIwLDE0OC42OWw1OC4zNC01OC4zNUE4LDgsMCwwLDEsMTg5LjY2LDkwLjM0Wk0xNDguNjksMjAwbC0zNC4zNC0zNC4zNGgwTDgwLDEzMS4zMVYyMDBaIi8+PC9zdmc+)
 */
export function PhArrowLineDownLeftDuotoneIcon(props: PhArrowLineDownLeftDuotoneIconProps) {
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
      <path d="M168,208H72V112Z" opacity="0.2"/><path d="M232,48a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,48ZM189.66,90.34a8,8,0,0,1,0,11.32L131.31,160l42.35,42.34A8,8,0,0,1,168,216H72a8,8,0,0,1-8-8V112a8,8,0,0,1,13.66-5.66L120,148.69l58.34-58.35A8,8,0,0,1,189.66,90.34ZM148.69,200l-34.34-34.34h0L80,131.31V200Z"/>
    </svg>
  );
}
