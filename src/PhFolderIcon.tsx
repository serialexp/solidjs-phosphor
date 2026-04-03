import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNkgyMTYuODlBMTUuMTMsMTUuMTMsMCwwLDAsMjMyLDIwMC44OVY4OEExNiwxNiwwLDAsMCwyMTYsNzJaTTQwLDU2SDkyLjY5bDE2LDE2SDQwWk0yMTYsMjAwSDQwVjg4SDIxNloiLz48L3N2Zz4=)
 */
export function PhFolderIcon(props: PhFolderIconProps) {
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
      <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"/>
    </svg>
  );
}
