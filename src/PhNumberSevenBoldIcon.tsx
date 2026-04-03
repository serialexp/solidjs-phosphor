import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSevenBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuNDksNTEuNDVsLTQ4LDE2MEExMiwxMiwwLDAsMSwxMjAsMjIwYTExLjgyLDExLjgyLDAsMCwxLTMuNDUtLjUxLDEyLDEyLDAsMCwxLTgtMTQuOTRMMTUxLjg3LDYwSDg4YTEyLDEyLDAsMCwxLDAtMjRoODBhMTIsMTIsMCwwLDEsMTEuNDksMTUuNDVaIi8+PC9zdmc+)
 */
export function PhNumberSevenBoldIcon(props: PhNumberSevenBoldIconProps) {
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
      <path d="M179.49,51.45l-48,160A12,12,0,0,1,120,220a11.82,11.82,0,0,1-3.45-.51,12,12,0,0,1-8-14.94L151.87,60H88a12,12,0,0,1,0-24h80a12,12,0,0,1,11.49,15.45Z"/>
    </svg>
  );
}
