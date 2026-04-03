import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCarProfileBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTA4SDIxM0wxNzAuODMsNjUuODZBMTkuODYsMTkuODYsMCwwLDAsMTU2LjY5LDYwSDQ4LjI4YTIwLDIwLDAsMCwwLTE2LjY0LDguOTFMMiwxMTMuMzRBMTIsMTIsMCwwLDAsMCwxMjB2NDhhMjAsMjAsMCwwLDAsMjAsMjBIMzMuNWEzNCwzNCwwLDAsMCw2NSwwaDU5YTM0LDM0LDAsMCwwLDY1LDBIMjM2YTIwLDIwLDAsMCwwLDIwLTIwVjEyOEEyMCwyMCwwLDAsMCwyMzYsMTA4Wk01MC40Miw4NEgxNTVsMjQsMjRIMzQuNDJaTTY2LDE4OGExMCwxMCwwLDEsMSwxMC0xMEExMCwxMCwwLDAsMSw2NiwxODhabTEyNCwwYTEwLDEwLDAsMSwxLDEwLTEwQTEwLDEwLDAsMCwxLDE5MCwxODhabTQyLTI0SDIyMUEzNCwzNCwwLDAsMCwxNTksMTY0SDk3QTM0LDM0LDAsMCwwLDM1LDE2NEgyNFYxMzJIMjMyWiIvPjwvc3ZnPg==)
 */
export function PhCarProfileBoldIcon(props: PhCarProfileBoldIconProps) {
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
      <path d="M236,108H213L170.83,65.86A19.86,19.86,0,0,0,156.69,60H48.28a20,20,0,0,0-16.64,8.91L2,113.34A12,12,0,0,0,0,120v48a20,20,0,0,0,20,20H33.5a34,34,0,0,0,65,0h59a34,34,0,0,0,65,0H236a20,20,0,0,0,20-20V128A20,20,0,0,0,236,108ZM50.42,84H155l24,24H34.42ZM66,188a10,10,0,1,1,10-10A10,10,0,0,1,66,188Zm124,0a10,10,0,1,1,10-10A10,10,0,0,1,190,188Zm42-24H221A34,34,0,0,0,159,164H97A34,34,0,0,0,35,164H24V132H232Z"/>
    </svg>
  );
}
