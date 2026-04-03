import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChairFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDE3NlYxMDRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNDBhMTYsMTYsMCwwLDAtMTYtMTZINjRBMTYsMTYsMCwwLDAsNDgsNDBWODhhMTYsMTYsMCwwLDAsMTYsMTZIODB2MzJINDhhMTYsMTYsMCwwLDAtMTYsMTZ2MTZhMTYsMTYsMCwwLDAsMTYsMTZoOHY0MGE4LDgsMCwwLDAsMTYsMFYxODRIMTg0djQwYTgsOCwwLDAsMCwxNiwwVjE4NGg4YTE2LDE2LDAsMCwwLDE2LTE2VjE1MkExNiwxNiwwLDAsMCwyMDgsMTM2Wm0tNDgsMEg5NlYxMDRoNjRaIi8+PC9zdmc+)
 */
export function PhChairFillIcon(props: PhChairFillIconProps) {
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
      <path d="M208,136H176V104h16a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V88a16,16,0,0,0,16,16H80v32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h8v40a8,8,0,0,0,16,0V184H184v40a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm-48,0H96V104h64Z"/>
    </svg>
  );
}
