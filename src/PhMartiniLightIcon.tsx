import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMartiniLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsNDQuMjRBNiw2LDAsMCwwLDIzMiwzNEgyNGE2LDYsMCwwLDAtNC4yNCwxMC4yNEwxMjIsMTQ2LjQ5VjIxMEg4OGE2LDYsMCwwLDAsMCwxMmg4MGE2LDYsMCwwLDAsMC0xMkgxMzRWMTQ2LjQ5Wk03MC40OSw3OGgxMTVMMTI4LDEzNS41MVptMTQ3LTMyLTIwLDIwaC0xMzlsLTIwLTIwWiIvPjwvc3ZnPg==)
 */
export function PhMartiniLightIcon(props: PhMartiniLightIconProps) {
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
      <path d="M236.24,44.24A6,6,0,0,0,232,34H24a6,6,0,0,0-4.24,10.24L122,146.49V210H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V146.49ZM70.49,78h115L128,135.51Zm147-32-20,20h-139l-20-20Z"/>
    </svg>
  );
}
