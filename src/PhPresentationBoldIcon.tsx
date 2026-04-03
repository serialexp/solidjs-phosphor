import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPresentationBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZIMTQwVjI0YTEyLDEyLDAsMCwwLTI0LDBWMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTc2YTIwLDIwLDAsMCwwLDIwLDIwSDcxbC0xNi40LDIwLjVhMTIsMTIsMCwwLDAsMTguNzQsMTVsMjguNC0zNS41aDUyLjQ2bDI4LjQsMzUuNWExMiwxMiwwLDAsMCwxOC43NC0xNUwxODUsMTk2aDMxYTIwLDIwLDAsMCwwLDIwLTIwVjU2QTIwLDIwLDAsMCwwLDIxNiwzNlptLTQsMTM2SDQ0VjYwSDIxMloiLz48L3N2Zz4=)
 */
export function PhPresentationBoldIcon(props: PhPresentationBoldIconProps) {
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
      <path d="M216,36H140V24a12,12,0,0,0-24,0V36H40A20,20,0,0,0,20,56V176a20,20,0,0,0,20,20H71l-16.4,20.5a12,12,0,0,0,18.74,15l28.4-35.5h52.46l28.4,35.5a12,12,0,0,0,18.74-15L185,196h31a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,136H44V60H212Z"/>
    </svg>
  );
}
