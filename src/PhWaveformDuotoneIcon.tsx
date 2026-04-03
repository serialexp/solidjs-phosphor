import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveformDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZ2NjRINDhWOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTYsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTg4LDI0YTgsOCwwLDAsMC04LDhWMjI0YTgsOCwwLDAsMCwxNiwwVjMyQTgsOCwwLDAsMCw4OCwyNFptNDAsMzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDE2LDBWNjRBOCw4LDAsMCwwLDEyOCw1NlptNDAsMzJhOCw4LDAsMCwwLTgsOHY2NGE4LDgsMCwwLDAsMTYsMFY5NkE4LDgsMCwwLDAsMTY4LDg4Wm00MC0xNmE4LDgsMCwwLDAtOCw4djk2YTgsOCwwLDAsMCwxNiwwVjgwQTgsOCwwLDAsMCwyMDgsNzJaIi8+PC9zdmc+)
 */
export function PhWaveformDuotoneIcon(props: PhWaveformDuotoneIconProps) {
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
      <path d="M208,96v64H48V96Z" opacity="0.2"/><path d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"/>
    </svg>
  );
}
