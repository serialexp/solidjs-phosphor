import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWalletThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhINTZhMTIsMTIsMCwwLDEsMC0yNEgxOTJhNCw0LDAsMCwwLDAtOEg1NkEyMCwyMCwwLDAsMCwzNiw1NlYxODRhMjAsMjAsMCwwLDAsMjAsMjBIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDIxNiw2OFptNCwxMjRhNCw0LDAsMCwxLTQsNEg1NmExMiwxMiwwLDAsMS0xMi0xMlY3MmExOS44NiwxOS44NiwwLDAsMCwxMiw0SDIxNmE0LDQsMCwwLDEsNCw0Wm0tMzItNjBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTg4LDEzMloiLz48L3N2Zz4=)
 */
export function PhWalletThinIcon(props: PhWalletThinIconProps) {
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
      <path d="M216,68H56a12,12,0,0,1,0-24H192a4,4,0,0,0,0-8H56A20,20,0,0,0,36,56V184a20,20,0,0,0,20,20H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68Zm4,124a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V72a19.86,19.86,0,0,0,12,4H216a4,4,0,0,1,4,4Zm-32-60a8,8,0,1,1-8-8A8,8,0,0,1,188,132Z"/>
    </svg>
  );
}
