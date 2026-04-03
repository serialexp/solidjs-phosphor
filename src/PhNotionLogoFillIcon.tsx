import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotionLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhhOCw4LDAsMCwxLTgsOEgyMDBWMjA4YTgsOCwwLDAsMS04LDhIMTUyYTgsOCwwLDAsMS03LTQuMTRMNzIsNzkuMTVWMjAwSDg4YTgsOCwwLDAsMSwwLDE2SDQwYTgsOCwwLDAsMSwwLTE2SDU2VjU2SDQwYTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSw3LDQuMTRsNzMsMTMyLjcxVjU2SDE2OGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMjI0LDQ4WiIvPjwvc3ZnPg==)
 */
export function PhNotionLogoFillIcon(props: PhNotionLogoFillIconProps) {
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
      <path d="M224,48a8,8,0,0,1-8,8H200V208a8,8,0,0,1-8,8H152a8,8,0,0,1-7-4.14L72,79.15V200H88a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16H56V56H40a8,8,0,0,1,0-16h64a8,8,0,0,1,7,4.14l73,132.71V56H168a8,8,0,0,1,0-16h48A8,8,0,0,1,224,48Z"/>
    </svg>
  );
}
