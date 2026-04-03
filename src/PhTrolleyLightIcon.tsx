import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrolleyLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NiwyMjRhMTQsMTQsMCwxLDEtMTQtMTRBMTQsMTQsMCwwLDEsODYsMjI0Wm0xMzAtMTRhMTQsMTQsMCwxLDAsMTQsMTRBMTQsMTQsMCwwLDAsMjE2LDIxMFptMjQtMzJINTRWNzUuMzFhMTMuOTQsMTMuOTQsMCwwLDAtNC4xLTkuOUwyOC4yNCw0My43NmE2LDYsMCwxLDAtOC40OCw4LjQ4TDQxLjQxLDczLjlBMiwyLDAsMCwxLDQyLDc1LjMxVjE3OEgzMmE2LDYsMCwwLDAsMCwxMkgyNDBhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhTrolleyLightIcon(props: PhTrolleyLightIconProps) {
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
      <path d="M86,224a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm130-14a14,14,0,1,0,14,14A14,14,0,0,0,216,210Zm24-32H54V75.31a13.94,13.94,0,0,0-4.1-9.9L28.24,43.76a6,6,0,1,0-8.48,8.48L41.41,73.9A2,2,0,0,1,42,75.31V178H32a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
