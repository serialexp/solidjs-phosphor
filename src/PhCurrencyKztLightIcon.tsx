import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyKztLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsOTZhNiw2LDAsMCwxLTYsNkgxMzRWMjE2YTYsNiwwLDAsMS0xMiwwVjEwMkg1NmE2LDYsMCwwLDEsMC0xMkgyMDBBNiw2LDAsMCwxLDIwNiw5NlpNNTYsNjJIMjAwYTYsNiwwLDAsMCwwLTEySDU2YTYsNiwwLDAsMCwwLDEyWiIvPjwvc3ZnPg==)
 */
export function PhCurrencyKztLightIcon(props: PhCurrencyKztLightIconProps) {
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
      <path d="M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z"/>
    </svg>
  );
}
