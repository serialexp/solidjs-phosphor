import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotchesIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTMzLjY2bC04MCw4MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDExLjMyWm0tMTYtOTkuMzJhOCw4LDAsMCwwLTExLjMyLDBsLTE1MiwxNTJhOCw4LDAsMCwwLDExLjMyLDExLjMybDE1Mi0xNTJBOCw4LDAsMCwwLDE5Ny42NiwzNC4zNFoiLz48L3N2Zz4=)
 */
export function PhNotchesIcon(props: PhNotchesIconProps) {
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
      <path d="M213.66,133.66l-80,80a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,11.32Zm-16-99.32a8,8,0,0,0-11.32,0l-152,152a8,8,0,0,0,11.32,11.32l152-152A8,8,0,0,0,197.66,34.34Z"/>
    </svg>
  );
}
