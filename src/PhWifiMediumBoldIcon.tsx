import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWifiMediumBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjA0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwyMDRabTYzLjQ1LTg0LjM2YTEyOCwxMjgsMCwwLDAtMTU4LjksMCwxMiwxMiwwLDAsMCwxNC45LDE4LjgxLDEwNCwxMDQsMCwwLDEsMTI5LjEsMCwxMiwxMiwwLDAsMCwxNC45LTE4LjgxWk0xNzUuMDcsMTU1LjNhODAuMDUsODAuMDUsMCwwLDAtOTQuMTQsMCwxMiwxMiwwLDAsMCwxNC4xNCwxOS40LDU2LDU2LDAsMCwxLDY1Ljg2LDAsMTIsMTIsMCwxLDAsMTQuMTQtMTkuNFoiLz48L3N2Zz4=)
 */
export function PhWifiMediumBoldIcon(props: PhWifiMediumBoldIconProps) {
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
      <path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204Zm63.45-84.36a128,128,0,0,0-158.9,0,12,12,0,0,0,14.9,18.81,104,104,0,0,1,129.1,0,12,12,0,0,0,14.9-18.81ZM175.07,155.3a80.05,80.05,0,0,0-94.14,0,12,12,0,0,0,14.14,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.14-19.4Z"/>
    </svg>
  );
}
