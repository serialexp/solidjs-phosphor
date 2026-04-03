import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFlagPennantDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0LDU2LDE2OFY0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDIuNjMsOTYuNDRsLTE4NC02NEE4LDgsMCwwLDAsNDgsNDBWMjE2YTgsOCwwLDAsMCwxNiwwVjE3My42OWwxNzguNjMtNjIuMTNhOCw4LDAsMCwwLDAtMTUuMTJaTTY0LDE1Ni43NVY1MS4yNUwyMTUuNjUsMTA0WiIvPjwvc3ZnPg==)
 */
export function PhFlagPennantDuotoneIcon(props: PhFlagPennantDuotoneIconProps) {
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
      <path d="M240,104,56,168V40Z" opacity="0.2"/><path d="M242.63,96.44l-184-64A8,8,0,0,0,48,40V216a8,8,0,0,0,16,0V173.69l178.63-62.13a8,8,0,0,0,0-15.12ZM64,156.75V51.25L215.65,104Z"/>
    </svg>
  );
}
