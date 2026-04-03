import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowULeftUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsODB2ODhhNjIsNjIsMCwwLDEtMTI0LDBWNDYuNDlMNDQuMjQsODQuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw0OC00OGE2LDYsMCwwLDEsOC40OCwwbDQ4LDQ4YTYsNiwwLDEsMS04LjQ4LDguNDhMOTQsNDYuNDlWMTY4YTUwLDUwLDAsMCwwLDEwMCwwVjgwYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowULeftUpLightIcon(props: PhArrowULeftUpLightIconProps) {
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
      <path d="M206,80v88a62,62,0,0,1-124,0V46.49L44.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L94,46.49V168a50,50,0,0,0,100,0V80a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
