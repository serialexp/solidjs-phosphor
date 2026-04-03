import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodaLogoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODZhNDEuODIsNDEuODIsMCwwLDEsMjIuNjEsNi40MUExMCwxMCwwLDAsMCwyMTQsODRWNDhhMTQsMTQsMCwwLDAtMTQtMTRINTZBMTQsMTQsMCwwLDAsNDIsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFYxNzJhMTAsMTAsMCwwLDAtMTUuMzYtOC40M2MtNy42Myw0Ljg5LTE0LjExLDYuNzYtMjIuNCw2LjQySDE3NmE0Miw0MiwwLDAsMSwwLTg0Wm0tNTQsNDJhNTQuMDYsNTQuMDYsMCwwLDAsNTMuODgsNTRBNDYuMzYsNDYuMzYsMCwwLDAsMjAyLDE3NS41N1YyMDhhMiwyLDAsMCwxLTIsMkg1NmEyLDIsMCwwLDEtMi0yVjQ4YTIsMiwwLDAsMSwyLTJIMjAwYTIsMiwwLDAsMSwyLDJWODAuNDhBNTQuMjgsNTQuMjgsMCwwLDAsMTIyLDEyOFoiLz48L3N2Zz4=)
 */
export function PhCodaLogoLightIcon(props: PhCodaLogoLightIconProps) {
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
      <path d="M176,86a41.82,41.82,0,0,1,22.61,6.41A10,10,0,0,0,214,84V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V172a10,10,0,0,0-15.36-8.43c-7.63,4.89-14.11,6.76-22.4,6.42H176a42,42,0,0,1,0-84Zm-54,42a54.06,54.06,0,0,0,53.88,54A46.36,46.36,0,0,0,202,175.57V208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V80.48A54.28,54.28,0,0,0,122,128Z"/>
    </svg>
  );
}
