import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsSplitBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTkyLjQ5bC0zMiwzMmExMiwxMiwwLDAsMS0xNywwbC0zMi0zMmExMiwxMiwwLDAsMSwxNy0xN0wxODAsMTg3VjE0MUwxMjgsODksNzYsMTQxVjE4N2wxMS41MS0xMS41MmExMiwxMiwwLDAsMSwxNywxN2wtMzIsMzJhMTIsMTIsMCwwLDEtMTcsMGwtMzItMzJhMTIsMTIsMCwxLDEsMTctMTdMNTIsMTg3VjEzNmExMiwxMiwwLDAsMSwzLjUxLTguNDlMMTE2LDY3VjI0YTEyLDEyLDAsMCwxLDI0LDBWNjdsNjAuNDksNjAuNDhBMTIsMTIsMCwwLDEsMjA0LDEzNnY1MWwxMS41MS0xMS41MmExMiwxMiwwLDAsMSwxNywxN1oiLz48L3N2Zz4=)
 */
export function PhArrowsSplitBoldIcon(props: PhArrowsSplitBoldIconProps) {
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
      <path d="M232.49,192.49l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L180,187V141L128,89,76,141V187l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L52,187V136a12,12,0,0,1,3.51-8.49L116,67V24a12,12,0,0,1,24,0V67l60.49,60.48A12,12,0,0,1,204,136v51l11.51-11.52a12,12,0,0,1,17,17Z"/>
    </svg>
  );
}
