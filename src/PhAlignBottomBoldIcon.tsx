import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjE2YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLDAtMjRIMjE2QTEyLDEyLDAsMCwxLDIyOCwyMTZabS05Mi00OFY4MGEyMCwyMCwwLDAsMSwyMC0yMGgzNmEyMCwyMCwwLDAsMSwyMCwyMHY4OGEyMCwyMCwwLDAsMS0yMCwyMEgxNTZBMjAsMjAsMCwwLDEsMTM2LDE2OFptMjQtNGgyOFY4NEgxNjBaTTQ0LDE2OFY0MEEyMCwyMCwwLDAsMSw2NCwyMGgzNmEyMCwyMCwwLDAsMSwyMCwyMFYxNjhhMjAsMjAsMCwwLDEtMjAsMjBINjRBMjAsMjAsMCwwLDEsNDQsMTY4Wm0yNC00SDk2VjQ0SDY4WiIvPjwvc3ZnPg==)
 */
export function PhAlignBottomBoldIcon(props: PhAlignBottomBoldIconProps) {
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
      <path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm-92-48V80a20,20,0,0,1,20-20h36a20,20,0,0,1,20,20v88a20,20,0,0,1-20,20H156A20,20,0,0,1,136,168Zm24-4h28V84H160ZM44,168V40A20,20,0,0,1,64,20h36a20,20,0,0,1,20,20V168a20,20,0,0,1-20,20H64A20,20,0,0,1,44,168Zm24-4H96V44H68Z"/>
    </svg>
  );
}
