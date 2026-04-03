import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCourtBasketballFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOTIuMjN2NzEuNTRhNCw0LDAsMCwxLTQuNDEsNCw0MCw0MCwwLDAsMSwwLTc5LjUyQTQsNCwwLDAsMSwyNDAsOTIuMjNaTTIwLjQxLDE2Ny43NmE0MCw0MCwwLDAsMCwwLTc5LjUyLDQsNCwwLDAsMC00LjQxLDR2NzEuNTRBNCw0LDAsMCwwLDIwLjQxLDE2Ny43NlpNMTE2LDQ4SDMyQTE2LDE2LDAsMCwwLDE2LDY0djQuMTNhNCw0LDAsMCwwLDMuOCw0LDU2LDU2LDAsMCwxLDAsMTExLjc0LDQsNCwwLDAsMC0zLjgsNFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZoODRhNCw0LDAsMCwwLDQtNFY1MkE0LDQsMCwwLDAsMTE2LDQ4Wm0xMDgsMEgxNDBhNCw0LDAsMCwwLTQsNFYyMDRhNCw0LDAsMCwwLDQsNGg4NGExNiwxNiwwLDAsMCwxNi0xNnYtNC4xM2E0LDQsMCwwLDAtMy44LTQsNTYsNTYsMCwwLDEsMC0xMTEuNzQsNCw0LDAsMCwwLDMuOC00VjY0QTE2LDE2LDAsMCwwLDIyNCw0OFoiLz48L3N2Zz4=)
 */
export function PhCourtBasketballFillIcon(props: PhCourtBasketballFillIconProps) {
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
      <path d="M240,92.23v71.54a4,4,0,0,1-4.41,4,40,40,0,0,1,0-79.52A4,4,0,0,1,240,92.23ZM20.41,167.76a40,40,0,0,0,0-79.52,4,4,0,0,0-4.41,4v71.54A4,4,0,0,0,20.41,167.76ZM116,48H32A16,16,0,0,0,16,64v4.13a4,4,0,0,0,3.8,4,56,56,0,0,1,0,111.74,4,4,0,0,0-3.8,4V192a16,16,0,0,0,16,16h84a4,4,0,0,0,4-4V52A4,4,0,0,0,116,48Zm108,0H140a4,4,0,0,0-4,4V204a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16v-4.13a4,4,0,0,0-3.8-4,56,56,0,0,1,0-111.74,4,4,0,0,0,3.8-4V64A16,16,0,0,0,224,48Z"/>
    </svg>
  );
}
