import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCourtBasketballLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDIyNGExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMjQsNTBabTIsMTEySDIxNmEzNCwzNCwwLDAsMSwwLTY4aDEwWk0zMCw5NEg0MGEzNCwzNCwwLDAsMSwwLDY4SDMwWm0wLDk4VjE3NEg0MGE0Niw0NiwwLDAsMCwwLTkySDMwVjY0YTIsMiwwLDAsMSwyLTJoOTBWMTk0SDMyQTIsMiwwLDAsMSwzMCwxOTJabTE5NCwySDEzNFY2Mmg5MGEyLDIsMCwwLDEsMiwyVjgySDIxNmE0Niw0NiwwLDAsMCwwLDkyaDEwdjE4QTIsMiwwLDAsMSwyMjQsMTk0WiIvPjwvc3ZnPg==)
 */
export function PhCourtBasketballLightIcon(props: PhCourtBasketballLightIconProps) {
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
      <path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,112H216a34,34,0,0,1,0-68h10ZM30,94H40a34,34,0,0,1,0,68H30Zm0,98V174H40a46,46,0,0,0,0-92H30V64a2,2,0,0,1,2-2h90V194H32A2,2,0,0,1,30,192Zm194,2H134V62h90a2,2,0,0,1,2,2V82H216a46,46,0,0,0,0,92h10v18A2,2,0,0,1,224,194Z"/>
    </svg>
  );
}
