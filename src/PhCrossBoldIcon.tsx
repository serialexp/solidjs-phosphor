import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrossBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjhIMTY0VjMyYTIwLDIwLDAsMCwwLTIwLTIwSDExMkEyMCwyMCwwLDAsMCw5MiwzMlY2OEg1NkEyMCwyMCwwLDAsMCwzNiw4OHYzMmEyMCwyMCwwLDAsMCwyMCwyMEg5MnY4NGEyMCwyMCwwLDAsMCwyMCwyMGgzMmEyMCwyMCwwLDAsMCwyMC0yMFYxNDBoMzZhMjAsMjAsMCwwLDAsMjAtMjBWODhBMjAsMjAsMCwwLDAsMjAwLDY4Wm0tNCw0OEgxNTJhMTIsMTIsMCwwLDAtMTIsMTJ2OTJIMTE2VjEyOGExMiwxMiwwLDAsMC0xMi0xMkg2MFY5Mmg0NGExMiwxMiwwLDAsMCwxMi0xMlYzNmgyNFY4MGExMiwxMiwwLDAsMCwxMiwxMmg0NFoiLz48L3N2Zz4=)
 */
export function PhCrossBoldIcon(props: PhCrossBoldIconProps) {
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
      <path d="M200,68H164V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V68H56A20,20,0,0,0,36,88v32a20,20,0,0,0,20,20H92v84a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V140h36a20,20,0,0,0,20-20V88A20,20,0,0,0,200,68Zm-4,48H152a12,12,0,0,0-12,12v92H116V128a12,12,0,0,0-12-12H60V92h44a12,12,0,0,0,12-12V36h24V80a12,12,0,0,0,12,12h44Z"/>
    </svg>
  );
}
