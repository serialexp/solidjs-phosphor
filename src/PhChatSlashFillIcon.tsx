import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatSlashFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuOTIsMjEwLjYxYTgsOCwwLDEsMS0xMS44NCwxMC43NkwxODkuOTIsMjA4SDgzbC0zMi42LDI4LjE2LS4wOC4wN0ExNS45NCwxNS45NCwwLDAsMSw0MCwyNDBhMTYuMTMsMTYuMTMsMCwwLDEtNi44LTEuNTJBMTUuODUsMTUuODUsMCwwLDEsMjQsMjI0VjY0QTE2LDE2LDAsMCwxLDQwLDQ4aDQuNDZsLTIuMzgtMi42MkE4LDgsMCwxLDEsNTMuOTIsMzQuNjJaTTIxNiw0OEg5Ni43NWE0LDQsMCwwLDAtMyw2LjY5TDIyNSwxOTkuMDZhNCw0LDAsMCwwLDctMi42OVY2NEExNiwxNiwwLDAsMCwyMTYsNDhaIi8+PC9zdmc+)
 */
export function PhChatSlashFillIcon(props: PhChatSlashFillIconProps) {
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
      <path d="M213.92,210.61a8,8,0,1,1-11.84,10.76L189.92,208H83l-32.6,28.16-.08.07A15.94,15.94,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48h4.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM216,48H96.75a4,4,0,0,0-3,6.69L225,199.06a4,4,0,0,0,7-2.69V64A16,16,0,0,0,216,48Z"/>
    </svg>
  );
}
