import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareHalfBottomThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDRINTZBMTIsMTIsMCwwLDAsNDQsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMDAsNDRaTTU2LDUySDIwMGE0LDQsMCwwLDEsNCw0djY4SDUyVjU2QTQsNCwwLDAsMSw1Niw1MlptNTIsODB2NzJIODRWMTMyWm04LDBoMjR2NzJIMTE2Wm0zMiwwaDI0djcySDE0OFpNNTIsMjAwVjEzMkg3NnY3Mkg1NkE0LDQsMCwwLDEsNTIsMjAwWm0xNDgsNEgxODBWMTMyaDI0djY4QTQsNCwwLDAsMSwyMDAsMjA0WiIvPjwvc3ZnPg==)
 */
export function PhSquareHalfBottomThinIcon(props: PhSquareHalfBottomThinIconProps) {
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
      <path d="M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM56,52H200a4,4,0,0,1,4,4v68H52V56A4,4,0,0,1,56,52Zm52,80v72H84V132Zm8,0h24v72H116Zm32,0h24v72H148ZM52,200V132H76v72H56A4,4,0,0,1,52,200Zm148,4H180V132h24v68A4,4,0,0,1,200,204Z"/>
    </svg>
  );
}
