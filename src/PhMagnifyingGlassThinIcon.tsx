import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMjIxLjE3bC01Mi43LTUyLjdhODQuMSw4NC4xLDAsMSwwLTUuNjYsNS42Nmw1Mi43LDUyLjdhNCw0LDAsMCwwLDUuNjYtNS42NlpNMzYsMTEyYTc2LDc2LDAsMSwxLDc2LDc2QTc2LjA4LDc2LjA4LDAsMCwxLDM2LDExMloiLz48L3N2Zz4=)
 */
export function PhMagnifyingGlassThinIcon(props: PhMagnifyingGlassThinIconProps) {
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
      <path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>
    </svg>
  );
}
