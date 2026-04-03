import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotEqualsThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTYwYTQsNCwwLDAsMS00LDRIMTAwLjY4TDUxLDIxOC42OUE0LDQsMCwwLDEsNDUsMjEzLjMxTDg5Ljg3LDE2NEg0MGE0LDQsMCwwLDEsMC04SDk3LjE0bDUwLjkxLTU2SDQwYTQsNCwwLDAsMSwwLThIMTU1LjMyTDIwNSwzNy4zMUE0LDQsMCwwLDEsMjExLDQyLjY5TDE2Ni4xMyw5MkgyMTZhNCw0LDAsMCwxLDAsOEgxNTguODZMMTA4LDE1NkgyMTZBNCw0LDAsMCwxLDIyMCwxNjBaIi8+PC9zdmc+)
 */
export function PhNotEqualsThinIcon(props: PhNotEqualsThinIconProps) {
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
      <path d="M220,160a4,4,0,0,1-4,4H100.68L51,218.69A4,4,0,0,1,45,213.31L89.87,164H40a4,4,0,0,1,0-8H97.14l50.91-56H40a4,4,0,0,1,0-8H155.32L205,37.31A4,4,0,0,1,211,42.69L166.13,92H216a4,4,0,0,1,0,8H158.86L108,156H216A4,4,0,0,1,220,160Z"/>
    </svg>
  );
}
