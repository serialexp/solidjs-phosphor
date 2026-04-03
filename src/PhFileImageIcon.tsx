import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileImageIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTAuNjYsMTQ3LjU2YTgsOCwwLDAsMC0xMy4zMiwwTDc2LjQ5LDE3OC44NWwtOS43Ni0xNS4xOGE4LDgsMCwwLDAtMTMuNDYsMGwtMzYsNTZBOCw4LDAsMCwwLDI0LDIzMkgxNTJhOCw4LDAsMCwwLDYuNjYtMTIuNDRaTTM4LjY1LDIxNiw2MCwxODIuNzlsOS42MywxNWE4LDgsMCwwLDAsMTMuMzkuMTFsMjEtMzEuNDdMMTM3LjA1LDIxNlptMTc1LTEzMy42Ni01Ni01NkE4LDgsMCwwLDAsMTUyLDI0SDU2QTE2LDE2LDAsMCwwLDQwLDQwdjg4YTgsOCwwLDAsMCwxNiwwVjQwaDg4Vjg4YTgsOCwwLDAsMCw4LDhoNDhWMjE2aC04YTgsOCwwLDAsMCwwLDE2aDhhMTYsMTYsMCwwLDAsMTYtMTZWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBaIi8+PC9zdmc+)
 */
export function PhFileImageIcon(props: PhFileImageIconProps) {
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
      <path d="M110.66,147.56a8,8,0,0,0-13.32,0L76.49,178.85l-9.76-15.18a8,8,0,0,0-13.46,0l-36,56A8,8,0,0,0,24,232H152a8,8,0,0,0,6.66-12.44ZM38.65,216,60,182.79l9.63,15a8,8,0,0,0,13.39.11l21-31.47L137.05,216Zm175-133.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>
    </svg>
  );
}
