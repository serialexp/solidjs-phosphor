import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartBarHorizontalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOThIMTgyVjU2YTYsNiwwLDAsMC02LTZINTRWNDBhNiw2LDAsMCwwLTEyLDBWMjE2YTYsNiwwLDAsMCwxMiwwVjIwNmg5MGE2LDYsMCwwLDAsNi02VjE1OGg3NGE2LDYsMCwwLDAsNi02VjEwNEE2LDYsMCwwLDAsMjI0LDk4Wk0xNzAsNjJWOThINTRWNjJaTTEzOCwxOTRINTRWMTU4aDg0Wm04MC00OEg1NFYxMTBIMjE4WiIvPjwvc3ZnPg==)
 */
export function PhChartBarHorizontalLightIcon(props: PhChartBarHorizontalLightIconProps) {
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
      <path d="M224,98H182V56a6,6,0,0,0-6-6H54V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V206h90a6,6,0,0,0,6-6V158h74a6,6,0,0,0,6-6V104A6,6,0,0,0,224,98ZM170,62V98H54V62ZM138,194H54V158h84Zm80-48H54V110H218Z"/>
    </svg>
  );
}
