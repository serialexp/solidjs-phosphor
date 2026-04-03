import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw4MHY5NmE4LDgsMCwwLDEtMTYsMFY4MGE4LDgsMCwwLDEsMTYsMFptMTg5LjY2LDQyLjM0LTk2LTk2QTgsOCwwLDAsMCwxMjgsMzJWNzJINzJhOCw4LDAsMCwwLTgsOHY5NmE4LDgsMCwwLDAsOCw4aDU2djQwYTgsOCwwLDAsMCwxMy42Niw1LjY2bDk2LTk2QTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLineRightFillIcon(props: PhArrowFatLineRightFillIconProps) {
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
      <path d="M48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm189.66,42.34-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34Z"/>
    </svg>
  );
}
