import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCameraDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjRIMTc2TDE2MCw0MEg5Nkw4MCw2NEg0OEExNiwxNiwwLDAsMCwzMiw4MFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjgwQTE2LDE2LDAsMCwwLDIwOCw2NFpNMTI4LDE2OGEzNiwzNiwwLDEsMSwzNi0zNkEzNiwzNiwwLDAsMSwxMjgsMTY4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw1NkgxODAuMjhMMTY2LjY1LDM1LjU2QTgsOCwwLDAsMCwxNjAsMzJIOTZhOCw4LDAsMCwwLTYuNjUsMy41Nkw3NS43MSw1Nkg0OEEyNCwyNCwwLDAsMCwyNCw4MFYxOTJhMjQsMjQsMCwwLDAsMjQsMjRIMjA4YTI0LDI0LDAsMCwwLDI0LTI0VjgwQTI0LDI0LDAsMCwwLDIwOCw1NlptOCwxMzZhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04VjgwYTgsOCwwLDAsMSw4LThIODBhOCw4LDAsMCwwLDYuNjYtMy41NkwxMDAuMjgsNDhoNTUuNDNsMTMuNjMsMjAuNDRBOCw4LDAsMCwwLDE3Niw3MmgzMmE4LDgsMCwwLDEsOCw4Wk0xMjgsODhhNDQsNDQsMCwxLDAsNDQsNDRBNDQuMDUsNDQuMDUsMCwwLDAsMTI4LDg4Wm0wLDcyYTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDEyOCwxNjBaIi8+PC9zdmc+)
 */
export function PhCameraDuotoneIcon(props: PhCameraDuotoneIconProps) {
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
      <path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2"/><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"/>
    </svg>
  );
}
