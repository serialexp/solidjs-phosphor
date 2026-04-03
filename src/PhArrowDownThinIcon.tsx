import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuODMsMTQ2LjgzbC03Miw3MmE0LDQsMCwwLDEtNS42NiwwbC03Mi03MmE0LDQsMCwwLDEsNS42Ni01LjY2TDEyNCwyMDYuMzRWNDBhNCw0LDAsMCwxLDgsMFYyMDYuMzRsNjUuMTctNjUuMTdhNCw0LDAsMCwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
export function PhArrowDownThinIcon(props: PhArrowDownThinIconProps) {
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
      <path d="M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z"/>
    </svg>
  );
}
