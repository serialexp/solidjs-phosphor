import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveTriangleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuODYsMTMxLjUxbC01Miw3MmE2LDYsMCwwLDEtOS43MiwwTDc2LDY2LjI1LDI4Ljg2LDEzMS41MWE2LDYsMCwxLDEtOS43Mi03bDUyLTcyYTYsNiwwLDAsMSw5LjcyLDBMMTgwLDE4OS43NWw0Ny4xNC02NS4yNmE2LDYsMCwwLDEsOS43Miw3WiIvPjwvc3ZnPg==)
 */
export function PhWaveTriangleLightIcon(props: PhWaveTriangleLightIconProps) {
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
      <path d="M236.86,131.51l-52,72a6,6,0,0,1-9.72,0L76,66.25,28.86,131.51a6,6,0,1,1-9.72-7l52-72a6,6,0,0,1,9.72,0L180,189.75l47.14-65.26a6,6,0,0,1,9.72,7Z"/>
    </svg>
  );
}
