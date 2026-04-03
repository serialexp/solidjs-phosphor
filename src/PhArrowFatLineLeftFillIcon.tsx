import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsODB2OTZhOCw4LDAsMCwxLTgsOEgxMjh2NDBhOCw4LDAsMCwxLTEzLjY2LDUuNjZsLTk2LTk2YTgsOCwwLDAsMSwwLTExLjMybDk2LTk2QTgsOCwwLDAsMSwxMjgsMzJWNzJoNTZBOCw4LDAsMCwxLDE5Miw4MFptMjQtOGE4LDgsMCwwLDAtOCw4djk2YTgsOCwwLDAsMCwxNiwwVjgwQTgsOCwwLDAsMCwyMTYsNzJaIi8+PC9zdmc+)
 */
export function PhArrowFatLineLeftFillIcon(props: PhArrowFatLineLeftFillIconProps) {
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
      <path d="M192,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56A8,8,0,0,1,192,80Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Z"/>
    </svg>
  );
}
