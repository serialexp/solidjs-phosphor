import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPerspectiveFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTM2YTgsOCwwLDAsMS04LDhIMjI0djY0YTE2LDE2LDAsMCwxLTE2LDE2LDE2LjQ3LDE2LjQ3LDAsMCwxLTIuODctLjI2bC0xNjAtMjkuMDlBMTYsMTYsMCwwLDEsMzIsMTc4LjkxVjE0NEgxNmE4LDgsMCwwLDEsMC0xNkgyNDBBOCw4LDAsMCwxLDI0OCwxMzZaTTM2LDExMkgyMjBhNCw0LDAsMCwwLDQtNFY0OC40MmExNi40OCwxNi40OCwwLDAsMC00LjA3LTExLjA4LDE2LDE2LDAsMCwwLTE0Ljc5LTUuMDhsLTE2MCwyOS4wOUExNiwxNiwwLDAsMCwzMiw3Ny4wOVYxMDhBNCw0LDAsMCwwLDM2LDExMloiLz48L3N2Zz4=)
 */
export function PhPerspectiveFillIcon(props: PhPerspectiveFillIconProps) {
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
      <path d="M248,136a8,8,0,0,1-8,8H224v64a16,16,0,0,1-16,16,16.47,16.47,0,0,1-2.87-.26l-160-29.09A16,16,0,0,1,32,178.91V144H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,136ZM36,112H220a4,4,0,0,0,4-4V48.42a16.48,16.48,0,0,0-4.07-11.08,16,16,0,0,0-14.79-5.08l-160,29.09A16,16,0,0,0,32,77.09V108A4,4,0,0,0,36,112Z"/>
    </svg>
  );
}
