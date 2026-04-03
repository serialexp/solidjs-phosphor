import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDBhNiw2LDAsMCwxLTYsNkg0MGE2LDYsMCwwLDEsMC0xMkgyMTZBNiw2LDAsMCwxLDIyMiw0MFpNMTkyLDk4YTYsNiwwLDAsMC02LDZ2ODEuNTJMODQuMjQsODMuNzZhNiw2LDAsMCwwLTguNDgsOC40OEwxNzcuNTIsMTk0SDk2YTYsNiwwLDAsMCwwLDEyaDk2YTYsNiwwLDAsMCw2LTZWMTA0QTYsNiwwLDAsMCwxOTIsOThaIi8+PC9zdmc+)
 */
export function PhArrowLineDownRightLightIcon(props: PhArrowLineDownRightLightIconProps) {
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
      <path d="M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM192,98a6,6,0,0,0-6,6v81.52L84.24,83.76a6,6,0,0,0-8.48,8.48L177.52,194H96a6,6,0,0,0,0,12h96a6,6,0,0,0,6-6V104A6,6,0,0,0,192,98Z"/>
    </svg>
  );
}
