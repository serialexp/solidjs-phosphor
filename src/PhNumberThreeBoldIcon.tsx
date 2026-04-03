import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberThreeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTYwQTYwLDYwLDAsMCwxLDgwLDIwNC43MmExMiwxMiwwLDEsMSwxNi0xNy44OEEzNiwzNiwwLDEsMCwxMjAsMTI0YTEyLDEyLDAsMCwxLTkuNi0xOS4yTDE0NCw2MEg4OGExMiwxMiwwLDAsMSwwLTI0aDgwYTEyLDEyLDAsMCwxLDkuNiwxOS4ybC0zNi40OCw0OC42NEE2MC4xMSw2MC4xMSwwLDAsMSwxODAsMTYwWiIvPjwvc3ZnPg==)
 */
export function PhNumberThreeBoldIcon(props: PhNumberThreeBoldIconProps) {
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
      <path d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88A36,36,0,1,0,120,124a12,12,0,0,1-9.6-19.2L144,60H88a12,12,0,0,1,0-24h80a12,12,0,0,1,9.6,19.2l-36.48,48.64A60.11,60.11,0,0,1,180,160Z"/>
    </svg>
  );
}
