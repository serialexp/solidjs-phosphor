import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperPlaneFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMiwyMTguMzFBMTUuODgsMTUuODgsMCwwLDEsMjI0LDIyNGExNi4yMiwxNi4yMiwwLDAsMS01LjM3LS45MmwtNzkuOTUtMjdhNCw0LDAsMCwxLTIuNzItMy43OVYxMjBhOCw4LDAsMCwwLTguNTMtOCw4LjE5LDguMTksMCwwLDAtNy40Nyw4LjI2djcyYTQsNCwwLDAsMS0yLjcyLDMuNzlsLTc5Ljk1LDI3YTE2LDE2LDAsMCwxLTE5LjI2LTIyLjkyTDExNCwzMi4xM2ExNiwxNiwwLDAsMSwyNy44OSwwTDIzNy45LDIwMC4xQTE1Ljg5LDE1Ljg5LDAsMCwxLDIzNi4yLDIxOC4zMVoiLz48L3N2Zz4=)
 */
export function PhPaperPlaneFillIcon(props: PhPaperPlaneFillIconProps) {
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
      <path d="M236.2,218.31A15.88,15.88,0,0,1,224,224a16.22,16.22,0,0,1-5.37-.92l-79.95-27a4,4,0,0,1-2.72-3.79V120a8,8,0,0,0-8.53-8,8.19,8.19,0,0,0-7.47,8.26v72a4,4,0,0,1-2.72,3.79l-79.95,27a16,16,0,0,1-19.26-22.92L114,32.13a16,16,0,0,1,27.89,0L237.9,200.1A15.89,15.89,0,0,1,236.2,218.31Z"/>
    </svg>
  );
}
