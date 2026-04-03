import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhYinYangLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wk0zOCwxMjhhOTAuMSw5MC4xLDAsMCwxLDkwLTkwLDQyLDQyLDAsMCwxLDAsODQsNTQsNTQsMCwwLDAtNDQuODgsODRBOTAuMDYsOTAuMDYsMCwwLDEsMzgsMTI4Wm05MCw5MGE0Miw0MiwwLDAsMSwwLTg0LDU0LDU0LDAsMCwwLDQ0Ljg4LTg0QTkwLDkwLDAsMCwxLDEyOCwyMThabTEwLTQyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwxNzZaTTExOCw4MGExMCwxMCwwLDEsMSwxMCwxMEExMCwxMCwwLDAsMSwxMTgsODBaIi8+PC9zdmc+)
 */
export function PhYinYangLightIcon(props: PhYinYangLightIconProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM38,128a90.1,90.1,0,0,1,90-90,42,42,0,0,1,0,84,54,54,0,0,0-44.88,84A90.06,90.06,0,0,1,38,128Zm90,90a42,42,0,0,1,0-84,54,54,0,0,0,44.88-84A90,90,0,0,1,128,218Zm10-42a10,10,0,1,1-10-10A10,10,0,0,1,138,176ZM118,80a10,10,0,1,1,10,10A10,10,0,0,1,118,80Z"/>
    </svg>
  );
}
