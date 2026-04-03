import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseLineLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEwSDIyMlYxMzEuMTdsNS43Niw1Ljc2YTYsNiwwLDAsMCw4LjQ4LTguNDlMMTM3LjksMzAuMDlhMTQsMTQsMCwwLDAtMTkuOCwwTDE5Ljc2LDEyOC40NGE2LDYsMCwwLDAsOC40OCw4LjQ5TDM0LDEzMS4xN1YyMTBIMTZhNiw2LDAsMCwwLDAsMTJIMjQwYTYsNiwwLDAsMCwwLTEyWk00NiwxMTkuMTdsODAuNTgtODAuNTlhMiwyLDAsMCwxLDIuODQsMEwyMTAsMTE5LjE3VjIxMEgxNThWMTUyYTYsNiwwLDAsMC02LTZIMTA0YTYsNiwwLDAsMC02LDZ2NThINDZaTTE0NiwyMTBIMTEwVjE1OGgzNloiLz48L3N2Zz4=)
 */
export function PhHouseLineLightIcon(props: PhHouseLineLightIconProps) {
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
      <path d="M240,210H222V131.17l5.76,5.76a6,6,0,0,0,8.48-8.49L137.9,30.09a14,14,0,0,0-19.8,0L19.76,128.44a6,6,0,0,0,8.48,8.49L34,131.17V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM46,119.17l80.58-80.59a2,2,0,0,1,2.84,0L210,119.17V210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46ZM146,210H110V158h36Z"/>
    </svg>
  );
}
