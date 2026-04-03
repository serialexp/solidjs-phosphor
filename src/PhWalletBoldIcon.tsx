import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWalletBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTM2YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE5NiwxMzZabTQwLTM2djgwYTMyLDMyLDAsMCwxLTMyLDMySDYwYTMyLDMyLDAsMCwxLTMyLTMyVjYwLjkyQTMyLDMyLDAsMCwxLDYwLDI4SDE5MmExMiwxMiwwLDAsMSwwLDI0SDYwYTgsOCwwLDAsMC04LDguMjZ2LjA4QTguMzIsOC4zMiwwLDAsMCw2MC40OCw2OEgyMDRBMzIsMzIsMCwwLDEsMjM2LDEwMFptLTI0LDBhOCw4LDAsMCwwLTgtOEg2MC40OEEzMy43MiwzMy43MiwwLDAsMSw1Miw5MC45MlYxODBhOCw4LDAsMCwwLDgsOEgyMDRhOCw4LDAsMCwwLDgtOFoiLz48L3N2Zz4=)
 */
export function PhWalletBoldIcon(props: PhWalletBoldIconProps) {
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
      <path d="M196,136a16,16,0,1,1-16-16A16,16,0,0,1,196,136Zm40-36v80a32,32,0,0,1-32,32H60a32,32,0,0,1-32-32V60.92A32,32,0,0,1,60,28H192a12,12,0,0,1,0,24H60a8,8,0,0,0-8,8.26v.08A8.32,8.32,0,0,0,60.48,68H204A32,32,0,0,1,236,100Zm-24,0a8,8,0,0,0-8-8H60.48A33.72,33.72,0,0,1,52,90.92V180a8,8,0,0,0,8,8H204a8,8,0,0,0,8-8Z"/>
    </svg>
  );
}
