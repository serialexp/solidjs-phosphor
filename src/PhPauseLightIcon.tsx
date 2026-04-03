import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzRIMTYwYTE0LDE0LDAsMCwwLTE0LDE0VjIwOGExNCwxNCwwLDAsMCwxNCwxNGg0MGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDAsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJIMTYwYTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMmg0MGEyLDIsMCwwLDEsMiwyWk05NiwzNEg1NkExNCwxNCwwLDAsMCw0Miw0OFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIOTZhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsOTYsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDk2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 */
export function PhPauseLightIcon(props: PhPauseLightIconProps) {
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
      <path d="M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
