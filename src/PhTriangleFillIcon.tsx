import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTriangleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuNzgsMjExLjgxQTI0LjM0LDI0LjM0LDAsMCwxLDIxNS40NSwyMjRINDAuNTVhMjQuMzQsMjQuMzQsMCwwLDEtMjEuMzMtMTIuMTksMjMuNTEsMjMuNTEsMCwwLDEsMC0yMy43MkwxMDYuNjUsMzYuMjJhMjQuNzYsMjQuNzYsMCwwLDEsNDIuNywwTDIzNi44LDE4OC4wOUEyMy41MSwyMy41MSwwLDAsMSwyMzYuNzgsMjExLjgxWiIvPjwvc3ZnPg==)
 */
export function PhTriangleFillIcon(props: PhTriangleFillIconProps) {
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
      <path d="M236.78,211.81A24.34,24.34,0,0,1,215.45,224H40.55a24.34,24.34,0,0,1-21.33-12.19,23.51,23.51,0,0,1,0-23.72L106.65,36.22a24.76,24.76,0,0,1,42.7,0L236.8,188.09A23.51,23.51,0,0,1,236.78,211.81Z"/>
    </svg>
  );
}
