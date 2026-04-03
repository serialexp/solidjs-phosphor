import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToggleRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNTJIODBhNzYsNzYsMCwwLDAsMCwxNTJoOTZhNzYsNzYsMCwwLDAsMC0xNTJabTAsMTI4SDgwQTUyLDUyLDAsMCwxLDgwLDc2aDk2YTUyLDUyLDAsMCwxLDAsMTA0Wm0wLTkyYTQwLDQwLDAsMSwwLDQwLDQwQTQwLDQwLDAsMCwwLDE3Niw4OFptMCw1NmExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxNzYsMTQ0WiIvPjwvc3ZnPg==)
 */
export function PhToggleRightBoldIcon(props: PhToggleRightBoldIconProps) {
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
      <path d="M176,52H80a76,76,0,0,0,0,152h96a76,76,0,0,0,0-152Zm0,128H80A52,52,0,0,1,80,76h96a52,52,0,0,1,0,104Zm0-92a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z"/>
    </svg>
  );
}
