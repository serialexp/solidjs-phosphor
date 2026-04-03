import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCookieFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwYTQwLDQwLDAsMCwxLTQwLTQwLDgsOCwwLDAsMC04LTgsNDAsNDAsMCwwLDEtNDAtNDAsOCw4LDAsMCwwLTgtOEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsOCw4LDAsMCwwLDIyNCwxMjBaTTc1LjUxLDk5LjUxYTEyLDEyLDAsMSwxLDAsMTdBMTIsMTIsMCwwLDEsNzUuNTEsOTkuNTFabTI1LDczYTEyLDEyLDAsMSwxLDAtMTdBMTIsMTIsMCwwLDEsMTAwLjQ5LDE3Mi40OVptMjMtNDBhMTIsMTIsMCwxLDEsMTcsMEExMiwxMiwwLDAsMSwxMjMuNTEsMTMyLjQ5Wm00MSw0OGExMiwxMiwwLDEsMSwwLTE3QTEyLDEyLDAsMCwxLDE2NC40OSwxODAuNDlaIi8+PC9zdmc+)
 */
export function PhCookieFillIcon(props: PhCookieFillIconProps) {
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
      <path d="M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z"/>
    </svg>
  );
}
