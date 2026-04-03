import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjI0YTgsOCwwLDAsMS04LDhBMTA0LjExLDEwNC4xMSwwLDAsMSw5NiwxMjhWNTEuMzFMNjEuNjYsODUuNjZBOCw4LDAsMCwxLDUwLjM0LDc0LjM0bDQ4LTQ4YTgsOCwwLDAsMSwxMS4zMiwwbDQ4LDQ4YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMTIsNTEuMzFWMTI4YTg4LjEsODguMSwwLDAsMCw4OCw4OEE4LDgsMCwwLDEsMjA4LDIyNFoiLz48L3N2Zz4=)
 */
export function PhArrowBendLeftUpIcon(props: PhArrowBendLeftUpIconProps) {
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
      <path d="M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V51.31L61.66,85.66A8,8,0,0,1,50.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L112,51.31V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z"/>
    </svg>
  );
}
