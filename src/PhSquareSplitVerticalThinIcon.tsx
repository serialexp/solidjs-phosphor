import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareSplitVerticalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDRINTZBMTIsMTIsMCwwLDAsNDQsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMDAsNDRaTTU2LDUySDIwMGE0LDQsMCwwLDEsNCw0djY4SDUyVjU2QTQsNCwwLDAsMSw1Niw1MlpNMjAwLDIwNEg1NmE0LDQsMCwwLDEtNC00VjEzMkgyMDR2NjhBNCw0LDAsMCwxLDIwMCwyMDRaIi8+PC9zdmc+)
 */
export function PhSquareSplitVerticalThinIcon(props: PhSquareSplitVerticalThinIconProps) {
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
      <path d="M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM56,52H200a4,4,0,0,1,4,4v68H52V56A4,4,0,0,1,56,52ZM200,204H56a4,4,0,0,1-4-4V132H204v68A4,4,0,0,1,200,204Z"/>
    </svg>
  );
}
