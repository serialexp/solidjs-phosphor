import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMjMyYTYsNiwwLDAsMS02LDZINTZhNiw2LDAsMCwxLDAtMTJIMjAwQTYsNiwwLDAsMSwyMDYsMjMyWk04MiwxOTJWNDBBMTQsMTQsMCwwLDEsOTYsMjZoNjRhMTQsMTQsMCwwLDEsMTQsMTRWMTkyYTE0LDE0LDAsMCwxLTE0LDE0SDk2QTE0LDE0LDAsMCwxLDgyLDE5MlptMTIsMGEyLDIsMCwwLDAsMiwyaDY0YTIsMiwwLDAsMCwyLTJWNDBhMiwyLDAsMCwwLTItMkg5NmEyLDIsMCwwLDAtMiwyWiIvPjwvc3ZnPg==)
 */
export function PhAlignBottomSimpleLightIcon(props: PhAlignBottomSimpleLightIconProps) {
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
      <path d="M206,232a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,232ZM82,192V40A14,14,0,0,1,96,26h64a14,14,0,0,1,14,14V192a14,14,0,0,1-14,14H96A14,14,0,0,1,82,192Zm12,0a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2Z"/>
    </svg>
  );
}
