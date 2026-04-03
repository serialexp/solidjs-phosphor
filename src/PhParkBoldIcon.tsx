import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParkBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTg4SDIwNFYxNzJoMjBhMTIsMTIsMCwwLDAsMTEuNjQtMTQuOTFsLTMyLTEyOGExMiwxMiwwLDAsMC0yMy4yOCwwbC0zMiwxMjhBMTIsMTIsMCwwLDAsMTYwLDE3MmgyMHYxNkgxMTZWMTc2YTEyLDEyLDAsMCwwLDAtMjRWMTQwYTEyLDEyLDAsMCwwLDAtMjRIMzJhMTIsMTIsMCwwLDAsMCwyNHYxMmExMiwxMiwwLDAsMCwwLDI0djEySDI0YTEyLDEyLDAsMCwwLDAsMjRIMjMyYTEyLDEyLDAsMCwwLDAtMjRaTTE5Miw4MS40OCwyMDguNjMsMTQ4SDE3NS4zN1pNNTYsMTQwSDkydjEySDU2Wm0wLDM2SDkydjEySDU2Wm02MC03NkEzMiwzMiwwLDEsMCw4NCw2OCwzMiwzMiwwLDAsMCwxMTYsMTAwWm0wLTQwYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDExNiw2MFoiLz48L3N2Zz4=)
 */
export function PhParkBoldIcon(props: PhParkBoldIconProps) {
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
      <path d="M232,188H204V172h20a12,12,0,0,0,11.64-14.91l-32-128a12,12,0,0,0-23.28,0l-32,128A12,12,0,0,0,160,172h20v16H116V176a12,12,0,0,0,0-24V140a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24v12a12,12,0,0,0,0,24v12H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM192,81.48,208.63,148H175.37ZM56,140H92v12H56Zm0,36H92v12H56Zm60-76A32,32,0,1,0,84,68,32,32,0,0,0,116,100Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,116,60Z"/>
    </svg>
  );
}
