import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareFiveLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWk0xMTcuMDgsODZsLTUsMzBBMzYsMzYsMCwwLDEsMTI0LDExNGEzNCwzNCwwLDAsMSwwLDY4LDMzLjYsMzMuNiwwLDAsMS0yNC4yOS05LjgsNiw2LDAsMSwxLDguNTgtOC40QTIxLjY1LDIxLjY1LDAsMCwwLDEyNCwxNzBhMjIsMjIsMCwwLDAsMC00NCwyMS42NSwyMS42NSwwLDAsMC0xNS43MSw2LjJBNiw2LDAsMCwxLDk4LjA4LDEyN2w4LTQ4QTYsNiwwLDAsMSwxMTIsNzRoNDBhNiw2LDAsMCwxLDAsMTJaIi8+PC9zdmc+)
 */
export function PhNumberSquareFiveLightIcon(props: PhNumberSquareFiveLightIconProps) {
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
      <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM117.08,86l-5,30A36,36,0,0,1,124,114a34,34,0,0,1,0,68,33.6,33.6,0,0,1-24.29-9.8,6,6,0,1,1,8.58-8.4A21.65,21.65,0,0,0,124,170a22,22,0,0,0,0-44,21.65,21.65,0,0,0-15.71,6.2A6,6,0,0,1,98.08,127l8-48A6,6,0,0,1,112,74h40a6,6,0,0,1,0,12Z"/>
    </svg>
  );
}
