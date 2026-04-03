import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFilesLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsNjcuNzZsLTQwLTQwQTYsNiwwLDAsMCwxNjgsMjZIODhBMTQsMTQsMCwwLDAsNzQsNDBWNThINTZBMTQsMTQsMCwwLDAsNDIsNzJWMjE2YTE0LDE0LDAsMCwwLDE0LDE0SDE2OGExNCwxNCwwLDAsMCwxNC0xNFYxOThoMThhMTQsMTQsMCwwLDAsMTQtMTRWNzJBNiw2LDAsMCwwLDIxMi4yNCw2Ny43NlpNMTcwLDIxNmEyLDIsMCwwLDEtMiwySDU2YTIsMiwwLDAsMS0yLTJWNzJhMiwyLDAsMCwxLDItMmg3Ny41MUwxNzAsMTA2LjQ5Wm0zMi0zMmEyLDIsMCwwLDEtMiwySDE4MlYxMDRhNiw2LDAsMCwwLTEuNzYtNC4yNGwtNDAtNDBBNiw2LDAsMCwwLDEzNiw1OEg4NlY0MGEyLDIsMCwwLDEsMi0yaDc3LjUxTDIwMiw3NC40OVptLTYwLTMyYTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLDAtMTJoNDhBNiw2LDAsMCwxLDE0MiwxNTJabTAsMzJhNiw2LDAsMCwxLTYsNkg4OGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMTQyLDE4NFoiLz48L3N2Zz4=)
 */
export function PhFilesLightIcon(props: PhFilesLightIconProps) {
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
      <path d="M212.24,67.76l-40-40A6,6,0,0,0,168,26H88A14,14,0,0,0,74,40V58H56A14,14,0,0,0,42,72V216a14,14,0,0,0,14,14H168a14,14,0,0,0,14-14V198h18a14,14,0,0,0,14-14V72A6,6,0,0,0,212.24,67.76ZM170,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h77.51L170,106.49Zm32-32a2,2,0,0,1-2,2H182V104a6,6,0,0,0-1.76-4.24l-40-40A6,6,0,0,0,136,58H86V40a2,2,0,0,1,2-2h77.51L202,74.49Zm-60-32a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,152Zm0,32a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,184Z"/>
    </svg>
  );
}
