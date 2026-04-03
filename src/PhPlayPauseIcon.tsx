import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlayPauseIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjRWMTkyYTgsOCwwLDAsMS0xNiwwVjY0YTgsOCwwLDAsMSwxNiwwWm00MC04YTgsOCwwLDAsMC04LDhWMTkyYTgsOCwwLDAsMCwxNiwwVjY0QTgsOCwwLDAsMCwyMjQsNTZabS04MCw3MmExNS43NiwxNS43NiwwLDAsMS03LjMzLDEzLjM0TDQ4LjQ4LDE5Ny40OUExNS45MSwxNS45MSwwLDAsMSwyNCwxODQuMTVWNzEuODVBMTUuOTEsMTUuOTEsMCwwLDEsNDguNDgsNTguNTFsODguMTksNTYuMTVBMTUuNzYsMTUuNzYsMCwwLDEsMTQ0LDEyOFptLTE2LjE4LDBMNDAsNzIuMDhWMTgzLjkzWiIvPjwvc3ZnPg==)
 */
export function PhPlayPauseIcon(props: PhPlayPauseIconProps) {
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
      <path d="M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z"/>
    </svg>
  );
}
