import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSigmaIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNzJWNTZIODAuNjVsNTMuNiw2N2E4LDgsMCwwLDEsMCwxMGwtNTMuNiw2N0gxODRWMTg0YTgsOCwwLDAsMSwxNiwwdjI0YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTYuMjUtMTNsNjAtNzUtNjAtNzVBOCw4LDAsMCwxLDY0LDQwSDE5MmE4LDgsMCwwLDEsOCw4VjcyYTgsOCwwLDAsMS0xNiwwWiIvPjwvc3ZnPg==)
 */
export function PhSigmaIcon(props: PhSigmaIconProps) {
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
      <path d="M184,72V56H80.65l53.6,67a8,8,0,0,1,0,10l-53.6,67H184V184a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H64a8,8,0,0,1-6.25-13l60-75-60-75A8,8,0,0,1,64,40H192a8,8,0,0,1,8,8V72a8,8,0,0,1-16,0Z"/>
    </svg>
  );
}
