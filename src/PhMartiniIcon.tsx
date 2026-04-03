import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMartiniIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNDUuNjZBOCw4LDAsMCwwLDIzMiwzMkgyNGE4LDgsMCwwLDAtNS42NiwxMy42NkwxMjAsMTQ3LjMxVjIwOEg4OGE4LDgsMCwwLDAsMCwxNmg4MGE4LDgsMCwwLDAsMC0xNkgxMzZWMTQ3LjMxWk00My4zMSw0OEgyMTIuNjlsLTE2LDE2SDU5LjMxWk0xMjgsMTMyLjY5LDc1LjMxLDgwSDE4MC42OVoiLz48L3N2Zz4=)
 */
export function PhMartiniIcon(props: PhMartiniIconProps) {
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
      <path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM43.31,48H212.69l-16,16H59.31ZM128,132.69,75.31,80H180.69Z"/>
    </svg>
  );
}
