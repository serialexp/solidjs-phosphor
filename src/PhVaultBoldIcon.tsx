import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVaultBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDUydjEyYTEyLDEyLDAsMCwwLDI0LDBWMjEySDE4MHYxMmExMiwxMiwwLDAsMCwyNCwwVjIxMmgxMmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZaTTQ0LDE4OFY2MEgyMTJ2NTJIMTkwLjMyYTQ0LDQ0LDAsMSwwLDAsMjRIMjEydjUyWm0xMjQtNjRhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMTY4LDEyNFoiLz48L3N2Zz4=)
 */
export function PhVaultBoldIcon(props: PhVaultBoldIconProps) {
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
      <path d="M216,36H40A20,20,0,0,0,20,56V192a20,20,0,0,0,20,20H52v12a12,12,0,0,0,24,0V212H180v12a12,12,0,0,0,24,0V212h12a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,188V60H212v52H190.32a44,44,0,1,0,0,24H212v52Zm124-64a20,20,0,1,1-20-20A20,20,0,0,1,168,124Z"/>
    </svg>
  );
}
