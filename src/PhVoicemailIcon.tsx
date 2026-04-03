import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVoicemailIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzJhNTYsNTYsMCwwLDAtMzkuMTQsOTZIOTUuMTRBNTYsNTYsMCwxLDAsNTYsMTg0SDIwMGE1Niw1NiwwLDAsMCwwLTExMlpNMTYsMTI4YTQwLDQwLDAsMSwxLDQwLDQwQTQwLDQwLDAsMCwxLDE2LDEyOFptMTg0LDQwYTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDIwMCwxNjhaIi8+PC9zdmc+)
 */
export function PhVoicemailIcon(props: PhVoicemailIconProps) {
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
      <path d="M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z"/>
    </svg>
  );
}
