import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMarkerCircleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm00MCwxODIuMzdhODcuODksODcuODksMCwwLDEtODAsMFYxNzZoODBaTTEwNCwxNjBWMTQ0aDQ4djE2Wm04MCwzNS44M1YxNzZhMTYsMTYsMCwwLDAtMTYtMTZWMTQ0YTE2LDE2LDAsMCwwLTEzLjYxLTE1LjhMMTQzLjY2LDc2Ljc0YTE2LDE2LDAsMCwwLTMxLjMyLDBMMTAxLjYxLDEyOC4yQTE2LDE2LDAsMCwwLDg4LDE0NHYxNmExNiwxNiwwLDAsMC0xNiwxNnYxOS44M2E4OCw4OCwwLDEsMSwxMTIsMFoiLz48L3N2Zz4=)
 */
export function PhMarkerCircleFillIcon(props: PhMarkerCircleFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,182.37a87.89,87.89,0,0,1-80,0V176h80ZM104,160V144h48v16Zm80,35.83V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.83a88,88,0,1,1,112,0Z"/>
    </svg>
  );
}
