import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMjI0YTYsNiwwLDAsMS02LDZBMTAyLjEyLDEwMi4xMiwwLDAsMSw5OCwxMjhWNDYuNDlMNjAuMjQsODQuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw0OC00OGE2LDYsMCwwLDEsOC40OCwwbDQ4LDQ4YTYsNiwwLDEsMS04LjQ4LDguNDhMMTEwLDQ2LjQ5VjEyOGE5MC4xLDkwLjEsMCwwLDAsOTAsOTBBNiw2LDAsMCwxLDIwNiwyMjRaIi8+PC9zdmc+)
 */
export function PhArrowBendLeftUpLightIcon(props: PhArrowBendLeftUpLightIconProps) {
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
      <path d="M206,224a6,6,0,0,1-6,6A102.12,102.12,0,0,1,98,128V46.49L60.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L110,46.49V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z"/>
    </svg>
  );
}
