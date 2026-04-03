import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMegaphoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTIwYTQ4LjA1LDQ4LjA1LDAsMCwwLTQ4LTQ4SDE2MC4yYy0yLjkxLS4xNy01My42Mi0zLjc0LTEwMS45MS00NC4yNEExNiwxNiwwLDAsMCwzMiw0MFYyMDBhMTYsMTYsMCwwLDAsMjYuMjksMTIuMjVjMzcuNzctMzEuNjgsNzctNDAuNzYsOTMuNzEtNDMuM3YzMS43MkExNiwxNiwwLDAsMCwxNTkuMTIsMjE0bDExLDcuMzNBMTYsMTYsMCwwLDAsMTk0LjUsMjEybDExLjc3LTQ0LjM2QTQ4LjA3LDQ4LjA3LDAsMCwwLDI0OCwxMjBaTTQ4LDE5OS45M1Y0MGgwYzQyLjgxLDM1LjkxLDg2LjYzLDQ1LDEwNCw0Ny4yNHY2NS40OEMxMzQuNjUsMTU1LDkwLjg0LDE2NC4wNyw0OCwxOTkuOTNabTEzMSw4LDAsLjExLTExLTcuMzNWMTY4aDIxLjZaTTIwMCwxNTJIMTY4Vjg4aDMyYTMyLDMyLDAsMSwxLDAsNjRaIi8+PC9zdmc+)
 */
export function PhMegaphoneIcon(props: PhMegaphoneIconProps) {
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
      <path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"/>
    </svg>
  );
}
