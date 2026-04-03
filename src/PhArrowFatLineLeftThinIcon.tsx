import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNzZIMTI0VjMyYTQsNCwwLDAsMC02LjgzLTIuODNsLTk2LDk2YTQsNCwwLDAsMCwwLDUuNjZsOTYsOTZBNCw0LDAsMCwwLDEyNCwyMjRWMTgwaDYwYTQsNCwwLDAsMCw0LTRWODBBNCw0LDAsMCwwLDE4NCw3NlptLTQsOTZIMTIwYTQsNCwwLDAsMC00LDR2MzguMzRMMjkuNjYsMTI4LDExNiw0MS42NlY4MGE0LDQsMCwwLDAsNCw0aDYwWm00MC05MnY5NmE0LDQsMCwwLDEtOCwwVjgwYTQsNCwwLDAsMSw4LDBaIi8+PC9zdmc+)
 */
export function PhArrowFatLineLeftThinIcon(props: PhArrowFatLineLeftThinIconProps) {
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
      <path d="M184,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h60a4,4,0,0,0,4-4V80A4,4,0,0,0,184,76Zm-4,96H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h60Zm40-92v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
