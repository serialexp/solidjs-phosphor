import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBusBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhINzJBMzYsMzYsMCwwLDAsMzYsNjRWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDg0YTIwLDIwLDAsMCwwLDIwLTIwVjE5Mmg0OHYxNmEyMCwyMCwwLDAsMCwyMCwyMGgyOGEyMCwyMCwwLDAsMCwyMC0yMFY2NEEzNiwzNiwwLDAsMCwxODQsMjhaTTYwLDE2OFYxMTJIMTk2djU2Wk03Miw1MkgxODRhMTIsMTIsMCwwLDEsMTIsMTJWODhINjBWNjRBMTIsMTIsMCwwLDEsNzIsNTJabTgsMTUySDYwVjE5Mkg4MFptOTYsMFYxOTJoMjB2MTJabS02OC02NGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMDgsMTQwWm03MiwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE4MCwxNDBabTc2LTYwdjI0YTEyLDEyLDAsMCwxLTI0LDBWODBhMTIsMTIsMCwwLDEsMjQsMFpNMjQsODB2MjRhMTIsMTIsMCwwLDEtMjQsMFY4MGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhBusBoldIcon(props: PhBusBoldIconProps) {
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
      <path d="M184,28H72A36,36,0,0,0,36,64V208a20,20,0,0,0,20,20H84a20,20,0,0,0,20-20V192h48v16a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V64A36,36,0,0,0,184,28ZM60,168V112H196v56ZM72,52H184a12,12,0,0,1,12,12V88H60V64A12,12,0,0,1,72,52Zm8,152H60V192H80Zm96,0V192h20v12Zm-68-64a16,16,0,1,1-16-16A16,16,0,0,1,108,140Zm72,0a16,16,0,1,1-16-16A16,16,0,0,1,180,140Zm76-60v24a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0ZM24,80v24a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
