import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRadioBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTcyYTM2LDM2LDAsMSwwLTM2LTM2QTM2LDM2LDAsMCwwLDE2MCwxNzJabTAtNDhhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTYwLDEyNFptNTYtNjRIMTEzLjc2bDgxLjY5LTI0LjVhMTIsMTIsMCwwLDAtNi45LTIzbC0xNjAsNDhBMTIsMTIsMCwwLDAsMjAsNzJWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY4MEEyMCwyMCwwLDAsMCwyMTYsNjBabS00LDEyOEg0NFY4NEgyMTJaTTYwLDExNmExMiwxMiwwLDAsMSwxMi0xMkg5NmExMiwxMiwwLDAsMSwwLDI0SDcyQTEyLDEyLDAsMCwxLDYwLDExNlptMCw0MGExMiwxMiwwLDAsMSwxMi0xMkg5NmExMiwxMiwwLDAsMSwwLDI0SDcyQTEyLDEyLDAsMCwxLDYwLDE1NloiLz48L3N2Zz4=)
 */
export function PhRadioBoldIcon(props: PhRadioBoldIconProps) {
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
      <path d="M160,172a36,36,0,1,0-36-36A36,36,0,0,0,160,172Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,160,124Zm56-64H113.76l81.69-24.5a12,12,0,0,0-6.9-23l-160,48A12,12,0,0,0,20,72V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60Zm-4,128H44V84H212ZM60,116a12,12,0,0,1,12-12H96a12,12,0,0,1,0,24H72A12,12,0,0,1,60,116Zm0,40a12,12,0,0,1,12-12H96a12,12,0,0,1,0,24H72A12,12,0,0,1,60,156Z"/>
    </svg>
  );
}
