import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLampFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuNjgsMTU2LjRBOCw4LDAsMCwxLDI0MCwxNjBIMjA4djMyYTgsOCwwLDAsMS0xNiwwVjE2MEgxMzZ2NDhoMjRhOCw4LDAsMCwxLDAsMTZIOTZhOCw4LDAsMCwxLDAtMTZoMjRWMTYwSDE2YTgsOCwwLDAsMS03LjM1LTExLjE1bDQ4LTExMkE4LDgsMCwwLDEsNjQsMzJIMTkyYTgsOCwwLDAsMSw3LjM1LDQuODVsNDgsMTEyQTgsOCwwLDAsMSwyNDYuNjgsMTU2LjRaIi8+PC9zdmc+)
 */
export function PhLampFillIcon(props: PhLampFillIconProps) {
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
      <path d="M246.68,156.4A8,8,0,0,1,240,160H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H16a8,8,0,0,1-7.35-11.15l48-112A8,8,0,0,1,64,32H192a8,8,0,0,1,7.35,4.85l48,112A8,8,0,0,1,246.68,156.4Z"/>
    </svg>
  );
}
