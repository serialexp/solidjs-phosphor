import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChairDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Niw4OFY0MGE4LDgsMCwwLDEsOC04SDE5MmE4LDgsMCwwLDEsOCw4Vjg4YTgsOCwwLDAsMS04LDhINjRBOCw4LDAsMCwxLDU2LDg4Wm0xNTIsNTZINDhhOCw4LDAsMCwwLTgsOHYxNmE4LDgsMCwwLDAsOCw4SDIwOGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjA4LDE0NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDE3NlYxMDRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNDBhMTYsMTYsMCwwLDAtMTYtMTZINjRBMTYsMTYsMCwwLDAsNDgsNDBWODhhMTYsMTYsMCwwLDAsMTYsMTZIODB2MzJINDhhMTYsMTYsMCwwLDAtMTYsMTZ2MTZhMTYsMTYsMCwwLDAsMTYsMTZoOHY0MGE4LDgsMCwwLDAsMTYsMFYxODRIMTg0djQwYTgsOCwwLDAsMCwxNiwwVjE4NGg4YTE2LDE2LDAsMCwwLDE2LTE2VjE1MkExNiwxNiwwLDAsMCwyMDgsMTM2Wk02NCw0MEgxOTJWODhINjRabTMyLDY0aDY0djMySDk2Wm0xMTIsNjRINDhWMTUySDIwOHYxNloiLz48L3N2Zz4=)
 */
export function PhChairDuotoneIcon(props: PhChairDuotoneIconProps) {
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
      <path d="M56,88V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V88a8,8,0,0,1-8,8H64A8,8,0,0,1,56,88Zm152,56H48a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V152A8,8,0,0,0,208,144Z" opacity="0.2"/><path d="M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM64,40H192V88H64Zm32,64h64v32H96Zm112,64H48V152H208v16Z"/>
    </svg>
  );
}
