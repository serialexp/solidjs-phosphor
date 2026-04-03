import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCropThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTkyYTQsNCwwLDAsMS00LDRIMTk2djM2YTQsNCwwLDAsMS04LDBWMTk2SDY0YTQsNCwwLDAsMS00LTRWNjhIMjRhNCw0LDAsMCwxLDAtOEg2MFYyNGE0LDQsMCwwLDEsOCwwVjE4OEgyMzJBNCw0LDAsMCwxLDIzNiwxOTJaTTk2LDY4aDkydjkyYTQsNCwwLDAsMCw4LDBWNjRhNCw0LDAsMCwwLTQtNEg5NmE0LDQsMCwwLDAsMCw4WiIvPjwvc3ZnPg==)
 */
export function PhCropThinIcon(props: PhCropThinIconProps) {
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
      <path d="M236,192a4,4,0,0,1-4,4H196v36a4,4,0,0,1-8,0V196H64a4,4,0,0,1-4-4V68H24a4,4,0,0,1,0-8H60V24a4,4,0,0,1,8,0V188H232A4,4,0,0,1,236,192ZM96,68h92v92a4,4,0,0,0,8,0V64a4,4,0,0,0-4-4H96a4,4,0,0,0,0,8Z"/>
    </svg>
  );
}
