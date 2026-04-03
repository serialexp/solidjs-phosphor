import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClubFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTQ0YTU2LDU2LDAsMCwxLTg0LjgxLDQ4aC00LjQ0bDguOTEsMjkuN0E4LDgsMCwwLDEsMTUyLDIzMkgxMDRhOCw4LDAsMCwxLTcuNjYtMTAuM2w4LjkxLTI5LjdoLTQuNDRBNTYsNTYsMCwxLDEsNzIsODhjLjc4LDAsMS41NSwwLDIuMzMsMGE1Niw1NiwwLDEsMSwxMDcuMzQsMGMuNzcsMCwxLjU1LDAsMi4zMywwQTU2LjA2LDU2LjA2LDAsMCwxLDI0MCwxNDRaIi8+PC9zdmc+)
 */
export function PhClubFillIcon(props: PhClubFillIconProps) {
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
      <path d="M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z"/>
    </svg>
  );
}
