import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHFourLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTAsNTZWMTc2YTYsNiwwLDAsMS0xMiwwVjEyMkg0NnY1NGE2LDYsMCwwLDEtMTIsMFY1NmE2LDYsMCwwLDEsMTIsMHY1NGg5MlY1NmE2LDYsMCwwLDEsMTIsMFpNMjU0LDE4NGE2LDYsMCwwLDEtNiw2SDIzOHYxOGE2LDYsMCwwLDEtMTIsMFYxOTBIMTc2YTYsNiwwLDAsMS00Ljc0LTkuNjhsNTYtNzJBNiw2LDAsMCwxLDIzOCwxMTJ2NjZoMTBBNiw2LDAsMCwxLDI1NCwxODRabS0yOC01NC41MUwxODguMjcsMTc4SDIyNloiLz48L3N2Zz4=)
 */
export function PhTextHFourLightIcon(props: PhTextHFourLightIconProps) {
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
      <path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0ZM254,184a6,6,0,0,1-6,6H238v18a6,6,0,0,1-12,0V190H176a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,238,112v66h10A6,6,0,0,1,254,184Zm-28-54.51L188.27,178H226Z"/>
    </svg>
  );
}
