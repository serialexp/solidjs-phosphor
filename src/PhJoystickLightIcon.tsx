import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhJoystickLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQ2SDEzNFY5My41MmEzOCwzOCwwLDEsMC0xMiwwVjE0Nkg0OGExNCwxNCwwLDAsMC0xNCwxNHY0OGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWMTYwQTE0LDE0LDAsMCwwLDIwOCwxNDZaTTEwMiw1NmEyNiwyNiwwLDEsMSwyNiwyNkEyNiwyNiwwLDAsMSwxMDIsNTZaTTIxMCwyMDhhMiwyLDAsMCwxLTIsMkg0OGEyLDIsMCwwLDEtMi0yVjE2MGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWm0tNDItOTRoMzJhNiw2LDAsMCwxLDAsMTJIMTY4YTYsNiwwLDAsMSwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhJoystickLightIcon(props: PhJoystickLightIconProps) {
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
      <path d="M208,146H134V93.52a38,38,0,1,0-12,0V146H48a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V160A14,14,0,0,0,208,146ZM102,56a26,26,0,1,1,26,26A26,26,0,0,1,102,56ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-42-94h32a6,6,0,0,1,0,12H168a6,6,0,0,1,0-12Z"/>
    </svg>
  );
}
