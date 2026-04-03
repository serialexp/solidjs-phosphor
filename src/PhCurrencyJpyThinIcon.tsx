import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyJpyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDMuMSw1MC41MywxMzYuNDQsMTMySDE3NmE0LDQsMCwwLDEsMCw4SDEzMnYyNGg0NGE0LDQsMCwwLDEsMCw4SDEzMnY0NGE0LDQsMCwwLDEtOCwwVjE3Mkg4MGE0LDQsMCwwLDEsMC04aDQ0VjE0MEg4MGE0LDQsMCwwLDEsMC04aDM5LjU2TDUyLjksNTAuNTNhNCw0LDAsMCwxLDYuMi01LjA2TDEyOCwxMjkuNjhsNjguOS04NC4yMWE0LDQsMCwxLDEsNi4yLDUuMDZaIi8+PC9zdmc+)
 */
export function PhCurrencyJpyThinIcon(props: PhCurrencyJpyThinIconProps) {
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
      <path d="M203.1,50.53,136.44,132H176a4,4,0,0,1,0,8H132v24h44a4,4,0,0,1,0,8H132v44a4,4,0,0,1-8,0V172H80a4,4,0,0,1,0-8h44V140H80a4,4,0,0,1,0-8h39.56L52.9,50.53a4,4,0,0,1,6.2-5.06L128,129.68l68.9-84.21a4,4,0,1,1,6.2,5.06Z"/>
    </svg>
  );
}
