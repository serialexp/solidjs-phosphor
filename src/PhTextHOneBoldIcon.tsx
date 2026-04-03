import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHOneBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTEydjk2YTEyLDEyLDAsMCwxLTI0LDBWMTM0LjQyTDIwNi42NiwxMzhhMTIsMTIsMCwwLDEtMTMuMzItMjBsMjQtMTZBMTIsMTIsMCwwLDEsMjM2LDExMlpNMTQ0LDQ0YTEyLDEyLDAsMCwwLTEyLDEydjQ4SDUyVjU2YTEyLDEyLDAsMCwwLTI0LDBWMTc2YTEyLDEyLDAsMCwwLDI0LDBWMTI4aDgwdjQ4YTEyLDEyLDAsMCwwLDI0LDBWNTZBMTIsMTIsMCwwLDAsMTQ0LDQ0WiIvPjwvc3ZnPg==)
 */
export function PhTextHOneBoldIcon(props: PhTextHOneBoldIconProps) {
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
      <path d="M236,112v96a12,12,0,0,1-24,0V134.42L206.66,138a12,12,0,0,1-13.32-20l24-16A12,12,0,0,1,236,112ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z"/>
    </svg>
  );
}
