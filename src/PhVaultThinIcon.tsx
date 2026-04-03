import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVaultThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDYwdjIwYTQsNCwwLDAsMCw4LDBWMjA0SDE4OHYyMGE0LDQsMCwwLDAsOCwwVjIwNGgyMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTAsMTUySDQwYTQsNCwwLDAsMS00LTRWNTZhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNHY2OEgxOTUuODFhNDQsNDQsMCwxLDAsMCw4SDIyMHY2MEE0LDQsMCwwLDEsMjE2LDE5NlptLTUyLjctNzJhMTIsMTIsMCwxLDAsMCw4aDI0LjQ3YTM2LDM2LDAsMSwxLDAtOFoiLz48L3N2Zz4=)
 */
export function PhVaultThinIcon(props: PhVaultThinIconProps) {
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
      <path d="M216,44H40A12,12,0,0,0,28,56V192a12,12,0,0,0,12,12H60v20a4,4,0,0,0,8,0V204H188v20a4,4,0,0,0,8,0V204h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm0,152H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v68H195.81a44,44,0,1,0,0,8H220v60A4,4,0,0,1,216,196Zm-52.7-72a12,12,0,1,0,0,8h24.47a36,36,0,1,1,0-8Z"/>
    </svg>
  );
}
