import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFlameFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuNzksNTEuNDhhMjIxLjI1LDIyMS4yNSwwLDAsMC00MS42Ny0zNC4zNCw4LDgsMCwwLDAtOC4yNCwwQTIyMS4yNSwyMjEuMjUsMCwwLDAsODIuMjEsNTEuNDhDNTQuNTksODAuNDgsNDAsMTEyLjQ3LDQwLDE0NGE4OCw4OCwwLDAsMCwxNzYsMEMyMTYsMTEyLjQ3LDIwMS40MSw4MC40OCwxNzMuNzksNTEuNDhaTTk2LDE4NGMwLTI3LjY3LDIyLjUzLTQ3LjI4LDMyLTU0LjMsOS40OCw3LDMyLDI2LjYzLDMyLDU0LjNhMzIsMzIsMCwwLDEtNjQsMFoiLz48L3N2Zz4=)
 */
export function PhFlameFillIcon(props: PhFlameFillIconProps) {
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
      <path d="M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Z"/>
    </svg>
  );
}
