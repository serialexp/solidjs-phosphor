import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTMzLjY2bC05Niw5NkE4LDgsMCwwLDEsMTI4LDIyNFYxODRINDhhMTYsMTYsMCwwLDEtMTYtMTZWODhBMTYsMTYsMCwwLDEsNDgsNzJoODBWMzJhOCw4LDAsMCwxLDEzLjY2LTUuNjZsOTYsOTZBOCw4LDAsMCwxLDIzNy42NiwxMzMuNjZaIi8+PC9zdmc+)
 */
export function PhArrowFatRightFillIcon(props: PhArrowFatRightFillIconProps) {
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
      <path d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z"/>
    </svg>
  );
}
