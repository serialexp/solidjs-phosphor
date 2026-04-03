import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTE5LjUxbC05Ni05NkExMiwxMiwwLDAsMCwxMjQsMzJWNjhIODBBMTIsMTIsMCwwLDAsNjgsODB2OTZhMTIsMTIsMCwwLDAsMTIsMTJoNDR2MzZhMTIsMTIsMCwwLDAsMjAuNDksOC40OWw5Ni05NkExMiwxMiwwLDAsMCwyNDAuNDksMTE5LjUxWk0xNDgsMTk1VjE3NmExMiwxMiwwLDAsMC0xMi0xMkg5MlY5Mmg0NGExMiwxMiwwLDAsMCwxMi0xMlY2MWw2Nyw2N1pNNTIsODB2OTZhMTIsMTIsMCwwLDEtMjQsMFY4MGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLineRightBoldIcon(props: PhArrowFatLineRightBoldIconProps) {
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
      <path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H80A12,12,0,0,0,68,80v96a12,12,0,0,0,12,12h44v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H92V92h44a12,12,0,0,0,12-12V61l67,67ZM52,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
