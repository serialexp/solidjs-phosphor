import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFilmScriptLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDBWMjE2YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY0MEExNCwxNCwwLDAsMCwyMDAsMjZabTIsMTkwYTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0MGEyLDIsMCwwLDEsMi0ySDIwMGEyLDIsMCwwLDEsMiwyWk05NCw4MEExMCwxMCwwLDEsMSw4NCw3MCwxMCwxMCwwLDAsMSw5NCw4MFptMCw5NmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSw5NCwxNzZabTAtNDhhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsOTQsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhFilmScriptLightIcon(props: PhFilmScriptLightIconProps) {
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
      <path d="M200,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM94,80A10,10,0,1,1,84,70,10,10,0,0,1,94,80Zm0,96a10,10,0,1,1-10-10A10,10,0,0,1,94,176Zm0-48a10,10,0,1,1-10-10A10,10,0,0,1,94,128Z"/>
    </svg>
  );
}
