import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterVerticalSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI0SDE3MlY0OGExMiwxMiwwLDAsMC0xMi0xMkg5NkExMiwxMiwwLDAsMCw4NCw0OHY3Nkg0OGE0LDQsMCwwLDAsMCw4SDg0djc2YTEyLDEyLDAsMCwwLDEyLDEyaDY0YTEyLDEyLDAsMCwwLDEyLTEyVjEzMmgzNmE0LDQsMCwwLDAsMC04Wm0tNDQsODRhNCw0LDAsMCwxLTQsNEg5NmE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRoNjRhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 */
export function PhAlignCenterVerticalSimpleThinIcon(props: PhAlignCenterVerticalSimpleThinIconProps) {
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
      <path d="M208,124H172V48a12,12,0,0,0-12-12H96A12,12,0,0,0,84,48v76H48a4,4,0,0,0,0,8H84v76a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V132h36a4,4,0,0,0,0-8Zm-44,84a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
