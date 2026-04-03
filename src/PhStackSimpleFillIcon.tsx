import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStackSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMiwxMTFsMTEyLDY0YTgsOCwwLDAsMCw3Ljk0LDBsMTEyLTY0YTgsOCwwLDAsMCwwLTEzLjlsLTExMi02NGE4LDgsMCwwLDAtNy45NCwwbC0xMTIsNjRBOCw4LDAsMCwwLDEyLDExMVoiLz48cGF0aCBkPSJNMjM2LDEzNy4wNSwxMjgsMTk4Ljc5LDIwLDEzNy4wNUE4LDgsMCwxLDAsMTIsMTUxbDExMiw2NGE4LDgsMCwwLDAsNy45NCwwbDExMi02NGE4LDgsMCwxLDAtNy45NC0xMy45WiIvPjwvc3ZnPg==)
 */
export function PhStackSimpleFillIcon(props: PhStackSimpleFillIconProps) {
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
      <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111Z"/><path d="M236,137.05,128,198.79,20,137.05A8,8,0,1,0,12,151l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,1,0-7.94-13.9Z"/>
    </svg>
  );
}
