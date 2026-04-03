import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMicroscopeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMjEwSDE5OS41M0E4NS4yLDg1LjIsMCwwLDAsMjIyLDE1MmE4Ni4xLDg2LjEsMCwwLDAtODAtODUuNzdWMzJhMTQsMTQsMCwwLDAtMTQtMTRIODBBMTQsMTQsMCwwLDAsNjYsMzJWMTM2YTE0LDE0LDAsMCwwLDE0LDE0aDQ4YTE0LDE0LDAsMCwwLDE0LTE0Vjc4LjI2QTc0LDc0LDAsMCwxLDE4MiwyMTBIMzJhNiw2LDAsMCwwLDAsMTJIMjI0YTYsNiwwLDAsMCwwLTEyWm0tOTQtNzRhMiwyLDAsMCwxLTIsMkg4MGEyLDIsMCwwLDEtMi0yVjMyYTIsMiwwLDAsMSwyLTJoNDhhMiwyLDAsMCwxLDIsMlpNNzIsMTgyYTYsNiwwLDAsMSwwLTEyaDY0YTYsNiwwLDAsMSwwLDEyWiIvPjwvc3ZnPg==)
 */
export function PhMicroscopeLightIcon(props: PhMicroscopeLightIconProps) {
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
      <path d="M224,210H199.53A85.2,85.2,0,0,0,222,152a86.1,86.1,0,0,0-80-85.77V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V136a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V78.26A74,74,0,0,1,182,210H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-94-74a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V32a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM72,182a6,6,0,0,1,0-12h64a6,6,0,0,1,0,12Z"/>
    </svg>
  );
}
