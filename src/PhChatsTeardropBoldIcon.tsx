import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatsTeardropBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuMjksNjguOUE4NCw4NCwwLDAsMCwxMiwxMDR2NjRhMjAsMjAsMCwwLDAsMjAsMjBIODQuMUE4NC4xOCw4NC4xOCwwLDAsMCwxNjAsMjM2aDY0YTIwLDIwLDAsMCwwLDIwLTIwVjE1MkE4NCw4NCwwLDAsMCwxNzIuMjksNjguOVpNMzYsMTA0YTYwLDYwLDAsMSwxLDYwLDYwSDM2Wk0yMjAsMjEySDE2MGE2MC4xNCw2MC4xNCwwLDAsMS00OS0yNS4zNyw4My45Myw4My45MywwLDAsMCw2OC41NS05MS4zN0E2MCw2MCwwLDAsMSwyMjAsMTUyWiIvPjwvc3ZnPg==)
 */
export function PhChatsTeardropBoldIcon(props: PhChatsTeardropBoldIconProps) {
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
      <path d="M172.29,68.9A84,84,0,0,0,12,104v64a20,20,0,0,0,20,20H84.1A84.18,84.18,0,0,0,160,236h64a20,20,0,0,0,20-20V152A84,84,0,0,0,172.29,68.9ZM36,104a60,60,0,1,1,60,60H36ZM220,212H160a60.14,60.14,0,0,1-49-25.37,83.93,83.93,0,0,0,68.55-91.37A60,60,0,0,1,220,152Z"/>
    </svg>
  );
}
