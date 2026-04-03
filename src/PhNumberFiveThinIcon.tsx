import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFiveThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTYwYTUyLDUyLDAsMCwxLTg2LjY3LDM4Ljc2LDQsNCwwLDEsMSw1LjM0LTYsNDQsNDQsMCwxLDAsLjg0LTY2LjMzQTQsNCwwLDAsMSw4NSwxMjIuNjRsMTUuMDktNzUuNDJBNCw0LDAsMCwxLDEwNCw0NGg2NGE0LDQsMCwwLDEsMCw4SDEwNy4yOEw5NC43NywxMTQuNTNBNTIsNTIsMCwwLDEsMTcyLDE2MFoiLz48L3N2Zz4=)
 */
export function PhNumberFiveThinIcon(props: PhNumberFiveThinIconProps) {
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
      <path d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6,44,44,0,1,0,.84-66.33A4,4,0,0,1,85,122.64l15.09-75.42A4,4,0,0,1,104,44h64a4,4,0,0,1,0,8H107.28L94.77,114.53A52,52,0,0,1,172,160Z"/>
    </svg>
  );
}
