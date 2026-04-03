import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCylinderFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZDODcuNjMsMTYsNTYsMzUuMzMsNTYsNjBWMTk2YzAsMjQuNjcsMzEuNjMsNDQsNzIsNDRzNzItMTkuMzMsNzItNDRWNjBDMjAwLDM1LjMzLDE2OC4zNywxNiwxMjgsMTZabTAsMjA4Yy0yOS44MywwLTU2LTEzLjA4LTU2LTI4Vjc3LjQzQzgyLjkyLDg4LjUsMTAzLjksOTYsMTI4LDk2czQ1LjA4LTcuNSw1Ni0xOC41N1YxOTZDMTg0LDIxMC45MiwxNTcuODMsMjI0LDEyOCwyMjRaIi8+PC9zdmc+)
 */
export function PhCylinderFillIcon(props: PhCylinderFillIconProps) {
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
      <path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,208c-29.83,0-56-13.08-56-28V77.43C82.92,88.5,103.9,96,128,96s45.08-7.5,56-18.57V196C184,210.92,157.83,224,128,224Z"/>
    </svg>
  );
}
