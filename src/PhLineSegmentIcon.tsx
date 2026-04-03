import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLineSegmentIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjQsNDEuMzZhMzIsMzIsMCwwLDAtNTAuMiwzOC44OUw4MC4yNSwxNjQuNDRhMzIuMDYsMzIuMDYsMCwwLDAtMzguODksNC45NGgwYTMyLDMyLDAsMSwwLDUwLjIsNi4zN2w4NC4xOS04NC4xOWEzMiwzMiwwLDAsMCwzOC44OS01MC4yWm0tMTM5LjMzLDE2MmExNiwxNiwwLDAsMS0yMi42NC0yMi42NGgwYTE2LDE2LDAsMCwxLDIyLjYzLDBoMEExNiwxNiwwLDAsMSw3NS4zMSwyMDMuMzNabTEyOC0xMjhhMTYsMTYsMCwxLDEsMC0yMi42M0ExNiwxNiwwLDAsMSwyMDMuMzMsNzUuM1oiLz48L3N2Zz4=)
 */
export function PhLineSegmentIcon(props: PhLineSegmentIconProps) {
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
      <path d="M214.64,41.36a32,32,0,0,0-50.2,38.89L80.25,164.44a32.06,32.06,0,0,0-38.89,4.94h0a32,32,0,1,0,50.2,6.37l84.19-84.19a32,32,0,0,0,38.89-50.2Zm-139.33,162a16,16,0,0,1-22.64-22.64h0a16,16,0,0,1,22.63,0h0A16,16,0,0,1,75.31,203.33Zm128-128a16,16,0,1,1,0-22.63A16,16,0,0,1,203.33,75.3Z"/>
    </svg>
  );
}
