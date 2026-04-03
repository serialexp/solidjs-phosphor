import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemoryIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZIMjRBMTYsMTYsMCwwLDAsOCw3MlYyMDBhOCw4LDAsMCwwLDE2LDBWMTg0SDQwdjE2YTgsOCwwLDAsMCwxNiwwVjE4NEg3MnYxNmE4LDgsMCwwLDAsMTYsMFYxODRoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTg0aDE2djE2YTgsOCwwLDAsMCwxNiwwVjE4NGgxNnYxNmE4LDgsMCwwLDAsMTYsMFYxODRoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTg0aDE2djE2YTgsOCwwLDAsMCwxNiwwVjcyQTE2LDE2LDAsMCwwLDIzMiw1NlpNMjQsNzJIMjMydjk2SDI0Wm04OCw4MGE4LDgsMCwwLDAsOC04Vjk2YTgsOCwwLDAsMC04LThINDhhOCw4LDAsMCwwLTgsOHY0OGE4LDgsMCwwLDAsOCw4Wk01NiwxMDRoNDh2MzJINTZabTg4LDQ4aDY0YTgsOCwwLDAsMCw4LThWOTZhOCw4LDAsMCwwLTgtOEgxNDRhOCw4LDAsMCwwLTgsOHY0OEE4LDgsMCwwLDAsMTQ0LDE1MlptOC00OGg0OHYzMkgxNTJaIi8+PC9zdmc+)
 */
export function PhMemoryIcon(props: PhMemoryIconProps) {
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
      <path d="M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM24,72H232v96H24Zm88,80a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8ZM56,104h48v32H56Zm88,48h64a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8v48A8,8,0,0,0,144,152Zm8-48h48v32H152Z"/>
    </svg>
  );
}
