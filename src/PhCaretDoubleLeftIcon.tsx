import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMjAyLjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMmwtODAtODBhOCw4LDAsMCwxLDAtMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDExLjMyTDEzMS4zMSwxMjhaTTUxLjMxLDEyOGw3NC4zNS03NC4zNGE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTgwLDgwYTgsOCwwLDAsMCwwLDExLjMybDgwLDgwYTgsOCwwLDAsMCwxMS4zMi0xMS4zMloiLz48L3N2Zz4=)
 */
export function PhCaretDoubleLeftIcon(props: PhCaretDoubleLeftIconProps) {
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
      <path d="M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z"/>
    </svg>
  );
}
