import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGlobeStandBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTc2YTcyLDcyLDAsMSwwLTcyLTcyQTcyLjA4LDcyLjA4LDAsMCwwLDEzNiwxNzZabTAtMTIwYTQ4LDQ4LDAsMSwxLTQ4LDQ4QTQ4LjA1LDQ4LjA1LDAsMCwxLDEzNiw1NlptMTIsMTU5LjM1VjIyOGgyMGExMiwxMiwwLDAsMSwwLDI0SDEwNGExMiwxMiwwLDAsMSwwLTI0aDIwVjIxNS4zNkExMTIsMTEyLDAsMCwxLDUzLjg4LDI3Ljg0LDEyLDEyLDAsMSwxLDcxLjQ3LDQ0LjE2LDg4LDg4LDAsMCwwLDE5NS44NCwxNjguNTNhMTIsMTIsMCwxLDEsMTYuMzIsMTcuNTlBMTExLjUxLDExMS41MSwwLDAsMSwxNDgsMjE1LjM1WiIvPjwvc3ZnPg==)
 */
export function PhGlobeStandBoldIcon(props: PhGlobeStandBoldIconProps) {
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
      <path d="M136,176a72,72,0,1,0-72-72A72.08,72.08,0,0,0,136,176Zm0-120a48,48,0,1,1-48,48A48.05,48.05,0,0,1,136,56Zm12,159.35V228h20a12,12,0,0,1,0,24H104a12,12,0,0,1,0-24h20V215.36A112,112,0,0,1,53.88,27.84,12,12,0,1,1,71.47,44.16,88,88,0,0,0,195.84,168.53a12,12,0,1,1,16.32,17.59A111.51,111.51,0,0,1,148,215.35Z"/>
    </svg>
  );
}
