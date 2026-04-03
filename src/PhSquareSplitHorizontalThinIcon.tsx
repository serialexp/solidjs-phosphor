import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareSplitHorizontalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDRINTZBMTIsMTIsMCwwLDAsNDQsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMDAsNDRaTTUyLDIwMFY1NmE0LDQsMCwwLDEsNC00aDY4VjIwNEg1NkE0LDQsMCwwLDEsNTIsMjAwWm0xNTIsMGE0LDQsMCwwLDEtNCw0SDEzMlY1Mmg2OGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhSquareSplitHorizontalThinIcon(props: PhSquareSplitHorizontalThinIconProps) {
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
      <path d="M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM52,200V56a4,4,0,0,1,4-4h68V204H56A4,4,0,0,1,52,200Zm152,0a4,4,0,0,1-4,4H132V52h68a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
