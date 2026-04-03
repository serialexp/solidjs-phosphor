import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsODBWMjI0YTEyLDEyLDAsMCwxLTI0LDBWOTJINzdsMjcuNTIsMjcuNTFhMTIsMTIsMCwwLDEtMTcsMTdsLTQ4LTQ4YTEyLDEyLDAsMCwxLDAtMTdsNDgtNDhhMTIsMTIsMCwxLDEsMTcsMTdMNzcsNjhIMTkyQTEyLDEyLDAsMCwxLDIwNCw4MFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowUpLeftBoldIcon(props: PhArrowElbowUpLeftBoldIconProps) {
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
      <path d="M204,80V224a12,12,0,0,1-24,0V92H77l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L77,68H192A12,12,0,0,1,204,80Z"/>
    </svg>
  );
}
