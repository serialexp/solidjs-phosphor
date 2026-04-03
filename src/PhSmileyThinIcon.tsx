import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSmileyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuNDYsMTU0Yy05LjU1LDE2LjUyLTI1LjM5LDI2LTQzLjQ2LDI2cy0zMy45MS05LjQ4LTQzLjQ2LTI2YTQsNCwwLDAsMSw2LjkyLTRjOC4yMSwxNC4xOSwyMS4xOSwyMiwzNi41NCwyMnMyOC4zMy03LjgxLDM2LjU0LTIyYTQsNCwwLDEsMSw2LjkyLDRaTTIyOCwxMjhBMTAwLDEwMCwwLDEsMSwxMjgsMjgsMTAwLjExLDEwMC4xMSwwLDAsMSwyMjgsMTI4Wm0tOCwwYTkyLDkyLDAsMSwwLTkyLDkyQTkyLjEsOTIuMSwwLDAsMCwyMjAsMTI4Wk05MiwxMTZhOCw4LDAsMSwwLTgtOEE4LDgsMCwwLDAsOTIsMTE2Wm03Mi0xNmE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCwxNjQsMTAwWiIvPjwvc3ZnPg==)
 */
export function PhSmileyThinIcon(props: PhSmileyThinIconProps) {
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
      <path d="M171.46,154c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM92,116a8,8,0,1,0-8-8A8,8,0,0,0,92,116Zm72-16a8,8,0,1,0,8,8A8,8,0,0,0,164,100Z"/>
    </svg>
  );
}
