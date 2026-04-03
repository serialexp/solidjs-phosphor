import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSockFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTZIMTA0QTE2LDE2LDAsMCwwLDg4LDMydjc2LjY5TDQ5LjI1LDE0Ny40M2E1OC45Miw1OC45MiwwLDAsMCw4My4zMiw4My4zMkwyMDEsMTYyLjM0YTIzLjg1LDIzLjg1LDAsMCwwLDctMTdWMzJBMTYsMTYsMCwwLDAsMTkyLDE2Wm0wLDE2aDBWNTZIMTA0VjMyWm0tMi4zNCwxMTlMMTU3LjgsMTgyLjg4YTQ4LDQ4LDAsMCwxLDM0LjItNzAuMnYzMi42OUE4LDgsMCwwLDEsMTg5LjY2LDE1MVoiLz48L3N2Zz4=)
 */
export function PhSockFillIcon(props: PhSockFillIconProps) {
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
      <path d="M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z"/>
    </svg>
  );
}
