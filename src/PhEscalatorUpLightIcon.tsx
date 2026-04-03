import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEscalatorUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDJIMTY4YTYsNiwwLDAsMC00LjQxLDEuOTNMNjkuMzcsMTQ2SDMyYTE0LDE0LDAsMCwwLTE0LDE0djQwYTE0LDE0LDAsMCwwLDE0LDE0SDg4YTYsNiwwLDAsMCw0LjQxLTEuOTNMMTg2LjYzLDExMEgyMjRhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjI0LDQyWm0yLDU0YTIsMiwwLDAsMS0yLDJIMTg0YTYsNiwwLDAsMC00LjQxLDEuOTNMODUuMzcsMjAySDMyYTIsMiwwLDAsMS0yLTJWMTYwYTIsMiwwLDAsMSwyLTJINzJhNiw2LDAsMCwwLDQuNDEtMS45M0wxNzAuNjMsNTRIMjI0YTIsMiwwLDAsMSwyLDJabTIuMjQsNzUuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwyMDYsMTY2LjQ5VjIwOGE2LDYsMCwwLDEtMTIsMFYxNjYuNDlsLTEzLjc2LDEzLjc1YTYsNiwwLDAsMS04LjQ4LTguNDhsMjQtMjRhNiw2LDAsMCwxLDguNDgsMFoiLz48L3N2Zz4=)
 */
export function PhEscalatorUpLightIcon(props: PhEscalatorUpLightIconProps) {
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
      <path d="M224,42H168a6,6,0,0,0-4.41,1.93L69.37,146H32a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H88a6,6,0,0,0,4.41-1.93L186.63,110H224a14,14,0,0,0,14-14V56A14,14,0,0,0,224,42Zm2,54a2,2,0,0,1-2,2H184a6,6,0,0,0-4.41,1.93L85.37,202H32a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H72a6,6,0,0,0,4.41-1.93L170.63,54H224a2,2,0,0,1,2,2Zm2.24,75.76a6,6,0,1,1-8.48,8.48L206,166.49V208a6,6,0,0,1-12,0V166.49l-13.76,13.75a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0Z"/>
    </svg>
  );
}
