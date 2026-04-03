import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMTQsMTA1Ljg1bC04MC04MGEyMCwyMCwwLDAsMC0yOC4yOCwwbC04MCw4MEExOS44NiwxOS44NiwwLDAsMCwyOCwxMjB2OTZhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExOS44NiwxOS44NiwwLDAsMCwyMjIuMTQsMTA1Ljg1Wk0yMDQsMjA0SDUyVjEyMS42NWw3Ni03Niw3Niw3NloiLz48L3N2Zz4=)
 */
export function PhHouseSimpleBoldIcon(props: PhHouseSimpleBoldIconProps) {
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
      <path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H52V121.65l76-76,76,76Z"/>
    </svg>
  );
}
