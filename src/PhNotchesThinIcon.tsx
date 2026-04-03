import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotchesThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsMTMwLjgzbC04MCw4MGE0LDQsMCwxLDEtNS42Ni01LjY2bDgwLTgwYTQsNCwwLDEsMSw1LjY2LDUuNjZabS0xNi05My42NmE0LDQsMCwwLDAtNS42NiwwbC0xNTIsMTUyYTQsNCwwLDAsMCw1LjY2LDUuNjZsMTUyLTE1MkE0LDQsMCwwLDAsMTk0LjgzLDM3LjE3WiIvPjwvc3ZnPg==)
 */
export function PhNotchesThinIcon(props: PhNotchesThinIconProps) {
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
      <path d="M210.83,130.83l-80,80a4,4,0,1,1-5.66-5.66l80-80a4,4,0,1,1,5.66,5.66Zm-16-93.66a4,4,0,0,0-5.66,0l-152,152a4,4,0,0,0,5.66,5.66l152-152A4,4,0,0,0,194.83,37.17Z"/>
    </svg>
  );
}
