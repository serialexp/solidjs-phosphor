import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUnionDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjR2ODBhNzIsNzIsMCwwLDEtMTQ0LDBWNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDY0djgwYTgwLDgwLDAsMCwxLTE2MCwwVjY0YTgsOCwwLDAsMSwxNiwwdjgwYTY0LDY0LDAsMCwwLDEyOCwwVjY0YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhUnionDuotoneIcon(props: PhUnionDuotoneIconProps) {
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
      <path d="M200,64v80a72,72,0,0,1-144,0V64Z" opacity="0.2"/><path d="M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
