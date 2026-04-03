import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOptionLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTkyYTYsNiwwLDAsMS02LDZIMTYwLjk0YTEzLjkyLDEzLjkyLDAsMCwxLTEyLjUyLTcuNzRMOTYuODQsODcuMTFBMiwyLDAsMCwwLDk1LjA2LDg2SDMyYTYsNiwwLDAsMSwwLTEySDk1LjA2YTEzLjkyLDEzLjkyLDAsMCwxLDEyLjUyLDcuNzRsNTEuNTgsMTAzLjE1YTIsMiwwLDAsMCwxLjc4LDEuMTFIMjI0QTYsNiwwLDAsMSwyMzAsMTkyWk0xNTIsODZoNzJhNiw2LDAsMCwwLDAtMTJIMTUyYTYsNiwwLDAsMCwwLDEyWiIvPjwvc3ZnPg==)
 */
export function PhOptionLightIcon(props: PhOptionLightIconProps) {
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
      <path d="M230,192a6,6,0,0,1-6,6H160.94a13.92,13.92,0,0,1-12.52-7.74L96.84,87.11A2,2,0,0,0,95.06,86H32a6,6,0,0,1,0-12H95.06a13.92,13.92,0,0,1,12.52,7.74l51.58,103.15a2,2,0,0,0,1.78,1.11H224A6,6,0,0,1,230,192ZM152,86h72a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Z"/>
    </svg>
  );
}
