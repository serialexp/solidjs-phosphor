import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyGbpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsMjA4YTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLDAtOGg0YTMyLDMyLDAsMCwwLDMyLTMyVjEzMkg1NmE0LDQsMCwwLDEsMC04SDkyVjg0YTQ4LDQ4LDAsMCwxLDc4LjUzLTM3LDQsNCwwLDEsMS01LjA5LDYuMTdBNDAsNDAsMCwwLDAsMTAwLDg0djQwaDM2YTQsNCwwLDAsMSwwLDhIMTAwdjQwYTQwLDQwLDAsMCwxLTE2LDMySDE4NEE0LDQsMCwwLDEsMTg4LDIwOFoiLz48L3N2Zz4=)
 */
export function PhCurrencyGbpThinIcon(props: PhCurrencyGbpThinIconProps) {
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
      <path d="M188,208a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h4a32,32,0,0,0,32-32V132H56a4,4,0,0,1,0-8H92V84a48,48,0,0,1,78.53-37,4,4,0,1,1-5.09,6.17A40,40,0,0,0,100,84v40h36a4,4,0,0,1,0,8H100v40a40,40,0,0,1-16,32H184A4,4,0,0,1,188,208Z"/>
    </svg>
  );
}
