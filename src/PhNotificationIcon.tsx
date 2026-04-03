import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotificationIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4djgwYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQ4LDQwaDgwYTgsOCwwLDAsMSwwLDE2SDQ4VjIwOEgyMDBWMTI4YTgsOCwwLDAsMSwxNiwwWm0xNi02OGEzNiwzNiwwLDEsMS0zNi0zNkEzNiwzNiwwLDAsMSwyMzIsNjBabS0xNiwwYTIwLDIwLDAsMSwwLTIwLDIwQTIwLDIwLDAsMCwwLDIxNiw2MFoiLz48L3N2Zz4=)
 */
export function PhNotificationIcon(props: PhNotificationIconProps) {
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
      <path d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z"/>
    </svg>
  );
}
