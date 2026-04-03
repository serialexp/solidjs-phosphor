import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZsLTgwLDgwTDQ4LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMy42NiwxNDEuNjZsLTgwLDgwYTgsOCwwLDAsMS0xMS4zMiwwbC04MC04MGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTI4LDIwNC42OWw3NC4zNC03NC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJabS0xNzEuMzItODBBOCw4LDAsMCwxLDQ4LDQ4SDIwOGE4LDgsMCwwLDEsNS42NiwxMy42NmwtODAsODBhOCw4LDAsMCwxLTExLjMyLDBabTI1LDIuMzRMMTI4LDEyNC42OSwxODguNjksNjRaIi8+PC9zdmc+)
 */
export function PhCaretDoubleDownDuotoneIcon(props: PhCaretDoubleDownDuotoneIconProps) {
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
      <path d="M208,56l-80,80L48,56Z" opacity="0.2"/><path d="M213.66,141.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,204.69l74.34-74.35a8,8,0,0,1,11.32,11.32Zm-171.32-80A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0Zm25,2.34L128,124.69,188.69,64Z"/>
    </svg>
  );
}
