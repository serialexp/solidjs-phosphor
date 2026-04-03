import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHamburgerFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNS41OCw5OC4wNmExNiwxNiwwLDAsMS0zLjIzLTEzLjQ0QzM5Ljc4LDQ5LjUsODAsMjQsMTI4LDI0czg4LjIyLDI1LjUsOTUuNjUsNjAuNjJBMTYsMTYsMCwwLDEsMjA3LjkzLDEwNEg0OC4wN0ExNiwxNiwwLDAsMSwzNS41OCw5OC4wNlptMTkzLjY4LDU0LjQyLTQxLjEzLDE1TDE1MSwxNTIuNTdhOCw4LDAsMCwwLTUuOTQsMGwtMzcsMTQuODFMNzEsMTUyLjU3YTgsOCwwLDAsMC01LjctLjA5bC00NCwxNmE4LDgsMCwwLDAsNS40NywxNUw0MCwxNzguNjlWMTg0YTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwdi05LjY3bDE4LjczLTYuODFhOCw4LDAsMSwwLTUuNDctMTVaTTI0LDEzNkgyMzJhOCw4LDAsMCwwLDAtMTZIMjRhOCw4LDAsMCwwLDAsMTZaIi8+PC9zdmc+)
 */
export function PhHamburgerFillIcon(props: PhHamburgerFillIconProps) {
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
      <path d="M35.58,98.06a16,16,0,0,1-3.23-13.44C39.78,49.5,80,24,128,24s88.22,25.5,95.65,60.62A16,16,0,0,1,207.93,104H48.07A16,16,0,0,1,35.58,98.06Zm193.68,54.42-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM24,136H232a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
