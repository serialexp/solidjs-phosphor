import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRobotBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxMDRhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsNzIsMTA0Wm05NiwxNmExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCwxNjgsMTIwWm02OC00MFYxOTJhMzYsMzYsMCwwLDEtMzYsMzZINTZhMzYsMzYsMCwwLDEtMzYtMzZWODBBMzYsMzYsMCwwLDEsNTYsNDRoNjBWMTZhMTIsMTIsMCwwLDEsMjQsMFY0NGg2MEEzNiwzNiwwLDAsMSwyMzYsODBabS0yNCwwYTEyLDEyLDAsMCwwLTEyLTEySDU2QTEyLDEyLDAsMCwwLDQ0LDgwVjE5MmExMiwxMiwwLDAsMCwxMiwxMkgyMDBhMTIsMTIsMCwwLDAsMTItMTJabS0xMiw4MmEzMCwzMCwwLDAsMS0zMCwzMEg4NmEzMCwzMCwwLDAsMSwwLTYwaDg0QTMwLDMwLDAsMCwxLDIwMCwxNjJabS04MC02djEyaDE2VjE1NlpNODYsMTY4SDk2VjE1Nkg4NmE2LDYsMCwwLDAsMCwxMlptOTAtNmE2LDYsMCwwLDAtNi02SDE2MHYxMmgxMEE2LDYsMCwwLDAsMTc2LDE2MloiLz48L3N2Zz4=)
 */
export function PhRobotBoldIcon(props: PhRobotBoldIconProps) {
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
      <path d="M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"/>
    </svg>
  );
}
