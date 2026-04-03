import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSuitcaseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNThIMTc0VjQ4YTIyLDIyLDAsMCwwLTIyLTIySDEwNEEyMiwyMiwwLDAsMCw4Miw0OFY1OEg0MEExNCwxNCwwLDAsMCwyNiw3MlYyMDBhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjcyQTE0LDE0LDAsMCwwLDIxNiw1OFpNOTQsNDhhMTAsMTAsMCwwLDEsMTAtMTBoNDhhMTAsMTAsMCwwLDEsMTAsMTBWNThIOTRabTY4LDIyVjIwMkg5NFY3MFpNMzgsMjAwVjcyYTIsMiwwLDAsMSwyLTJIODJWMjAySDQwQTIsMiwwLDAsMSwzOCwyMDBabTE4MCwwYTIsMiwwLDAsMS0yLDJIMTc0VjcwaDQyYTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 */
export function PhSuitcaseLightIcon(props: PhSuitcaseLightIconProps) {
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
      <path d="M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94Zm68,22V202H94V70ZM38,200V72a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H174V70h42a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
