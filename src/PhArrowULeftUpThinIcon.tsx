import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowULeftUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsODB2ODhhNjAsNjAsMCwwLDEtMTIwLDBWNDEuNjZMNDIuODMsODIuODNhNCw0LDAsMCwxLTUuNjYtNS42Nmw0OC00OGE0LDQsMCwwLDEsNS42NiwwbDQ4LDQ4YTQsNCwwLDAsMS01LjY2LDUuNjZMOTIsNDEuNjZWMTY4YTUyLDUyLDAsMCwwLDEwNCwwVjgwYTQsNCwwLDAsMSw4LDBaIi8+PC9zdmc+)
 */
export function PhArrowULeftUpThinIcon(props: PhArrowULeftUpThinIconProps) {
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
      <path d="M204,80v88a60,60,0,0,1-120,0V41.66L42.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L92,41.66V168a52,52,0,0,0,104,0V80a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
