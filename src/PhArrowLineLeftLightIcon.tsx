import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTI4YTYsNiwwLDAsMS02LDZIODYuNDlsNjEuNzUsNjEuNzZhNiw2LDAsMSwxLTguNDgsOC40OGwtNzItNzJhNiw2LDAsMCwxLDAtOC40OGw3Mi03MmE2LDYsMCwwLDEsOC40OCw4LjQ4TDg2LjQ5LDEyMkgyMjRBNiw2LDAsMCwxLDIzMCwxMjhaTTQwLDM0YTYsNiwwLDAsMC02LDZWMjE2YTYsNiwwLDAsMCwxMiwwVjQwQTYsNiwwLDAsMCw0MCwzNFoiLz48L3N2Zz4=)
 */
export function PhArrowLineLeftLightIcon(props: PhArrowLineLeftLightIconProps) {
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
      <path d="M230,128a6,6,0,0,1-6,6H86.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L86.49,122H224A6,6,0,0,1,230,128ZM40,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,40,34Z"/>
    </svg>
  );
}
