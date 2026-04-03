import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEqualizerDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWMTkySDI0VjgwQTE2LDE2LDAsMCwxLDQwLDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTgwLDk2YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLDAtMTZINzJBOCw4LDAsMCwxLDgwLDk2Wm0tOCwyNEgyNGE4LDgsMCwwLDAsMCwxNkg3MmE4LDgsMCwwLDAsMC0xNlptMCwzMkgyNGE4LDgsMCwwLDAsMCwxNkg3MmE4LDgsMCwwLDAsMC0xNlptMCwzMkgyNGE4LDgsMCwwLDAsMCwxNkg3MmE4LDgsMCwwLDAsMC0xNlptODAtNjRIMTA0YTgsOCwwLDAsMCwwLDE2aDQ4YTgsOCwwLDAsMCwwLTE2Wm0wLDMySDEwNGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsMC0xNlptMCwzMkgxMDRhOCw4LDAsMCwwLDAsMTZoNDhhOCw4LDAsMCwwLDAtMTZabTgwLTk2SDE4NGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsMC0xNlpNMTg0LDcyaDQ4YTgsOCwwLDAsMCwwLTE2SDE4NGE4LDgsMCwwLDAsMCwxNlptNDgsNDhIMTg0YTgsOCwwLDAsMCwwLDE2aDQ4YTgsOCwwLDAsMCwwLTE2Wm0wLDMySDE4NGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsMC0xNlptMCwzMkgxODRhOCw4LDAsMCwwLDAsMTZoNDhhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhEqualizerDuotoneIcon(props: PhEqualizerDuotoneIconProps) {
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
      <path d="M232,64V192H24V80A16,16,0,0,1,40,64Z" opacity="0.2"/><path d="M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
