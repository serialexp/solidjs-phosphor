import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShowerThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MCwyMzZhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsNjAsMjM2Wm0yNC00MGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCw4NCwxOTZabS02NCwwYTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDIwLDE5NlptMzItMzJhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsNTIsMTY0Wk0yNTIsNDBhNCw0LDAsMCwxLTQsNEgyMTcuNjZMMTg3LjczLDczLjkzLDE2NS44NiwyMDJhMTIsMTIsMCwwLDEtOC4xNyw5LjQ0QTEyLjA5LDEyLjA5LDAsMCwxLDE1NCwyMTJhMTIsMTIsMCwwLDEtOC40Ni0zLjUybC05OC05OEExMiwxMiwwLDAsMSw1NCw5MC4xNGwxMjgtMjEuODcsMzEuMS0zMS4xQTQsNCwwLDAsMSwyMTYsMzZoMzJBNCw0LDAsMCwxLDI1Miw0MFpNMTc5LjExLDc2Ljg5LDU1LjM3LDk4YTQsNCwwLDAsMC0yLjE5LDYuNzhsOTgsOThhNCw0LDAsMCwwLDYuNzgtMi4xN1oiLz48L3N2Zz4=)
 */
export function PhShowerThinIcon(props: PhShowerThinIconProps) {
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
      <path d="M60,236a8,8,0,1,1-8-8A8,8,0,0,1,60,236Zm24-40a8,8,0,1,0,8,8A8,8,0,0,0,84,196Zm-64,0a8,8,0,1,0,8,8A8,8,0,0,0,20,196Zm32-32a8,8,0,1,0,8,8A8,8,0,0,0,52,164ZM252,40a4,4,0,0,1-4,4H217.66L187.73,73.93,165.86,202a12,12,0,0,1-8.17,9.44A12.09,12.09,0,0,1,154,212a12,12,0,0,1-8.46-3.52l-98-98A12,12,0,0,1,54,90.14l128-21.87,31.1-31.1A4,4,0,0,1,216,36h32A4,4,0,0,1,252,40ZM179.11,76.89,55.37,98a4,4,0,0,0-2.19,6.78l98,98a4,4,0,0,0,6.78-2.17Z"/>
    </svg>
  );
}
