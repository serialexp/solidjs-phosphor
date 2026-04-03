import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTwitchLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDY0djMyYTgsOCwwLDAsMCwxMy4xMiw2LjE1TDEyMi45LDIwOGg0Mi4yYTE2LDE2LDAsMCwwLDEwLjI1LTMuNzFsNDIuODktMzUuNzVBMTUuOTMsMTUuOTMsMCwwLDAsMjI0LDE1Ni4yNVY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCwxMzZhOCw4LDAsMCwxLTE2LDBWODhhOCw4LDAsMCwxLDE2LDBabTQ4LDBhOCw4LDAsMCwxLTE2LDBWODhhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 */
export function PhTwitchLogoFillIcon(props: PhTwitchLogoFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a8,8,0,0,0,13.12,6.15L122.9,208h42.2a16,16,0,0,0,10.25-3.71l42.89-35.75A15.93,15.93,0,0,0,224,156.25V48A16,16,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
