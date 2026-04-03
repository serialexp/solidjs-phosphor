import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsODBWMjI0YTQsNCwwLDAsMS04LDBWODRINTcuNjZsNDEuMTcsNDEuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtNDgtNDhhNCw0LDAsMCwxLDAtNS42Nmw0OC00OGE0LDQsMCwwLDEsNS42Niw1LjY2TDU3LjY2LDc2SDE5MkE0LDQsMCwwLDEsMTk2LDgwWiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowUpLeftThinIcon(props: PhArrowElbowUpLeftThinIconProps) {
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
      <path d="M196,80V224a4,4,0,0,1-8,0V84H57.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L57.66,76H192A4,4,0,0,1,196,80Z"/>
    </svg>
  );
}
