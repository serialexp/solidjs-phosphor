import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryVerticalMediumFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw4YTgsOCwwLDAsMSw4LThoNjRhOCw4LDAsMCwxLDAsMTZIOTZBOCw4LDAsMCwxLDg4LDhaTTIwMCw1NlYyMjRhMjQsMjQsMCwwLDEtMjQsMjRIODBhMjQsMjQsMCwwLDEtMjQtMjRWNTZBMjQsMjQsMCwwLDEsODAsMzJoOTZBMjQsMjQsMCwwLDEsMjAwLDU2Wm0tMTYsMGE4LDgsMCwwLDAtOC04SDgwYTgsOCwwLDAsMC04LDhWMjI0YTgsOCwwLDAsMCw4LDhoOTZhOCw4LDAsMCwwLDgtOFptLTI0LDg4SDk2YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGg2NGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMTYwLDE0NFoiLz48L3N2Zz4=)
 */
export function PhBatteryVerticalMediumFillIcon(props: PhBatteryVerticalMediumFillIconProps) {
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
      <path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Zm-24,88H96a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V152A8,8,0,0,0,160,144Z"/>
    </svg>
  );
}
