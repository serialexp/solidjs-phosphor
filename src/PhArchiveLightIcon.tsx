import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArchiveLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWODhhMTQsMTQsMCwwLDAsMTQsMTRoMnY5MGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWMTAyaDJhMTQsMTQsMCwwLDAsMTQtMTRWNjRBMTQsMTQsMCwwLDAsMjI0LDUwWk0yMTAsMTkyYTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxMDJIMjEwWk0yMjYsODhhMiwyLDAsMCwxLTIsMkgzMmEyLDIsMCwwLDEtMi0yVjY0YTIsMiwwLDAsMSwyLTJIMjI0YTIsMiwwLDAsMSwyLDJaTTk4LDEzNmE2LDYsMCwwLDEsNi02aDQ4YTYsNiwwLDAsMSwwLDEySDEwNEE2LDYsMCwwLDEsOTgsMTM2WiIvPjwvc3ZnPg==)
 */
export function PhArchiveLightIcon(props: PhArchiveLightIconProps) {
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
      <path d="M224,50H32A14,14,0,0,0,18,64V88a14,14,0,0,0,14,14h2v90a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V102h2a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM210,192a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V102H210ZM226,88a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM98,136a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Z"/>
    </svg>
  );
}
