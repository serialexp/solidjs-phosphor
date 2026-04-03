import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPintGlassBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDksMjRhMTIsMTIsMCwwLDAtOS00SDU2QTEyLDEyLDAsMCwwLDQ0LjA5LDMzLjQzbDIzLjE1LDE5M0EyMCwyMCwwLDAsMCw4Ny4xLDI0NGg4MS44YTIwLDIwLDAsMCwwLDE5Ljg2LTE3LjYyTDIxMS45MSwzMy40M0ExMiwxMiwwLDAsMCwyMDksMjRaTTE4Ni40Nyw0NGwtMS45MiwxNkg3MS40NUw2OS41Myw0NFpNMTY1LjM1LDIyMEg5MC42NUw3NC4zMyw4NEgxODEuNjdaIi8+PC9zdmc+)
 */
export function PhPintGlassBoldIcon(props: PhPintGlassBoldIconProps) {
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
      <path d="M209,24a12,12,0,0,0-9-4H56A12,12,0,0,0,44.09,33.43l23.15,193A20,20,0,0,0,87.1,244h81.8a20,20,0,0,0,19.86-17.62L211.91,33.43A12,12,0,0,0,209,24ZM186.47,44l-1.92,16H71.45L69.53,44ZM165.35,220H90.65L74.33,84H181.67Z"/>
    </svg>
  );
}
