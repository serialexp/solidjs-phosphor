import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUploadDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTM2djY0YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFYxMzZhOCw4LDAsMCwxLDgtOEgyMjRBOCw4LDAsMCwxLDIzMiwxMzZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDEzNnY2NGExNiwxNiwwLDAsMS0xNiwxNkgzMmExNiwxNiwwLDAsMS0xNi0xNlYxMzZhMTYsMTYsMCwwLDEsMTYtMTZIODBhOCw4LDAsMCwxLDAsMTZIMzJ2NjRIMjI0VjEzNkgxNzZhOCw4LDAsMCwxLDAtMTZoNDhBMTYsMTYsMCwwLDEsMjQwLDEzNlpNODUuNjYsNzcuNjYsMTIwLDQzLjMxVjEyOGE4LDgsMCwwLDAsMTYsMFY0My4zMWwzNC4zNCwzNC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJsLTQ4LTQ4YTgsOCwwLDAsMC0xMS4zMiwwbC00OCw0OEE4LDgsMCwwLDAsODUuNjYsNzcuNjZaTTIwMCwxNjhhMTIsMTIsMCwxLDAtMTIsMTJBMTIsMTIsMCwwLDAsMjAwLDE2OFoiLz48L3N2Zz4=)
 */
export function PhUploadDuotoneIcon(props: PhUploadDuotoneIconProps) {
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
      <path d="M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z" opacity="0.2"/><path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"/>
    </svg>
  );
}
