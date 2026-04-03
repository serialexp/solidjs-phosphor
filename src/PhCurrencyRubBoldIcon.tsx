import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyRubBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTU2YTY0LDY0LDAsMCwwLDAtMTI4SDg4QTEyLDEyLDAsMCwwLDc2LDQwdjkySDU2YTEyLDEyLDAsMCwwLDAsMjRINzZ2MTZINTZhMTIsMTIsMCwwLDAsMCwyNEg3NnYyMGExMiwxMiwwLDAsMCwyNCwwVjE5Nmg0NGExMiwxMiwwLDAsMCwwLTI0SDEwMFYxNTZaTTEwMCw1Mmg0OGE0MCw0MCwwLDAsMSwwLDgwSDEwMFoiLz48L3N2Zz4=)
 */
export function PhCurrencyRubBoldIcon(props: PhCurrencyRubBoldIconProps) {
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
      <path d="M148,156a64,64,0,0,0,0-128H88A12,12,0,0,0,76,40v92H56a12,12,0,0,0,0,24H76v16H56a12,12,0,0,0,0,24H76v20a12,12,0,0,0,24,0V196h44a12,12,0,0,0,0-24H100V156ZM100,52h48a40,40,0,0,1,0,80H100Z"/>
    </svg>
  );
}
