import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTcsNTQuNDJhMTA0LDEwNCwwLDEsMCwwLDE0Ny4xNUExMDQuMTcsMTA0LjE3LDAsMCwwLDIwMS41Nyw1NC40MlptLTgzLjkyLDk5LjkzYTgsOCwwLDEsMS0xMS4zMiwxMS4zMmwtMzItMzJhOCw4LDAsMCwxLDAtMTEuMzJsMzItMzJhOCw4LDAsMSwxLDExLjMyLDExLjMyTDkxLjI5LDEyOFptNTYsMGE4LDgsMCwxLDEtMTEuMzIsMTEuMzJsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDEsMSwxMS4zMiwxMS4zMkwxNDcuMzIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleDoubleLeftFillIcon(props: PhCaretCircleDoubleLeftFillIconProps) {
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
      <path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-83.92,99.93a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L91.29,128Zm56,0a8,8,0,1,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,1,1,11.32,11.32L147.32,128Z"/>
    </svg>
  );
}
