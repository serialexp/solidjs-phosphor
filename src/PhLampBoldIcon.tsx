import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLampBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEsMTQ3LjI3bC00OC0xMTJBMTIsMTIsMCwwLDAsMTkyLDI4SDY0YTEyLDEyLDAsMCwwLTExLDcuMjdsLTQ4LDExMkExMiwxMiwwLDAsMCwxNiwxNjRIMTE2djQwSDk2YTEyLDEyLDAsMCwwLDAsMjRoNjRhMTIsMTIsMCwwLDAsMC0yNEgxNDBWMTY0aDQ4djI4YTEyLDEyLDAsMCwwLDI0LDBWMTY0aDI4YTEyLDEyLDAsMCwwLDExLTE2LjczWk0zNC4yLDE0MCw3MS45MSw1MkgxODQuMDlsMzcuNzEsODhaIi8+PC9zdmc+)
 */
export function PhLampBoldIcon(props: PhLampBoldIconProps) {
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
      <path d="M251,147.27l-48-112A12,12,0,0,0,192,28H64a12,12,0,0,0-11,7.27l-48,112A12,12,0,0,0,16,164H116v40H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V164h48v28a12,12,0,0,0,24,0V164h28a12,12,0,0,0,11-16.73ZM34.2,140,71.91,52H184.09l37.71,88Z"/>
    </svg>
  );
}
