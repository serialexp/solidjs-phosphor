import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGridFourLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDJINTZBMTQsMTQsMCwwLDAsNDIsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMDAsNDJabTIsMTR2NjZIMTM0VjU0aDY2QTIsMiwwLDAsMSwyMDIsNTZaTTU2LDU0aDY2djY4SDU0VjU2QTIsMiwwLDAsMSw1Niw1NFpNNTQsMjAwVjEzNGg2OHY2OEg1NkEyLDIsMCwwLDEsNTQsMjAwWm0xNDYsMkgxMzRWMTM0aDY4djY2QTIsMiwwLDAsMSwyMDAsMjAyWiIvPjwvc3ZnPg==)
 */
export function PhGridFourLightIcon(props: PhGridFourLightIconProps) {
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
      <path d="M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,14v66H134V54h66A2,2,0,0,1,202,56ZM56,54h66v68H54V56A2,2,0,0,1,56,54ZM54,200V134h68v68H56A2,2,0,0,1,54,200Zm146,2H134V134h68v66A2,2,0,0,1,200,202Z"/>
    </svg>
  );
}
