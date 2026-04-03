import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircleNotchLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTI4YTEwMiwxMDIsMCwwLDEtMjA0LDBjMC00MC4xOCwyMy4zNS03Ni44Niw1OS41LTkzLjQ1YTYsNiwwLDAsMSw1LDEwLjlDNTguNjEsNjAuMDksMzgsOTIuNDksMzgsMTI4YTkwLDkwLDAsMCwwLDE4MCwwYzAtMzUuNTEtMjAuNjEtNjcuOTEtNTIuNS04Mi41NWE2LDYsMCwwLDEsNS0xMC45QzIwNi42NSw1MS4xNCwyMzAsODcuODIsMjMwLDEyOFoiLz48L3N2Zz4=)
 */
export function PhCircleNotchLightIcon(props: PhCircleNotchLightIconProps) {
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
      <path d="M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z"/>
    </svg>
  );
}
