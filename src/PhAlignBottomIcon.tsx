import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMjE2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMjE2Wm0tODgtNDBWODBhMTYsMTYsMCwwLDEsMTYtMTZoNDBhMTYsMTYsMCwwLDEsMTYsMTZ2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMTUyQTE2LDE2LDAsMCwxLDEzNiwxNzZabTE2LDBoNDBWODBIMTUyWk00OCwxNzZWNDBBMTYsMTYsMCwwLDEsNjQsMjRoNDBhMTYsMTYsMCwwLDEsMTYsMTZWMTc2YTE2LDE2LDAsMCwxLTE2LDE2SDY0QTE2LDE2LDAsMCwxLDQ4LDE3NlptMTYsMGg0MFY0MEg2NFoiLz48L3N2Zz4=)
 */
export function PhAlignBottomIcon(props: PhAlignBottomIconProps) {
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
      <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-88-40V80a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v96a16,16,0,0,1-16,16H152A16,16,0,0,1,136,176Zm16,0h40V80H152ZM48,176V40A16,16,0,0,1,64,24h40a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H64A16,16,0,0,1,48,176Zm16,0h40V40H64Z"/>
    </svg>
  );
}
