import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPrescriptionBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODksMTg4bDE5LjUyLTE5LjUxYTEyLDEyLDAsMCwwLTE3LTE3TDE3MiwxNzEsMTM4LjkzLDEzOEE1Niw1NiwwLDAsMCwxMjQsMjhINzJBMTIsMTIsMCwwLDAsNjAsNDBWMTkyYTEyLDEyLDAsMCwwLDI0LDBWMTQwaDIzbDQ4LDQ4LTE5LjUyLDE5LjUxYTEyLDEyLDAsMCwwLDE3LDE3TDE3MiwyMDVsMTkuNTEsMTkuNTJhMTIsMTIsMCwwLDAsMTctMTdaTTg0LDUyaDQwYTMyLDMyLDAsMCwxLDAsNjRIODRaIi8+PC9zdmc+)
 */
export function PhPrescriptionBoldIcon(props: PhPrescriptionBoldIconProps) {
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
      <path d="M189,188l19.52-19.51a12,12,0,0,0-17-17L172,171,138.93,138A56,56,0,0,0,124,28H72A12,12,0,0,0,60,40V192a12,12,0,0,0,24,0V140h23l48,48-19.52,19.51a12,12,0,0,0,17,17L172,205l19.51,19.52a12,12,0,0,0,17-17ZM84,52h40a32,32,0,0,1,0,64H84Z"/>
    </svg>
  );
}
