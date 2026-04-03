import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextIndentThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTQsNCwwLDAsMS00LDRIMTEyYTQsNCwwLDAsMSwwLThIMjE2QTQsNCwwLDAsMSwyMjAsMTI4Wk0xMTIsNjhIMjE2YTQsNCwwLDAsMCwwLThIMTEyYTQsNCwwLDAsMCwwLDhaTTIxNiwxODhINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNMzcuMTcsMTM4LjgzYTQsNCwwLDAsMCw1LjY2LDBsNDAtNDBhNCw0LDAsMCwwLDAtNS42NmwtNDAtNDBhNCw0LDAsMCwwLTUuNjYsNS42Nkw3NC4zNCw5NiwzNy4xNywxMzMuMTdBNCw0LDAsMCwwLDM3LjE3LDEzOC44M1oiLz48L3N2Zz4=)
 */
export function PhTextIndentThinIcon(props: PhTextIndentThinIconProps) {
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
      <path d="M220,128a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM112,68H216a4,4,0,0,0,0-8H112a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM37.17,138.83a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66l-40-40a4,4,0,0,0-5.66,5.66L74.34,96,37.17,133.17A4,4,0,0,0,37.17,138.83Z"/>
    </svg>
  );
}
