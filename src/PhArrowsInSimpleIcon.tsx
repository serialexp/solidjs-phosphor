import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsNTMuNjYsMTYzLjMxLDEwNEgxOTJhOCw4LDAsMCwxLDAsMTZIMTQ0YTgsOCwwLDAsMS04LThWNjRhOCw4LDAsMCwxLDE2LDBWOTIuNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWk0xMTIsMTM2SDY0YTgsOCwwLDAsMCwwLDE2SDkyLjY5TDQyLjM0LDIwMi4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJMMTA0LDE2My4zMVYxOTJhOCw4LDAsMCwwLDE2LDBWMTQ0QTgsOCwwLDAsMCwxMTIsMTM2WiIvPjwvc3ZnPg==)
 */
export function PhArrowsInSimpleIcon(props: PhArrowsInSimpleIconProps) {
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
      <path d="M213.66,53.66,163.31,104H192a8,8,0,0,1,0,16H144a8,8,0,0,1-8-8V64a8,8,0,0,1,16,0V92.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0,0,16H92.69L42.34,202.34a8,8,0,0,0,11.32,11.32L104,163.31V192a8,8,0,0,0,16,0V144A8,8,0,0,0,112,136Z"/>
    </svg>
  );
}
