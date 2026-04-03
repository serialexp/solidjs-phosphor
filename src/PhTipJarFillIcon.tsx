import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTipJarFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTIwLDMyaDE2VjQ4SDEyMFpNODgsMzJoMTZWNDhIODhabTQ4LDE1MnY4YTgsOCwwLDAsMS0xNiwwdi04aC04YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMCwwLTE2SDEyMGEyNCwyNCwwLDAsMSwwLTQ4Vjk2YTgsOCwwLDAsMSwxNiwwdjhoOGE4LDgsMCwwLDEsMCwxNkgxMjBhOCw4LDAsMCwwLDAsMTZoMTZhMjQsMjQsMCwwLDEsMCw0OFpNMTY4LDQ4SDE1MlYzMmgxNloiLz48L3N2Zz4=)
 */
export function PhTipJarFillIcon(props: PhTipJarFillIconProps) {
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
      <path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,32h16V48H120ZM88,32h16V48H88Zm48,152v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h24a8,8,0,0,0,0-16H120a24,24,0,0,1,0-48V96a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16H120a8,8,0,0,0,0,16h16a24,24,0,0,1,0,48ZM168,48H152V32h16Z"/>
    </svg>
  );
}
