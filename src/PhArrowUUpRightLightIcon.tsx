import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuNzYsMTMxLjc2LDIwOS41MSw5NEg4OGE1MCw1MCwwLDAsMCwwLDEwMGg4OGE2LDYsMCwwLDEsMCwxMkg4OEE2Miw2MiwwLDAsMSw4OCw4MkgyMDkuNTFMMTcxLjc2LDQ0LjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhsNDgsNDhhNiw2LDAsMCwxLDAsOC40OGwtNDgsNDhhNiw2LDAsMCwxLTguNDgtOC40OFoiLz48L3N2Zz4=)
 */
export function PhArrowUUpRightLightIcon(props: PhArrowUUpRightLightIconProps) {
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
      <path d="M171.76,131.76,209.51,94H88a50,50,0,0,0,0,100h88a6,6,0,0,1,0,12H88A62,62,0,0,1,88,82H209.51L171.76,44.24a6,6,0,0,1,8.48-8.48l48,48a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48Z"/>
    </svg>
  );
}
