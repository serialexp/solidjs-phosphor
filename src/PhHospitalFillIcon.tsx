import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHospitalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjA4aC04VjEyOGExNiwxNiwwLDAsMC0xNi0xNkgxNjhWNDhhMTYsMTYsMCwwLDAtMTYtMTZINTZBMTYsMTYsMCwwLDAsNDAsNDhWMjA4SDMyYTgsOCwwLDAsMCwwLDE2SDI0OGE4LDgsMCwwLDAsMC0xNlptLTEyMCwwSDgwVjE2MGg0OFptMC0xMDRIMTEydjE2YTgsOCwwLDAsMS0xNiwwVjEwNEg4MGE4LDgsMCwwLDEsMC0xNkg5NlY3MmE4LDgsMCwwLDEsMTYsMFY4OGgxNmE4LDgsMCwwLDEsMCwxNlptOTYsMTA0SDE2OFYxMjhoNTZaIi8+PC9zdmc+)
 */
export function PhHospitalFillIcon(props: PhHospitalFillIconProps) {
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
      <path d="M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-120,0H80V160h48Zm0-104H112v16a8,8,0,0,1-16,0V104H80a8,8,0,0,1,0-16H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16Zm96,104H168V128h56Z"/>
    </svg>
  );
}
