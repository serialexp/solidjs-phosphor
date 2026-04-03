import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAngularLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuNTQsNjguMzFsLTk2LTQwYTQsNCwwLDAsMC0zLjA4LDBsLTk2LDQwQTQsNCwwLDAsMCwyOCw3Mi41M2wxNiwxMjBhNCw0LDAsMCwwLDIuMTcsMy4wNWw4MCw0MGE0LDQsMCwwLDAsMy41OCwwbDgwLTQwYTQsNCwwLDAsMCwyLjE3LTMuMDVsMTYtMTIwQTQsNCwwLDAsMCwyMjUuNTQsNjguMzFaTTIwNC4zMiwxODkuMzcsMTI4LDIyNy41Myw1MS42OCwxODkuMzcsMzYuMzcsNzQuNTEsMTI4LDM2LjMzbDkxLjYzLDM4LjE4Wk0xMjQuNSw4Ni4wNmwtNDAsNzJhNCw0LDAsMSwwLDcsMy44OEwxMDMuNjksMTQwaDQ4LjYybDEyLjE5LDIxLjk0YTQsNCwwLDEsMCw3LTMuODhsLTQwLTcyYTQsNCwwLDAsMC03LDBaTTE0Ny44NywxMzJIMTA4LjEzTDEyOCw5Ni4yNFoiLz48L3N2Zz4=)
 */
export function PhAngularLogoThinIcon(props: PhAngularLogoThinIconProps) {
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
      <path d="M225.54,68.31l-96-40a4,4,0,0,0-3.08,0l-96,40A4,4,0,0,0,28,72.53l16,120a4,4,0,0,0,2.17,3.05l80,40a4,4,0,0,0,3.58,0l80-40a4,4,0,0,0,2.17-3.05l16-120A4,4,0,0,0,225.54,68.31ZM204.32,189.37,128,227.53,51.68,189.37,36.37,74.51,128,36.33l91.63,38.18ZM124.5,86.06l-40,72a4,4,0,1,0,7,3.88L103.69,140h48.62l12.19,21.94a4,4,0,1,0,7-3.88l-40-72a4,4,0,0,0-7,0ZM147.87,132H108.13L128,96.24Z"/>
    </svg>
  );
}
