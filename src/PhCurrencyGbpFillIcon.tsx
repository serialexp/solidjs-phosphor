import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyGbpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm00MCwxNjBIODhhOCw4LDAsMCwxLDAtMTYsMTYsMTYsMCwwLDAsMTYtMTZWMTM2SDg4YTgsOCwwLDAsMSwwLTE2aDE2Vjk2YTQwLDQwLDAsMCwxLDYwLTM0LjY0LDgsOCwwLDAsMS04LDEzLjg1QTI0LDI0LDAsMCwwLDEyMCw5NnYyNGgxNmE4LDgsMCwwLDEsMCwxNkgxMjB2MTZhMzEuNzEsMzEuNzEsMCwwLDEtNC4zMSwxNkgxNjhhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhCurrencyGbpFillIcon(props: PhCurrencyGbpFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,160H88a8,8,0,0,1,0-16,16,16,0,0,0,16-16V136H88a8,8,0,0,1,0-16h16V96a40,40,0,0,1,60-34.64,8,8,0,0,1-8,13.85A24,24,0,0,0,120,96v24h16a8,8,0,0,1,0,16H120v16a31.71,31.71,0,0,1-4.31,16H168a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
