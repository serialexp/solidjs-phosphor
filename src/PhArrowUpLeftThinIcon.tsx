import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTQuODMsMTk0LjgzYTQsNCwwLDAsMS01LjY2LDBMNjgsNzMuNjZWMTY4YTQsNCwwLDAsMS04LDBWNjRhNCw0LDAsMCwxLDQtNEgxNjhhNCw0LDAsMCwxLDAsOEg3My42NkwxOTQuODMsMTg5LjE3QTQsNCwwLDAsMSwxOTQuODMsMTk0LjgzWiIvPjwvc3ZnPg==)
 */
export function PhArrowUpLeftThinIcon(props: PhArrowUpLeftThinIconProps) {
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
      <path d="M194.83,194.83a4,4,0,0,1-5.66,0L68,73.66V168a4,4,0,0,1-8,0V64a4,4,0,0,1,4-4H168a4,4,0,0,1,0,8H73.66L194.83,189.17A4,4,0,0,1,194.83,194.83Z"/>
    </svg>
  );
}
