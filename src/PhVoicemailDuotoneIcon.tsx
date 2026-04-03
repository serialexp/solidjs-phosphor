import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVoicemailDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTI4QTQ4LDQ4LDAsMSwxLDU2LDgwLDQ4LDQ4LDAsMCwxLDEwNCwxMjhabTk2LTQ4YTQ4LDQ4LDAsMSwwLDQ4LDQ4QTQ4LDQ4LDAsMCwwLDIwMCw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDAsNzJhNTYsNTYsMCwwLDAtMzkuMTQsOTZIOTUuMTRBNTYsNTYsMCwxLDAsNTYsMTg0SDIwMGE1Niw1NiwwLDAsMCwwLTExMlpNMTYsMTI4YTQwLDQwLDAsMSwxLDQwLDQwQTQwLDQwLDAsMCwxLDE2LDEyOFptMTg0LDQwYTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDIwMCwxNjhaIi8+PC9zdmc+)
 */
export function PhVoicemailDuotoneIcon(props: PhVoicemailDuotoneIconProps) {
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
      <path d="M104,128A48,48,0,1,1,56,80,48,48,0,0,1,104,128Zm96-48a48,48,0,1,0,48,48A48,48,0,0,0,200,80Z" opacity="0.2"/><path d="M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z"/>
    </svg>
  );
}
