import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSupersetOfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMjAwYTYsNiwwLDAsMS02LDZINTZhNiw2LDAsMCwxLDAtMTJIMjA4QTYsNiwwLDAsMSwyMTQsMjAwWm0tNjItNDZINTZhNiw2LDAsMCwwLDAsMTJoOTZhNjIsNjIsMCwwLDAsMC0xMjRINTZhNiw2LDAsMCwwLDAsMTJoOTZhNTAsNTAsMCwwLDEsMCwxMDBaIi8+PC9zdmc+)
 */
export function PhSupersetOfLightIcon(props: PhSupersetOfLightIconProps) {
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
      <path d="M214,200a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H208A6,6,0,0,1,214,200Zm-62-46H56a6,6,0,0,0,0,12h96a62,62,0,0,0,0-124H56a6,6,0,0,0,0,12h96a50,50,0,0,1,0,100Z"/>
    </svg>
  );
}
