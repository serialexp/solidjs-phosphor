import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLessThanOrEqualThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NCwxMDRhNCw0LDAsMCwxLDIuNjItMy43NWwxNTItNTZhNCw0LDAsMSwxLDIuNzYsNy41TDU5LjU3LDEwNGwxNDEuODEsNTIuMjVBNCw0LDAsMCwxLDIwMCwxNjRhMy45MSwzLjkxLDAsMCwxLTEuMzgtLjI1bC0xNTItNTZBNCw0LDAsMCwxLDQ0LDEwNFptMTU2LDkySDQ4YTQsNCwwLDAsMCwwLDhIMjAwYTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
export function PhLessThanOrEqualThinIcon(props: PhLessThanOrEqualThinIconProps) {
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
      <path d="M44,104a4,4,0,0,1,2.62-3.75l152-56a4,4,0,1,1,2.76,7.5L59.57,104l141.81,52.25A4,4,0,0,1,200,164a3.91,3.91,0,0,1-1.38-.25l-152-56A4,4,0,0,1,44,104Zm156,92H48a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
