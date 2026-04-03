import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMThIMTEyQTYyLjA3LDYyLjA3LDAsMCwwLDUwLDgwdjk2YTYyLjA3LDYyLjA3LDAsMCwwLDYyLDYyaDMyYTYyLjA3LDYyLjA3LDAsMCwwLDYyLTYyVjgwQTYyLjA3LDYyLjA3LDAsMCwwLDE0NCwxOFptNTAsMTU4YTUwLjA2LDUwLjA2LDAsMCwxLTUwLDUwSDExMmE1MC4wNiw1MC4wNiwwLDAsMS01MC01MFY4MGE1MC4wNiw1MC4wNiwwLDAsMSw1MC01MGgzMmE1MC4wNiw1MC4wNiwwLDAsMSw1MCw1MFpNMTM0LDY0djQ4YTYsNiwwLDAsMS0xMiwwVjY0YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhMouseSimpleLightIcon(props: PhMouseSimpleLightIconProps) {
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
      <path d="M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,158a50.06,50.06,0,0,1-50,50H112a50.06,50.06,0,0,1-50-50V80a50.06,50.06,0,0,1,50-50h32a50.06,50.06,0,0,1,50,50ZM134,64v48a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
