import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEggBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsNTcuMzRDMTcxLjA2LDI5LDE0Ny44OCwxMiwxMjgsMTJTODQuOTQsMjksNjYsNTcuMzRDNDYuOTQsODYsMzYsMTIwLjQ2LDM2LDE1MmE5Miw5MiwwLDAsMCwxODQsMEMyMjAsMTIwLjQ2LDIwOS4wNiw4NiwxOTAsNTcuMzRaTTEyOCwyMjBhNjguMDcsNjguMDcsMCwwLDEtNjgtNjhjMC02MS4xMiw0Ni4xOS0xMTYsNjgtMTE2czY4LDU0Ljg4LDY4LDExNkE2OC4wNyw2OC4wNywwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 */
export function PhEggBoldIcon(props: PhEggBoldIconProps) {
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
      <path d="M190,57.34C171.06,29,147.88,12,128,12S84.94,29,66,57.34C46.94,86,36,120.46,36,152a92,92,0,0,0,184,0C220,120.46,209.06,86,190,57.34ZM128,220a68.07,68.07,0,0,1-68-68c0-61.12,46.19-116,68-116s68,54.88,68,116A68.07,68.07,0,0,1,128,220Z"/>
    </svg>
  );
}
