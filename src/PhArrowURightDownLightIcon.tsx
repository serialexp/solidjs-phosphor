import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowURightDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuMjQsMTgwLjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OCwwbC00OC00OGE2LDYsMCwwLDEsOC40OC04LjQ4TDE2MiwyMDkuNTFWODhBNTAsNTAsMCwwLDAsNjIsODh2ODhhNiw2LDAsMCwxLTEyLDBWODhhNjIsNjIsMCwwLDEsMTI0LDBWMjA5LjUxbDM3Ljc2LTM3Ljc1YTYsNiwwLDAsMSw4LjQ4LDguNDhaIi8+PC9zdmc+)
 */
export function PhArrowURightDownLightIcon(props: PhArrowURightDownLightIconProps) {
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
      <path d="M220.24,180.24l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L162,209.51V88A50,50,0,0,0,62,88v88a6,6,0,0,1-12,0V88a62,62,0,0,1,124,0V209.51l37.76-37.75a6,6,0,0,1,8.48,8.48Z"/>
    </svg>
  );
}
