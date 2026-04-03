import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPillLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUsNDFhNTEuMjgsNTEuMjgsMCwwLDAtNzIuNSwwTDQxLDE0Mi41QTUxLjI2LDUxLjI2LDAsMCwwLDExMy40OSwyMTVMMjE1LDExMy41QTUxLjMxLDUxLjMxLDAsMCwwLDIxNSw0MVpNMTA1LDIwNi41QTM5LjI2LDM5LjI2LDAsMCwxLDQ5LjQ4LDE1MUw5NiwxMDQuNDksMTUxLjUyLDE2MFpNMjA2LjUyLDEwNSwxNjAsMTUxLjUxLDEwNC40OCw5NiwxNTEsNDkuNUEzOS4yNiwzOS4yNiwwLDAsMSwyMDYuNTIsMTA1Wk0xODguMjYsODMuNzZhNiw2LDAsMCwxLDAsOC40OGwtMjQsMjRhNiw2LDAsMCwxLTguNDktOC40OGwyNC0yNEE2LDYsMCwwLDEsMTg4LjI2LDgzLjc2WiIvPjwvc3ZnPg==)
 */
export function PhPillLightIcon(props: PhPillLightIconProps) {
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
      <path d="M215,41a51.28,51.28,0,0,0-72.5,0L41,142.5A51.26,51.26,0,0,0,113.49,215L215,113.5A51.31,51.31,0,0,0,215,41ZM105,206.5A39.26,39.26,0,0,1,49.48,151L96,104.49,151.52,160ZM206.52,105,160,151.51,104.48,96,151,49.5A39.26,39.26,0,0,1,206.52,105ZM188.26,83.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.49-8.48l24-24A6,6,0,0,1,188.26,83.76Z"/>
    </svg>
  );
}
