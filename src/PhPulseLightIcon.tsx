import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPulseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTI4YTYsNiwwLDAsMS02LDZIMjAzLjcxbC0zOC4zNCw3Ni42OEE2LDYsMCwwLDEsMTYwLDIxNGgtLjNhNiw2LDAsMCwxLTUuMzEtMy44NUw5NS41MSw1NS41Nyw2MS40NiwxMzAuNDhBNiw2LDAsMCwxLDU2LDEzNEgyNGE2LDYsMCwwLDEsMC0xMkg1Mi4xNGwzOC40LTg0LjQ4YTYsNiwwLDAsMSwxMS4wNy4zNEwxNjAuNzQsMTkzLjFsMzMuODktNjcuNzhBNiw2LDAsMCwxLDIwMCwxMjJoMzJBNiw2LDAsMCwxLDIzOCwxMjhaIi8+PC9zdmc+)
 */
export function PhPulseLightIcon(props: PhPulseLightIconProps) {
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
      <path d="M238,128a6,6,0,0,1-6,6H203.71l-38.34,76.68A6,6,0,0,1,160,214h-.3a6,6,0,0,1-5.31-3.85L95.51,55.57,61.46,130.48A6,6,0,0,1,56,134H24a6,6,0,0,1,0-12H52.14l38.4-84.48a6,6,0,0,1,11.07.34L160.74,193.1l33.89-67.78A6,6,0,0,1,200,122h32A6,6,0,0,1,238,128Z"/>
    </svg>
  );
}
