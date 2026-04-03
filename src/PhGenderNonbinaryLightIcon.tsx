import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderNonbinaryLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsOTguMjdWNTguNmwzMC45MSwxOC41NGE2LDYsMCwxLDAsNi4xOC0xMC4yOEwxMzkuNjYsNDhsMzEuNDMtMTguODVhNiw2LDAsMSwwLTYuMTgtMTAuMjlMMTI4LDQxLDkxLjA5LDE4Ljg2YTYsNiwwLDEsMC02LjE4LDEwLjI5TDExNi4zNCw0OCw4NC45MSw2Ni44NmE2LDYsMCwxLDAsNi4xOCwxMC4yOEwxMjIsNTguNlY5OC4yN2E3MCw3MCwwLDEsMCwxMiwwWk0xMjgsMjI2YTU4LDU4LDAsMSwxLDU4LTU4QTU4LjA3LDU4LjA3LDAsMCwxLDEyOCwyMjZaIi8+PC9zdmc+)
 */
export function PhGenderNonbinaryLightIcon(props: PhGenderNonbinaryLightIconProps) {
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
      <path d="M134,98.27V58.6l30.91,18.54a6,6,0,1,0,6.18-10.28L139.66,48l31.43-18.85a6,6,0,1,0-6.18-10.29L128,41,91.09,18.86a6,6,0,1,0-6.18,10.29L116.34,48,84.91,66.86a6,6,0,1,0,6.18,10.28L122,58.6V98.27a70,70,0,1,0,12,0ZM128,226a58,58,0,1,1,58-58A58.07,58.07,0,0,1,128,226Z"/>
    </svg>
  );
}
