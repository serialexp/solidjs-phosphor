import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodeDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4bC00OCw0MEg2NEwxNiwxMjgsNjQsODhIMTkyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTY5LjEyLDk0LjE1LDI4LjUsMTI4bDQwLjYyLDMzLjg1YTgsOCwwLDEsMS0xMC4yNCwxMi4yOWwtNDgtNDBhOCw4LDAsMCwxLDAtMTIuMjlsNDgtNDBhOCw4LDAsMCwxLDEwLjI0LDEyLjNabTE3NiwyNy43LTQ4LTQwYTgsOCwwLDEsMC0xMC4yNCwxMi4zTDIyNy41LDEyOGwtNDAuNjIsMzMuODVhOCw4LDAsMSwwLDEwLjI0LDEyLjI5bDQ4LTQwYTgsOCwwLDAsMCwwLTEyLjI5Wk0xNjIuNzMsMzIuNDhhOCw4LDAsMCwwLTEwLjI1LDQuNzlsLTY0LDE3NmE4LDgsMCwwLDAsNC43OSwxMC4yNkE4LjE0LDguMTQsMCwwLDAsOTYsMjI0YTgsOCwwLDAsMCw3LjUyLTUuMjdsNjQtMTc2QTgsOCwwLDAsMCwxNjIuNzMsMzIuNDhaIi8+PC9zdmc+)
 */
export function PhCodeDuotoneIcon(props: PhCodeDuotoneIconProps) {
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
      <path d="M240,128l-48,40H64L16,128,64,88H192Z" opacity="0.2"/><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/>
    </svg>
  );
}
