import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextUnderlineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMjI0YTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLDAtOEgxOTJBNCw0LDAsMCwxLDE5NiwyMjRabS02OC0yOGE2MC4wNyw2MC4wNywwLDAsMCw2MC02MFY1NmE0LDQsMCwwLDAtOCwwdjgwYTUyLDUyLDAsMCwxLTEwNCwwVjU2YTQsNCwwLDAsMC04LDB2ODBBNjAuMDcsNjAuMDcsMCwwLDAsMTI4LDE5NloiLz48L3N2Zz4=)
 */
export function PhTextUnderlineThinIcon(props: PhTextUnderlineThinIconProps) {
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
      <path d="M196,224a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H192A4,4,0,0,1,196,224Zm-68-28a60.07,60.07,0,0,0,60-60V56a4,4,0,0,0-8,0v80a52,52,0,0,1-104,0V56a4,4,0,0,0-8,0v80A60.07,60.07,0,0,0,128,196Z"/>
    </svg>
  );
}
