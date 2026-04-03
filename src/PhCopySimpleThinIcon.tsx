import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopySimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjhINDBhNCw0LDAsMCwwLTQsNFYyMTZhNCw0LDAsMCwwLDQsNEgxODRhNCw0LDAsMCwwLDQtNFY3MkE0LDQsMCwwLDAsMTg0LDY4Wm0tNCwxNDRINDRWNzZIMTgwWk0yMjAsNDBWMTg0YTQsNCwwLDAsMS04LDBWNDRINzJhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCw0MFoiLz48L3N2Zz4=)
 */
export function PhCopySimpleThinIcon(props: PhCopySimpleThinIconProps) {
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
      <path d="M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z"/>
    </svg>
  );
}
