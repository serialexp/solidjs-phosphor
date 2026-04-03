import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiscThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0zNS43Nyw5NmEzNS43OCwzNS43OCwwLDAsMC03LjY2LTE4LjQ1bDM5LjY4LTM5LjY4QTkxLjY0LDkxLjY0LDAsMCwxLDIxOS45MSwxMjRaTTE1NiwxMjhhMjgsMjgsMCwxLDEtMjgtMjhBMjgsMjgsMCwwLDEsMTU2LDEyOFptLTI4LDkyQTkyLDkyLDAsMSwxLDE5MC4xMyw2MC4yMUwxNTAuNDUsOTkuODlBMzYsMzYsMCwxLDAsMTYzLjc3LDEzMmg1Ni4xNEE5Mi4xMSw5Mi4xMSwwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 */
export function PhDiscThinIcon(props: PhDiscThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm35.77,96a35.78,35.78,0,0,0-7.66-18.45l39.68-39.68A91.64,91.64,0,0,1,219.91,124ZM156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Zm-28,92A92,92,0,1,1,190.13,60.21L150.45,99.89A36,36,0,1,0,163.77,132h56.14A92.11,92.11,0,0,1,128,220Z"/>
    </svg>
  );
}
