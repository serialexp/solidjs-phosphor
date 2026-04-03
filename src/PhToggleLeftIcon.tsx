import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToggleLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNTZIODBhNzIsNzIsMCwwLDAsMCwxNDRoOTZhNzIsNzIsMCwwLDAsMC0xNDRabTAsMTI4SDgwQTU2LDU2LDAsMCwxLDgwLDcyaDk2YTU2LDU2LDAsMCwxLDAsMTEyWk04MCw4OGE0MCw0MCwwLDEsMCw0MCw0MEE0MCw0MCwwLDAsMCw4MCw4OFptMCw2NGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw4MCwxNTJaIi8+PC9zdmc+)
 */
export function PhToggleLeftIcon(props: PhToggleLeftIconProps) {
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
      <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112ZM80,88a40,40,0,1,0,40,40A40,40,0,0,0,80,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,152Z"/>
    </svg>
  );
}
