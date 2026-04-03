import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareHalfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDJINTZBMTQsMTQsMCwwLDAsNDIsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMDAsNDJabS02Niw3Nmg2OHYyMEgxMzRabTAtMTJWODZoNjh2MjBabTAsNDRoNjh2MjBIMTM0Wm02OC05NFY3NEgxMzRWNTRoNjZBMiwyLDAsMCwxLDIwMiw1NlpNNTQsMjAwVjU2YTIsMiwwLDAsMSwyLTJoNjZWMjAySDU2QTIsMiwwLDAsMSw1NCwyMDBabTE0NiwySDEzNFYxODJoNjh2MThBMiwyLDAsMCwxLDIwMCwyMDJaIi8+PC9zdmc+)
 */
export function PhSquareHalfLightIcon(props: PhSquareHalfLightIconProps) {
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
      <path d="M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm-66,76h68v20H134Zm0-12V86h68v20Zm0,44h68v20H134Zm68-94V74H134V54h66A2,2,0,0,1,202,56ZM54,200V56a2,2,0,0,1,2-2h66V202H56A2,2,0,0,1,54,200Zm146,2H134V182h68v18A2,2,0,0,1,200,202Z"/>
    </svg>
  );
}
