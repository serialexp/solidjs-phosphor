import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHeartStraightBreakIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMsNTdhNTguMSw1OC4xLDAsMCwwLTgyLS4wNkwxMjgsNjkuNDcsMTE1LDU2LjkxYTU4LDU4LDAsMCwwLTgyLDgyLjA1bDg5LjM3LDkwLjY2YTgsOCwwLDAsMCwxMS40LDBMMjIzLDEzOUE1OC4wOSw1OC4wOSwwLDAsMCwyMjMsNTdabS0xMS4zNiw3MC43NkwxMjgsMjEyLjYsNDQuMjksMTI3LjY4YTQyLDQyLDAsMSwxLDU5LjQxLTU5LjRsLjEuMSwxMi42NywxMi4xOS0xMCw5LjY1YTgsOCwwLDAsMC0uMTEsMTEuNDJMMTMyLjY5LDEyOGwtMTAuMzUsMTAuMzVhOCw4LDAsMCwwLDExLjMyLDExLjMybDE2LTE2YTgsOCwwLDAsMCwwLTExLjMxTDEyMy40Miw5Ni4wOSwxNTIuMiw2OC4zOGwuMTEtLjFhNDIsNDIsMCwxLDEsNTkuMzcsNTkuNDRaIi8+PC9zdmc+)
 */
export function PhHeartStraightBreakIcon(props: PhHeartStraightBreakIconProps) {
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
      <path d="M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z"/>
    </svg>
  );
}
