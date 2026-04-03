import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCounterClockwiseThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTkyLDkyLDAsMCwxLTkwLjc3LDkySDEyOGE5MS40Nyw5MS40NywwLDAsMS02My4xMy0yNS4xLDQsNCwwLDEsMSw1LjUtNS44MkE4NCw4NCwwLDEsMCw2OC42LDY4LjU3bC0uMTMuMTJMMzQuMywxMDBINzJhNCw0LDAsMCwxLDAsOEgyNGE0LDQsMCwwLDEtNC00VjU2YTQsNCwwLDAsMSw4LDBWOTQuODlsMzUtMzJBOTIsOTIsMCwwLDEsMjIwLDEyOFoiLz48L3N2Zz4=)
 */
export function PhArrowCounterClockwiseThinIcon(props: PhArrowCounterClockwiseThinIconProps) {
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
      <path d="M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"/>
    </svg>
  );
}
