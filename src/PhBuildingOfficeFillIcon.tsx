import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingOfficeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjA4SDIzMlY5NmE4LDgsMCwwLDAsMC0xNkgxODRWNDhhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZWMjA4SDI0YTgsOCwwLDAsMCwwLDE2SDI0OGE4LDgsMCwwLDAsMC0xNlpNODAsNzJIOTZhOCw4LDAsMCwxLDAsMTZIODBhOCw4LDAsMCwxLDAtMTZabS04LDQ4YTgsOCwwLDAsMSw4LThIOTZhOCw4LDAsMCwxLDAsMTZIODBBOCw4LDAsMCwxLDcyLDEyMFptNjQsODhIODhWMTYwaDQ4Wm04LTgwSDEyOGE4LDgsMCwwLDEsMC0xNmgxNmE4LDgsMCwwLDEsMCwxNlptMC00MEgxMjhhOCw4LDAsMCwxLDAtMTZoMTZhOCw4LDAsMCwxLDAsMTZabTcyLDEyMEgxODRWOTZoMzJaIi8+PC9zdmc+)
 */
export function PhBuildingOfficeFillIcon(props: PhBuildingOfficeFillIconProps) {
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
      <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM80,72H96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm64,88H88V160h48Zm8-80H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-40H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm72,120H184V96h32Z"/>
    </svg>
  );
}
