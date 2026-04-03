import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhControlFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuMzksMTIzLjA2QTgsOCwwLDAsMSwyMDAsMTI4SDU2YTgsOCwwLDAsMS01LjY2LTEzLjY2bDcyLTcyYTgsOCwwLDAsMSwxMS4zMiwwbDcyLDcyQTgsOCwwLDAsMSwyMDcuMzksMTIzLjA2WiIvPjwvc3ZnPg==)
 */
export function PhControlFillIcon(props: PhControlFillIconProps) {
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
      <path d="M207.39,123.06A8,8,0,0,1,200,128H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,123.06Z"/>
    </svg>
  );
}
