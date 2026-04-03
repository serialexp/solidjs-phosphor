import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhXThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuODMsMTk3LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZMMTI4LDEzMy42Niw1OC44MywyMDIuODNhNCw0LDAsMCwxLTUuNjYtNS42NkwxMjIuMzQsMTI4LDUzLjE3LDU4LjgzYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDEyMi4zNGw2OS4xNy02OS4xN2E0LDQsMCwxLDEsNS42Niw1LjY2TDEzMy42NiwxMjhaIi8+PC9zdmc+)
 */
export function PhXThinIcon(props: PhXThinIconProps) {
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
      <path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"/>
    </svg>
  );
}
