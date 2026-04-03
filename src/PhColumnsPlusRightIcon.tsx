import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsPlusRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwzMkg1NkExNiwxNiwwLDAsMCw0MCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIODBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsODAsMzJabTAsMTc2SDU2VjQ4SDgwWk0xNTIsMzJIMTI4YTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxNTIsMzJabTAsMTc2SDEyOFY0OGgyNFptOTYtODBhOCw4LDAsMCwxLTgsOEgyMjR2MTZhOCw4LDAsMCwxLTE2LDBWMTM2SDE5MmE4LDgsMCwwLDEsMC0xNmgxNlYxMDRhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDI0OCwxMjhaIi8+PC9zdmc+)
 */
export function PhColumnsPlusRightIcon(props: PhColumnsPlusRightIconProps) {
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
      <path d="M80,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V48A16,16,0,0,0,80,32Zm0,176H56V48H80ZM152,32H128a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,152,32Zm0,176H128V48h24Zm96-80a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V136H192a8,8,0,0,1,0-16h16V104a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,128Z"/>
    </svg>
  );
}
