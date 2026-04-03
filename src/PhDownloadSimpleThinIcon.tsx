import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDownloadSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTQ0djY0YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFYxNDRhNCw0LDAsMCwxLDgsMHY2MEgyMTJWMTQ0YTQsNCwwLDAsMSw4LDBabS05NC44MywyLjgzYTQsNCwwLDAsMCw1LjY2LDBsNDAtNDBhNCw0LDAsMSwwLTUuNjYtNS42NkwxMzIsMTM0LjM0VjMyYTQsNCwwLDAsMC04LDBWMTM0LjM0TDkwLjgzLDEwMS4xN2E0LDQsMCwwLDAtNS42Niw1LjY2WiIvPjwvc3ZnPg==)
 */
export function PhDownloadSimpleThinIcon(props: PhDownloadSimpleThinIconProps) {
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
      <path d="M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"/>
    </svg>
  );
}
