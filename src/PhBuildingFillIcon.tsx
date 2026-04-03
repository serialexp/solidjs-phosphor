import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjI0SDIwOFYzMmg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2aDhWMjI0SDI0YTgsOCwwLDAsMCwwLDE2SDIzMmE4LDgsMCwwLDAsMC0xNlpNODgsNTZoMjRhOCw4LDAsMCwxLDAsMTZIODhhOCw4LDAsMCwxLDAtMTZabTAsNDBoMjRhOCw4LDAsMCwxLDAsMTZIODhhOCw4LDAsMCwxLDAtMTZabS04LDQ4YTgsOCwwLDAsMSw4LThoMjRhOCw4LDAsMCwxLDAsMTZIODhBOCw4LDAsMCwxLDgwLDE0NFptNzIsODBIMTA0VjE4NGg0OFptMTYtNzJIMTQ0YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMSwwLDE2Wm0wLTQwSDE0NGE4LDgsMCwwLDEsMC0xNmgyNGE4LDgsMCwwLDEsMCwxNlptMC00MEgxNDRhOCw4LDAsMCwxLDAtMTZoMjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhBuildingFillIcon(props: PhBuildingFillIconProps) {
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
      <path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM88,56h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm0,40h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H88A8,8,0,0,1,80,144Zm72,80H104V184h48Zm16-72H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
