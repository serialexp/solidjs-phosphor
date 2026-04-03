import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderMaleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzRIMTY4YTYsNiwwLDAsMCwwLDEyaDMzLjUyTDE1NC43Miw5Mi43OWE3OCw3OCwwLDEsMCw0LjQyLDExNC40aDBhNzguMTEsNzguMTEsMCwwLDAsNC4wNy0xMDUuOTFMMjEwLDU0LjQ5Vjg4YTYsNiwwLDAsMCwxMiwwVjQwQTYsNiwwLDAsMCwyMTYsMzRaTTE1MC42NiwxOTguN2E2Niw2NiwwLDEsMSwwLTkzLjM2QTY2LjEsNjYuMSwwLDAsMSwxNTAuNjYsMTk4LjdaIi8+PC9zdmc+)
 */
export function PhGenderMaleLightIcon(props: PhGenderMaleLightIconProps) {
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
      <path d="M216,34H168a6,6,0,0,0,0,12h33.52L154.72,92.79a78,78,0,1,0,4.42,114.4h0a78.11,78.11,0,0,0,4.07-105.91L210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM150.66,198.7a66,66,0,1,1,0-93.36A66.1,66.1,0,0,1,150.66,198.7Z"/>
    </svg>
  );
}
