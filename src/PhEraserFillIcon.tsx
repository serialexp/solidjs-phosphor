import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEraserFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUsODAuNCwxODMuNiwzOWEyNCwyNCwwLDAsMC0zMy45NCwwTDMxLDE1Ny42NmEyNCwyNCwwLDAsMCwwLDMzLjk0bDMwLjA2LDMwLjA2QTgsOCwwLDAsMCw2Ni43NCwyMjRIMjE2YTgsOCwwLDAsMCwwLTE2aC04NC43TDIyNSwxMTQuMzRBMjQsMjQsMCwwLDAsMjI1LDgwLjRaTTIxMy42NywxMDMsMTYwLDE1Ni42OSwxMDcuMzEsMTA0LDE2MSw1MC4zNGE4LDgsMCwwLDEsMTEuMzIsMGw0MS4zOCw0MS4zOGE4LDgsMCwwLDEsMCwxMS4zMVoiLz48L3N2Zz4=)
 */
export function PhEraserFillIcon(props: PhEraserFillIconProps) {
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
      <path d="M225,80.4,183.6,39a24,24,0,0,0-33.94,0L31,157.66a24,24,0,0,0,0,33.94l30.06,30.06A8,8,0,0,0,66.74,224H216a8,8,0,0,0,0-16h-84.7L225,114.34A24,24,0,0,0,225,80.4ZM213.67,103,160,156.69,107.31,104,161,50.34a8,8,0,0,1,11.32,0l41.38,41.38a8,8,0,0,1,0,11.31Z"/>
    </svg>
  );
}
