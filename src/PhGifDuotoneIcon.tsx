import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGifDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQ4LDQwSDIwOEExNiwxNiwwLDAsMSwyMjQsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ0LDcyVjE4NGE4LDgsMCwwLDEtMTYsMFY3MmE4LDgsMCwwLDEsMTYsMFptODgtOEgxNzZhOCw4LDAsMCwwLTgsOFYxODRhOCw4LDAsMCwwLDE2LDBWMTM2aDQwYTgsOCwwLDAsMCwwLTE2SDE4NFY4MGg0OGE4LDgsMCwwLDAsMC0xNlpNOTYsMTIwSDcyYTgsOCwwLDAsMCwwLDE2SDg4djE2YTI0LDI0LDAsMCwxLTQ4LDBWMTA0QTI0LDI0LDAsMCwxLDY0LDgwYzExLjE5LDAsMjEuNjEsNy43NCwyNC4yNSwxOGE4LDgsMCwwLDAsMTUuNS00Qzk5LjI3LDc2LjYyLDgyLjU2LDY0LDY0LDY0YTQwLDQwLDAsMCwwLTQwLDQwdjQ4YTQwLDQwLDAsMCwwLDgwLDBWMTI4QTgsOCwwLDAsMCw5NiwxMjBaIi8+PC9zdmc+)
 */
export function PhGifDuotoneIcon(props: PhGifDuotoneIconProps) {
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
      <path d="M224,56V200a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Z" opacity="0.2"/><path d="M144,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm88-8H176a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V136h40a8,8,0,0,0,0-16H184V80h48a8,8,0,0,0,0-16ZM96,120H72a8,8,0,0,0,0,16H88v16a24,24,0,0,1-48,0V104A24,24,0,0,1,64,80c11.19,0,21.61,7.74,24.25,18a8,8,0,0,0,15.5-4C99.27,76.62,82.56,64,64,64a40,40,0,0,0-40,40v48a40,40,0,0,0,80,0V128A8,8,0,0,0,96,120Z"/>
    </svg>
  );
}
