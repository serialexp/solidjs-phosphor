import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTiktokLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODB2NDBhOCw4LDAsMCwxLTgsOCwxMDMuMjUsMTAzLjI1LDAsMCwxLTQ4LTExLjcxVjE1NmE3Niw3NiwwLDAsMS0xNTIsMGMwLTM2LjksMjYuOTEtNjkuNTIsNjIuNi03NS44OEE4LDgsMCwwLDEsOTYsODh2NDIuNjlhOCw4LDAsMCwxLTQuNTcsNy4yM0EyMCwyMCwwLDEsMCwxMjAsMTU2VjI0YTgsOCwwLDAsMSw4LThoNDBhOCw4LDAsMCwxLDgsOCw0OC4wNSw0OC4wNSwwLDAsMCw0OCw0OEE4LDgsMCwwLDEsMjMyLDgwWiIvPjwvc3ZnPg==)
 */
export function PhTiktokLogoFillIcon(props: PhTiktokLogoFillIconProps) {
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
      <path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"/>
    </svg>
  );
}
