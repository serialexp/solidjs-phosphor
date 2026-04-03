import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipForwardCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWk0xNjAsNzZhMTIsMTIsMCwwLDAtMTIsMTJ2MTguMzVMMTAyLjM2LDc3LjgyQTEyLDEyLDAsMCwwLDg0LDg4djgwYTEyLDEyLDAsMCwwLDE4LjM2LDEwLjE4TDE0OCwxNDkuNjVWMTY4YTEyLDEyLDAsMCwwLDI0LDBWODhBMTIsMTIsMCwwLDAsMTYwLDc2Wm0tNTIsNzAuMzV2LTM2LjdMMTM3LjM2LDEyOFoiLz48L3N2Zz4=)
 */
export function PhSkipForwardCircleBoldIcon(props: PhSkipForwardCircleBoldIconProps) {
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
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM160,76a12,12,0,0,0-12,12v18.35L102.36,77.82A12,12,0,0,0,84,88v80a12,12,0,0,0,18.36,10.18L148,149.65V168a12,12,0,0,0,24,0V88A12,12,0,0,0,160,76Zm-52,70.35v-36.7L137.36,128Z"/>
    </svg>
  );
}
