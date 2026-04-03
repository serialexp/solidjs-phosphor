import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNotesFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuOTIsMTcuNzFhNy44OSw3Ljg5LDAsMCwwLTYuODYtMS40NmwtMTI4LDMyQTgsOCwwLDAsMCw3Miw1NlYxNjYuMUEzNiwzNiwwLDEsMCw4OCwxOTZWMTAyLjI1bDExMi0yOFYxMzQuMUEzNiwzNiwwLDEsMCwyMTYsMTY0VjI0QTgsOCwwLDAsMCwyMTIuOTIsMTcuNzFaIi8+PC9zdmc+)
 */
export function PhMusicNotesFillIcon(props: PhMusicNotesFillIconProps) {
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
      <path d="M212.92,17.71a7.89,7.89,0,0,0-6.86-1.46l-128,32A8,8,0,0,0,72,56V166.1A36,36,0,1,0,88,196V102.25l112-28V134.1A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.71Z"/>
    </svg>
  );
}
