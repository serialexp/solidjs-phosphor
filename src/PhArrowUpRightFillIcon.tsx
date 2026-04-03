import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjRWMTY4YTgsOCwwLDAsMS0xMy42Niw1LjY2TDE0MCwxMjcuMzEsNjkuNjYsMTk3LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMjguNjksMTE2LDgyLjM0LDY5LjY2QTgsOCwwLDAsMSw4OCw1NkgxOTJBOCw4LDAsMCwxLDIwMCw2NFoiLz48L3N2Zz4=)
 */
export function PhArrowUpRightFillIcon(props: PhArrowUpRightFillIconProps) {
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
      <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"/>
    </svg>
  );
}
