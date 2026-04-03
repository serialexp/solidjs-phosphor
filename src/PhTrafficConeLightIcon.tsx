import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrafficConeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjEwSDIxMi4yN0wxNTEuNTQsMzUuNEExNCwxNCwwLDAsMCwxMzguMzEsMjZIMTE3LjY5YTE0LDE0LDAsMCwwLTEzLjIzLDkuNEw0My43MywyMTBIMjRhNiw2LDAsMCwwLDAsMTJIMjMyYTYsNiwwLDAsMCwwLTEyWk05NCwxMDJoNjhsMTguMDgsNTJINzUuOTJabTIxLjgtNjIuNjZBMiwyLDAsMCwxLDExNy42OSwzOGgyMC42MmEyLDIsMCwwLDEsMS44OSwxLjM0TDE1Ny44Miw5MEg5OC4xOFpNNzEuNzQsMTY2SDE4NC4yNmwxNS4zLDQ0SDU2LjQ0WiIvPjwvc3ZnPg==)
 */
export function PhTrafficConeLightIcon(props: PhTrafficConeLightIconProps) {
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
      <path d="M232,210H212.27L151.54,35.4A14,14,0,0,0,138.31,26H117.69a14,14,0,0,0-13.23,9.4L43.73,210H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM94,102h68l18.08,52H75.92Zm21.8-62.66A2,2,0,0,1,117.69,38h20.62a2,2,0,0,1,1.89,1.34L157.82,90H98.18ZM71.74,166H184.26l15.3,44H56.44Z"/>
    </svg>
  );
}
