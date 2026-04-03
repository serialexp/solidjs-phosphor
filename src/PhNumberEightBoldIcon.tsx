import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberEightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuNDQsMTE4LjkxYTUyLDUyLDAsMSwwLTY4Ljg4LDAsNjAsNjAsMCwxLDAsNjguODgsMFpNMTAwLDgwYTI4LDI4LDAsMSwxLDI4LDI4QTI4LDI4LDAsMCwxLDEwMCw4MFptMjgsMTI0YTM2LDM2LDAsMSwxLDM2LTM2QTM2LDM2LDAsMCwxLDEyOCwyMDRaIi8+PC9zdmc+)
 */
export function PhNumberEightBoldIcon(props: PhNumberEightBoldIconProps) {
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
      <path d="M162.44,118.91a52,52,0,1,0-68.88,0,60,60,0,1,0,68.88,0ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,124a36,36,0,1,1,36-36A36,36,0,0,1,128,204Z"/>
    </svg>
  );
}
