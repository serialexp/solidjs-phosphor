import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFilmReelBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjEySDE5NS44QTEwNy45NCwxMDcuOTQsMCwxLDAsMTI4LDIzNkgyMzJhMTIsMTIsMCwwLDAsMC0yNFpNNDQsMTI4YTg0LDg0LDAsMSwxLDg0LDg0QTg0LjA5LDg0LjA5LDAsMCwxLDQ0LDEyOFptNjQtNDRhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTA4LDg0Wm0yMCwxMDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTI4LDE5MlptMjQtNjRhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTUyLDEyOFptLTQ4LDBhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMTA0LDEyOFoiLz48L3N2Zz4=)
 */
export function PhFilmReelBoldIcon(props: PhFilmReelBoldIconProps) {
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
      <path d="M232,212H195.8A107.94,107.94,0,1,0,128,236H232a12,12,0,0,0,0-24ZM44,128a84,84,0,1,1,84,84A84.09,84.09,0,0,1,44,128Zm64-44a20,20,0,1,1,20,20A20,20,0,0,1,108,84Zm20,108a20,20,0,1,1,20-20A20,20,0,0,1,128,192Zm24-64a20,20,0,1,1,20,20A20,20,0,0,1,152,128Zm-48,0a20,20,0,1,1-20-20A20,20,0,0,1,104,128Z"/>
    </svg>
  );
}
