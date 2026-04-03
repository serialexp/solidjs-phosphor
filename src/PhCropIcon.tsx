import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCropIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyYTgsOCwwLDAsMS04LDhIMjAwdjMyYTgsOCwwLDAsMS0xNiwwVjIwMEg2NGE4LDgsMCwwLDEtOC04VjcySDI0YTgsOCwwLDAsMSwwLTE2SDU2VjI0YTgsOCwwLDAsMSwxNiwwVjE4NEgyMzJBOCw4LDAsMCwxLDI0MCwxOTJaTTk2LDcyaDg4djg4YTgsOCwwLDAsMCwxNiwwVjY0YTgsOCwwLDAsMC04LThIOTZhOCw4LDAsMCwwLDAsMTZaIi8+PC9zdmc+)
 */
export function PhCropIcon(props: PhCropIconProps) {
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
      <path d="M240,192a8,8,0,0,1-8,8H200v32a8,8,0,0,1-16,0V200H64a8,8,0,0,1-8-8V72H24a8,8,0,0,1,0-16H56V24a8,8,0,0,1,16,0V184H232A8,8,0,0,1,240,192ZM96,72h88v88a8,8,0,0,0,16,0V64a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
