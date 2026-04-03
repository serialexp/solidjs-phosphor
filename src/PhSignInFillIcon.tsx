import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSignInFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDEuNjYsMTMzLjY2bC00MCw0MEE4LDgsMCwwLDEsODgsMTY4VjEzNkgyNGE4LDgsMCwwLDEsMC0xNkg4OFY4OGE4LDgsMCwwLDEsMTMuNjYtNS42Nmw0MCw0MEE4LDgsMCwwLDEsMTQxLjY2LDEzMy42NlpNMjAwLDMySDEzNmE4LDgsMCwwLDAsMCwxNmg1NlYyMDhIMTM2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCw4LThWNDBBOCw4LDAsMCwwLDIwMCwzMloiLz48L3N2Zz4=)
 */
export function PhSignInFillIcon(props: PhSignInFillIconProps) {
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
      <path d="M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"/>
    </svg>
  );
}
