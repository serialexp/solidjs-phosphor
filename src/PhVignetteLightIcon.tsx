import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVignetteLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJabTIsMTU4YTIsMiwwLDAsMS0yLDJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwyWk0xMjgsNzRjLTM4LjYsMC03MCwyNC4yMi03MCw1NHMzMS40LDU0LDcwLDU0LDcwLTI0LjIyLDcwLTU0UzE2Ni42LDc0LDEyOCw3NFptMCw5NmMtMzIsMC01OC0xOC44NC01OC00MnMyNi00Miw1OC00Miw1OCwxOC44NCw1OCw0MlMxNjAsMTcwLDEyOCwxNzBaIi8+PC9zdmc+)
 */
export function PhVignetteLightIcon(props: PhVignetteLightIconProps) {
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
      <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM128,74c-38.6,0-70,24.22-70,54s31.4,54,70,54,70-24.22,70-54S166.6,74,128,74Zm0,96c-32,0-58-18.84-58-42s26-42,58-42,58,18.84,58,42S160,170,128,170Z"/>
    </svg>
  );
}
