import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZBMTA0LjExLDEwNC4xMSwwLDAsMSwxMjgsMTYwSDUxLjMxbDM0LjM1LDM0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMmwtNDgtNDhhOCw4LDAsMCwxLDAtMTEuMzJsNDgtNDhhOCw4LDAsMCwxLDExLjMyLDExLjMyTDUxLjMxLDE0NEgxMjhhODguMSw4OC4xLDAsMCwwLDg4LTg4LDgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendDownLeftIcon(props: PhArrowBendDownLeftIconProps) {
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
      <path d="M232,56A104.11,104.11,0,0,1,128,160H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,11.32L51.31,144H128a88.1,88.1,0,0,0,88-88,8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
