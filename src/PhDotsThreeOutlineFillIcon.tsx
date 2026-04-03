import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsMTI4YTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDE1NiwxMjhaTTQ4LDEwMGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCw0OCwxMDBabTE2MCwwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDIwOCwxMDBaIi8+PC9zdmc+)
 */
export function PhDotsThreeOutlineFillIcon(props: PhDotsThreeOutlineFillIconProps) {
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
      <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28,28,0,0,0,208,100Z"/>
    </svg>
  );
}
