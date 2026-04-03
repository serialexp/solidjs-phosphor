import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZIMTI0VjMyYTQsNCwwLDAsMC02LjgzLTIuODNsLTk2LDk2YTQsNCwwLDAsMCwwLDUuNjZsOTYsOTZBNCw0LDAsMCwwLDEyNCwyMjRWMTgwaDg0YTEyLDEyLDAsMCwwLDEyLTEyVjg4QTEyLDEyLDAsMCwwLDIwOCw3NlptNCw5MmE0LDQsMCwwLDEtNCw0SDEyMGE0LDQsMCwwLDAtNCw0djM4LjM0TDI5LjY2LDEyOCwxMTYsNDEuNjZWODBhNCw0LDAsMCwwLDQsNGg4OGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLeftThinIcon(props: PhArrowFatLeftThinIconProps) {
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
      <path d="M208,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h84a12,12,0,0,0,12-12V88A12,12,0,0,0,208,76Zm4,92a4,4,0,0,1-4,4H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h88a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
