import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowURightDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTc2bC00OCw0OC00OC00OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjMuMzksMTcyLjk0QTgsOCwwLDAsMCwyMTYsMTY4SDE3NlY4OEE2NCw2NCwwLDAsMCw0OCw4OHY4OGE4LDgsMCwwLDAsMTYsMFY4OGE0OCw0OCwwLDAsMSw5NiwwdjgwSDEyMGE4LDgsMCwwLDAtNS42NiwxMy42Nmw0OCw0OGE4LDgsMCwwLDAsMTEuMzIsMGw0OC00OEE4LDgsMCwwLDAsMjIzLjM5LDE3Mi45NFpNMTY4LDIxMi42OSwxMzkuMzEsMTg0aDU3LjM4WiIvPjwvc3ZnPg==)
 */
export function PhArrowURightDownDuotoneIcon(props: PhArrowURightDownDuotoneIconProps) {
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
      <path d="M216,176l-48,48-48-48Z" opacity="0.2"/><path d="M223.39,172.94A8,8,0,0,0,216,168H176V88A64,64,0,0,0,48,88v88a8,8,0,0,0,16,0V88a48,48,0,0,1,96,0v80H120a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,223.39,172.94ZM168,212.69,139.31,184h57.38Z"/>
    </svg>
  );
}
