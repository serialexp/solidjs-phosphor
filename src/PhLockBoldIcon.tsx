import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZIMTgwVjU2QTUyLDUyLDAsMCwwLDc2LDU2Vjc2SDQ4QTIwLDIwLDAsMCwwLDI4LDk2VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEgyMDhhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMjAsMjAsMCwwLDAsMjA4LDc2Wk0xMDAsNTZhMjgsMjgsMCwwLDEsNTYsMFY3NkgxMDBaTTIwNCwyMDRINTJWMTAwSDIwNFptLTYwLTUyYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxNTJaIi8+PC9zdmc+)
 */
export function PhLockBoldIcon(props: PhLockBoldIconProps) {
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
      <path d="M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"/>
    </svg>
  );
}
