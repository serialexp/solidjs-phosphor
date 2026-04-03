import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBarricadeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjZIMzJBMTQsMTQsMCwwLDAsMTgsODB2NzJhMTQsMTQsMCwwLDAsMTQsMTRINTh2MzRhNiw2LDAsMCwwLDEyLDBWMTY2SDE4NnYzNGE2LDYsMCwwLDAsMTIsMFYxNjZoMjZhMTQsMTQsMCwwLDAsMTQtMTRWODBBMTQsMTQsMCwwLDAsMjI0LDY2Wm0yLDE0djUzLjUyTDE3MC40OCw3OEgyMjRBMiwyLDAsMCwxLDIyNiw4MFpNMzIsNzhIODEuNTJsNzYsNzZoLTU1TDMwLDgxLjUyVjgwQTIsMiwwLDAsMSwzMiw3OFptLTIsNzRWOTguNDhMODUuNTIsMTU0SDMyQTIsMiwwLDAsMSwzMCwxNTJabTE5NCwySDE3NC40OGwtNzYtNzZoNTVMMjI2LDE1MC40OFYxNTJBMiwyLDAsMCwxLDIyNCwxNTRaIi8+PC9zdmc+)
 */
export function PhBarricadeLightIcon(props: PhBarricadeLightIconProps) {
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
      <path d="M224,66H32A14,14,0,0,0,18,80v72a14,14,0,0,0,14,14H58v34a6,6,0,0,0,12,0V166H186v34a6,6,0,0,0,12,0V166h26a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,14v53.52L170.48,78H224A2,2,0,0,1,226,80ZM32,78H81.52l76,76h-55L30,81.52V80A2,2,0,0,1,32,78Zm-2,74V98.48L85.52,154H32A2,2,0,0,1,30,152Zm194,2H174.48l-76-76h55L226,150.48V152A2,2,0,0,1,224,154Z"/>
    </svg>
  );
}
