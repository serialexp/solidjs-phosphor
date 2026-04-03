import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRulerIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMzIsNzMuMzcsMTgyLjYzLDIwLjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMMjAuNjgsMTYwYTE2LDE2LDAsMCwwLDAsMjIuNjNsNTIuNjksNTIuNjhhMTYsMTYsMCwwLDAsMjIuNjMsMEwyMzUuMzIsOTZBMTYsMTYsMCwwLDAsMjM1LjMyLDczLjM3Wk04NC42OCwyMjQsMzIsMTcxLjMxbDMyLTMyLDI2LjM0LDI2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMkw3NS4zMSwxMjgsOTYsMTA3LjMxbDI2LjM0LDI2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMkwxMDcuMzEsOTYsMTI4LDc1LjMxbDI2LjM0LDI2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMkwxMzkuMzEsNjRsMzItMzJMMjI0LDg0LjY5WiIvPjwvc3ZnPg==)
 */
export function PhRulerIcon(props: PhRulerIconProps) {
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
      <path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"/>
    </svg>
  );
}
