import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPencilSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzEsNzMuMzcsMTgyLjYzLDI4LjY4YTE2LDE2LDAsMCwwLTIyLjYzLDBMMzYuNjksMTUyQTE1Ljg2LDE1Ljg2LDAsMCwwLDMyLDE2My4zMVYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsMTA0LDIxOS4zMUwyMjcuMzEsOTZhMTYsMTYsMCwwLDAsMC0yMi42M1pNMTkyLDEwOC42OCwxNDcuMzEsNjRsMjQtMjRMMjE2LDg0LjY4WiIvPjwvc3ZnPg==)
 */
export function PhPencilSimpleFillIcon(props: PhPencilSimpleFillIconProps) {
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
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"/>
    </svg>
  );
}
