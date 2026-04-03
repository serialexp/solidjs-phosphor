import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalculatorBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY0MEEyMCwyMCwwLDAsMCwyMDAsMjBabS00LDE5Mkg2MFY0NEgxOTZaTTgwLDc2QTEyLDEyLDAsMCwxLDkyLDY0aDcyYTEyLDEyLDAsMCwxLDAsMjRIOTJBMTIsMTIsMCwwLDEsODAsNzZabTQwLDUyYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEyMCwxMjhabTQ4LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTY4LDEyOFptLTQ4LDQ4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEyMCwxNzZabTQ4LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTY4LDE3NloiLz48L3N2Zz4=)
 */
export function PhCalculatorBoldIcon(props: PhCalculatorBoldIconProps) {
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
      <path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM80,76A12,12,0,0,1,92,64h72a12,12,0,0,1,0,24H92A12,12,0,0,1,80,76Zm40,52a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,128Zm-48,48a16,16,0,1,1-16-16A16,16,0,0,1,120,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,176Z"/>
    </svg>
  );
}
