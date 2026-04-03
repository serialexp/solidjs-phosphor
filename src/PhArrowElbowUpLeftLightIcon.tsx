import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsODBWMjI0YTYsNiwwLDAsMS0xMiwwVjg2SDYyLjQ5bDM3Ljc1LDM3Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhsLTQ4LTQ4YTYsNiwwLDAsMSwwLTguNDhsNDgtNDhhNiw2LDAsMSwxLDguNDgsOC40OEw2Mi40OSw3NEgxOTJBNiw2LDAsMCwxLDE5OCw4MFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowUpLeftLightIcon(props: PhArrowElbowUpLeftLightIconProps) {
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
      <path d="M198,80V224a6,6,0,0,1-12,0V86H62.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,1,1,8.48,8.48L62.49,74H192A6,6,0,0,1,198,80Z"/>
    </svg>
  );
}
