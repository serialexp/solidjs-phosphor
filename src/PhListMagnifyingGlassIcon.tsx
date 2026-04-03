import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListMagnifyingGlassIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsNjRabTgsNzJoNzJhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZabTg4LDQ4SDQwYTgsOCwwLDAsMCwwLDE2aDg4YTgsOCwwLDAsMCwwLTE2Wm0xMDkuNjYsMTMuNjZhOCw4LDAsMCwxLTExLjMyLDBMMjA2LDE3Ny4zNkE0MCw0MCwwLDEsMSwyMTcuMzYsMTY2bDIwLjMsMjAuM0E4LDgsMCwwLDEsMjM3LjY2LDE5Ny42NlpNMTg0LDE2OGEyNCwyNCwwLDEsMC0yNC0yNEEyNCwyNCwwLDAsMCwxODQsMTY4WiIvPjwvc3ZnPg==)
 */
export function PhListMagnifyingGlassIcon(props: PhListMagnifyingGlassIconProps) {
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
      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z"/>
    </svg>
  );
}
