import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTumblrLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTIwdjQ4YTgsOCwwLDAsMCw4LDhoMzJhOCw4LDAsMCwxLDgsOHY0OGE4LDgsMCwwLDEtOCw4SDE1MmE2NC4wNyw2NC4wNywwLDAsMS02NC02NFYxMjBINjRhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04LDQwLDQwLDAsMCwwLDQwLTQwLDgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDgsOFY2NGg0MGE4LDgsMCwwLDEsOCw4djQwYTgsOCwwLDAsMS04LDhaIi8+PC9zdmc+)
 */
export function PhTumblrLogoFillIcon(props: PhTumblrLogoFillIconProps) {
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
      <path d="M152,120v48a8,8,0,0,0,8,8h32a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H152a64.07,64.07,0,0,1-64-64V120H64a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8,40,40,0,0,0,40-40,8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8Z"/>
    </svg>
  );
}
