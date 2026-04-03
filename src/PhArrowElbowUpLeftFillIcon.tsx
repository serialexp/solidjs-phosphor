import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsODBWMjI0YTgsOCwwLDAsMS0xNiwwVjg4SDEwNHY0MGE4LDgsMCwwLDEtMTMuNjYsNS42NmwtNDgtNDhhOCw4LDAsMCwxLDAtMTEuMzJsNDgtNDhBOCw4LDAsMCwxLDEwNCwzMlY3Mmg4OEE4LDgsMCwwLDEsMjAwLDgwWiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowUpLeftFillIcon(props: PhArrowElbowUpLeftFillIconProps) {
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
      <path d="M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z"/>
    </svg>
  );
}
