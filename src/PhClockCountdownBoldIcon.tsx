import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClockCountdownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTM3QTEwOC4xMywxMDguMTMsMCwxLDEsMTE5LDIwLDEyLDEyLDAsMCwxLDEyMSw0NCw4NC4xMiw4NC4xMiwwLDEsMCwyMTIsMTM1LDEyLDEyLDAsMSwxLDIzNiwxMzdaTTExNiw3NnY1MmExMiwxMiwwLDAsMCwxMiwxMmg1MmExMiwxMiwwLDAsMCwwLTI0SDE0MFY3NmExMiwxMiwwLDAsMC0yNCwwWm05MiwyMGExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCwyMDgsOTZaTTE3Niw2NGExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCwxNzYsNjRaIi8+PC9zdmc+)
 */
export function PhClockCountdownBoldIcon(props: PhClockCountdownBoldIconProps) {
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
      <path d="M236,137A108.13,108.13,0,1,1,119,20,12,12,0,0,1,121,44,84.12,84.12,0,1,0,212,135,12,12,0,1,1,236,137ZM116,76v52a12,12,0,0,0,12,12h52a12,12,0,0,0,0-24H140V76a12,12,0,0,0-24,0Zm92,20a16,16,0,1,0-16-16A16,16,0,0,0,208,96ZM176,64a16,16,0,1,0-16-16A16,16,0,0,0,176,64Z"/>
    </svg>
  );
}
