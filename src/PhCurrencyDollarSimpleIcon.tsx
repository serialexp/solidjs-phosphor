import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyDollarSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTY4YTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LDQ4SDEzNnYxNmE4LDgsMCwwLDEtMTYsMFYyMTZIMTA0YTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LTQ4LDgsOCwwLDAsMSwxNiwwLDMyLDMyLDAsMCwwLDMyLDMyaDQ4YTMyLDMyLDAsMCwwLDAtNjRIMTEyYTQ4LDQ4LDAsMCwxLDAtOTZoOFYyNGE4LDgsMCwwLDEsMTYsMFY0MGg4YTQ4LjA1LDQ4LjA1LDAsMCwxLDQ4LDQ4LDgsOCwwLDAsMS0xNiwwLDMyLDMyLDAsMCwwLTMyLTMySDExMmEzMiwzMiwwLDAsMCwwLDY0aDQwQTQ4LjA1LDQ4LjA1LDAsMCwxLDIwMCwxNjhaIi8+PC9zdmc+)
 */
export function PhCurrencyDollarSimpleIcon(props: PhCurrencyDollarSimpleIconProps) {
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
      <path d="M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z"/>
    </svg>
  );
}
