import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveSawtoothLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMTQsMTMzLjExbC0xMDQsNjRBNiw2LDAsMCwxLDEyMiwxOTJWNzQuNzRMMjcuMTUsMTMzLjExYTYsNiwwLDEsMS02LjI5LTEwLjIybDEwNC02NEE2LDYsMCwwLDEsMTM0LDY0VjE4MS4yNmw5NC44NS01OC4zN2E2LDYsMCwxLDEsNi4yOSwxMC4yMloiLz48L3N2Zz4=)
 */
export function PhWaveSawtoothLightIcon(props: PhWaveSawtoothLightIconProps) {
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
      <path d="M235.14,133.11l-104,64A6,6,0,0,1,122,192V74.74L27.15,133.11a6,6,0,1,1-6.29-10.22l104-64A6,6,0,0,1,134,64V181.26l94.85-58.37a6,6,0,1,1,6.29,10.22Z"/>
    </svg>
  );
}
