import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRowsIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDQ4YTE2LDE2LDAsMCwwLTE2LDE2djQwYTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNTJBMTYsMTYsMCwwLDAsMjA4LDEzNlptMCw1Nkg0OFYxNTJIMjA4djQwWm0wLTE0NEg0OEExNiwxNiwwLDAsMCwzMiw2NHY0MGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNjRBMTYsMTYsMCwwLDAsMjA4LDQ4Wm0wLDU2SDQ4VjY0SDIwOHY0MFoiLz48L3N2Zz4=)
 */
export function PhRowsIcon(props: PhRowsIconProps) {
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
      <path d="M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z"/>
    </svg>
  );
}
