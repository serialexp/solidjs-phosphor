import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotchesBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTM2LjQ5bC04MCw4MGExMiwxMiwwLDEsMS0xNy0xN2w4MC04MGExMiwxMiwwLDEsMSwxNywxN1ptLTE2LTEwNWExMiwxMiwwLDAsMC0xNywwbC0xNTIsMTUyYTEyLDEyLDAsMCwwLDE3LDE3bDE1Mi0xNTJBMTIsMTIsMCwwLDAsMjAwLjQ5LDMxLjUxWiIvPjwvc3ZnPg==)
 */
export function PhNotchesBoldIcon(props: PhNotchesBoldIconProps) {
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
      <path d="M216.49,136.49l-80,80a12,12,0,1,1-17-17l80-80a12,12,0,1,1,17,17Zm-16-105a12,12,0,0,0-17,0l-152,152a12,12,0,0,0,17,17l152-152A12,12,0,0,0,200.49,31.51Z"/>
    </svg>
  );
}
