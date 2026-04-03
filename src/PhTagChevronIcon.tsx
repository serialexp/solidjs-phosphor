import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagChevronIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuNjYsMTIzLjU2LDIwMSw1NS4xMkExNiwxNiwwLDAsMCwxODcuNzIsNDhIMzJhOCw4LDAsMCwwLTYuNjYsMTIuNDRMNzAuMzksMTI4bC00NSw2Ny41NkE4LDgsMCwwLDAsMzIsMjA4SDE4Ny43MkExNiwxNiwwLDAsMCwyMDEsMjAwLjg4bDQ1LjYzLTY4LjQ0QTgsOCwwLDAsMCwyNDYuNjYsMTIzLjU2Wk0xODcuNzIsMTkySDQ3bDM5LjcxLTU5LjU2YTgsOCwwLDAsMCwwLTguODhMNDcsNjRIMTg3LjcybDQyLjY3LDY0WiIvPjwvc3ZnPg==)
 */
export function PhTagChevronIcon(props: PhTagChevronIconProps) {
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
      <path d="M246.66,123.56,201,55.12A16,16,0,0,0,187.72,48H32a8,8,0,0,0-6.66,12.44L70.39,128l-45,67.56A8,8,0,0,0,32,208H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H47l39.71-59.56a8,8,0,0,0,0-8.88L47,64H187.72l42.67,64Z"/>
    </svg>
  );
}
