import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMartiniThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsNDIuODNBNCw0LDAsMCwwLDIzMiwzNkgyNGE0LDQsMCwwLDAtMi44Myw2LjgzTDEyNCwxNDUuNjZWMjEySDg4YTQsNCwwLDAsMCwwLDhoODBhNCw0LDAsMCwwLDAtOEgxMzJWMTQ1LjY2Wk0zMy42Niw0NEgyMjIuMzRsLTI0LDI0SDU3LjY2Wk0xMjgsMTM4LjM0LDY1LjY2LDc2SDE5MC4zNFoiLz48L3N2Zz4=)
 */
export function PhMartiniThinIcon(props: PhMartiniThinIconProps) {
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
      <path d="M234.83,42.83A4,4,0,0,0,232,36H24a4,4,0,0,0-2.83,6.83L124,145.66V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.66ZM33.66,44H222.34l-24,24H57.66ZM128,138.34,65.66,76H190.34Z"/>
    </svg>
  );
}
