import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderFemaleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsOTZhNzgsNzgsMCwxLDAtODQsNzcuNzVWMjAySDg4YTYsNiwwLDAsMCwwLDEyaDM0djI2YTYsNiwwLDAsMCwxMiwwVjIxNGgzNGE2LDYsMCwwLDAsMC0xMkgxMzRWMTczLjc1QTc4LjA5LDc4LjA5LDAsMCwwLDIwNiw5NlpNNjIsOTZhNjYsNjYsMCwxLDEsNjYsNjZBNjYuMDgsNjYuMDgsMCwwLDEsNjIsOTZaIi8+PC9zdmc+)
 */
export function PhGenderFemaleLightIcon(props: PhGenderFemaleLightIconProps) {
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
      <path d="M206,96a78,78,0,1,0-84,77.75V202H88a6,6,0,0,0,0,12h34v26a6,6,0,0,0,12,0V214h34a6,6,0,0,0,0-12H134V173.75A78.09,78.09,0,0,0,206,96ZM62,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,62,96Z"/>
    </svg>
  );
}
