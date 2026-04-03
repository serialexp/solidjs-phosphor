import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCheckerboardBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDhhMjAsMjAsMCwwLDAtMjAtMjBINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFptLTM1LDY4TDE0MCw2M1Y1MmgxMWw1Myw1M3YxMVpNMTQwLDk3bDE5LDE5SDE0MFpNMjA0LDcxLDE4NSw1MmgxOVpNMTE2LDUyVjY4aDB2NDhINTJWNTJaTTEwNSwyMDQsNTIsMTUxVjE0MEg2M2w1Myw1M3YxMVptMTEtNDVMOTcsMTQwaDE5Wk01MiwxODVsMTksMTlINTJabTg4LDE5VjE4OGgwVjE0MGg2NHY2NFoiLz48L3N2Zz4=)
 */
export function PhCheckerboardBoldIcon(props: PhCheckerboardBoldIconProps) {
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
      <path d="M228,48a20,20,0,0,0-20-20H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20Zm-35,68L140,63V52h11l53,53v11ZM140,97l19,19H140ZM204,71,185,52h19ZM116,52V68h0v48H52V52ZM105,204,52,151V140H63l53,53v11Zm11-45L97,140h19ZM52,185l19,19H52Zm88,19V188h0V140h64v64Z"/>
    </svg>
  );
}
