import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPrinterBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjcsNjhIMjA0VjQwYTEyLDEyLDAsMCwwLTEyLTEySDY0QTEyLDEyLDAsMCwwLDUyLDQwVjY4SDQxLjMzQzI1LjE2LDY4LDEyLDgwLjU2LDEyLDk2djgwYTEyLDEyLDAsMCwwLDEyLDEySDUydjI4YTEyLDEyLDAsMCwwLDEyLDEySDE5MmExMiwxMiwwLDAsMCwxMi0xMlYxODhoMjhhMTIsMTIsMCwwLDAsMTItMTJWOTZDMjQ0LDgwLjU2LDIzMC44NCw2OCwyMTQuNjcsNjhaTTc2LDUySDE4MFY2OEg3NlpNMTgwLDIwNEg3NlYxNzJIMTgwWm00MC00MEgyMDR2LTRhMTIsMTIsMCwwLDAtMTItMTJINjRhMTIsMTIsMCwwLDAtMTIsMTJ2NEgzNlY5NmMwLTIuMTcsMi40NC00LDUuMzMtNEgyMTQuNjdjMi44OSwwLDUuMzMsMS44Myw1LjMzLDRabS0xNi00NGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwyMDQsMTIwWiIvPjwvc3ZnPg==)
 */
export function PhPrinterBoldIcon(props: PhPrinterBoldIconProps) {
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
      <path d="M214.67,68H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V68H41.33C25.16,68,12,80.56,12,96v80a12,12,0,0,0,12,12H52v28a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V188h28a12,12,0,0,0,12-12V96C244,80.56,230.84,68,214.67,68ZM76,52H180V68H76ZM180,204H76V172H180Zm40-40H204v-4a12,12,0,0,0-12-12H64a12,12,0,0,0-12,12v4H36V96c0-2.17,2.44-4,5.33-4H214.67c2.89,0,5.33,1.83,5.33,4Zm-16-44a16,16,0,1,1-16-16A16,16,0,0,1,204,120Z"/>
    </svg>
  );
}
