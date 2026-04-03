import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTicketThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTAwYTQsNCwwLDAsMCw0LTRWNjRhMTIsMTIsMCwwLDAtMTItMTJIMzJBMTIsMTIsMCwwLDAsMjAsNjRWOTZhNCw0LDAsMCwwLDQsNCwyOCwyOCwwLDAsMSwwLDU2LDQsNCwwLDAsMC00LDR2MzJhMTIsMTIsMCwwLDAsMTIsMTJIMjI0YTEyLDEyLDAsMCwwLDEyLTEyVjE2MGE0LDQsMCwwLDAtNC00LDI4LDI4LDAsMCwxLDAtNTZaTTI4LDE5MlYxNjMuNzhhMzYsMzYsMCwwLDAsMC03MS41NlY2NGE0LDQsMCwwLDEsNC00SDkyVjE5NkgzMkE0LDQsMCwwLDEsMjgsMTkyWm0xNjgtNjRhMzYuMDYsMzYuMDYsMCwwLDAsMzIsMzUuNzhWMTkyYTQsNCwwLDAsMS00LDRIMTAwVjYwSDIyNGE0LDQsMCwwLDEsNCw0VjkyLjIyQTM2LjA2LDM2LjA2LDAsMCwwLDE5NiwxMjhaIi8+PC9zdmc+)
 */
export function PhTicketThinIcon(props: PhTicketThinIconProps) {
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
      <path d="M232,100a4,4,0,0,0,4-4V64a12,12,0,0,0-12-12H32A12,12,0,0,0,20,64V96a4,4,0,0,0,4,4,28,28,0,0,1,0,56,4,4,0,0,0-4,4v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160a4,4,0,0,0-4-4,28,28,0,0,1,0-56ZM28,192V163.78a36,36,0,0,0,0-71.56V64a4,4,0,0,1,4-4H92V196H32A4,4,0,0,1,28,192Zm168-64a36.06,36.06,0,0,0,32,35.78V192a4,4,0,0,1-4,4H100V60H224a4,4,0,0,1,4,4V92.22A36.06,36.06,0,0,0,196,128Z"/>
    </svg>
  );
}
