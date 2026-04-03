import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCarThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA4SDIyNi42TDE5Ny43Nyw0My4xM2ExMiwxMiwwLDAsMC0xMS03LjEzSDY5LjJhMTIsMTIsMCwwLDAtMTEsNy4xM0wyOS40LDEwOEgxNmE0LDQsMCwwLDAsMCw4SDI4djg0YTEyLDEyLDAsMCwwLDEyLDEySDY0YTEyLDEyLDAsMCwwLDEyLTEyVjE4MEgxODB2MjBhMTIsMTIsMCwwLDAsMTIsMTJoMjRhMTIsMTIsMCwwLDAsMTItMTJWMTE2aDEyYTQsNCwwLDAsMCwwLThaTTY1LjU0LDQ2LjM4QTQsNCwwLDAsMSw2OS4yLDQ0SDE4Ni44YTQsNCwwLDAsMSwzLjY2LDIuMzhMMjE3Ljg0LDEwOEgzOC4xNlpNNjgsMjAwYTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFYxODBINjhabTE0OCw0SDE5MmE0LDQsMCwwLDEtNC00VjE4MGgzMnYyMEE0LDQsMCwwLDEsMjE2LDIwNFptNC0zMkgzNlYxMTZIMjIwWk02MCwxNDRhNCw0LDAsMCwxLDQtNEg4MGE0LDQsMCwwLDEsMCw4SDY0QTQsNCwwLDAsMSw2MCwxNDRabTExMiwwYTQsNCwwLDAsMSw0LTRoMTZhNCw0LDAsMCwxLDAsOEgxNzZBNCw0LDAsMCwxLDE3MiwxNDRaIi8+PC9zdmc+)
 */
export function PhCarThinIcon(props: PhCarThinIconProps) {
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
      <path d="M240,108H226.6L197.77,43.13a12,12,0,0,0-11-7.13H69.2a12,12,0,0,0-11,7.13L29.4,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.54,46.38A4,4,0,0,1,69.2,44H186.8a4,4,0,0,1,3.66,2.38L217.84,108H38.16ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H68Zm148,4H192a4,4,0,0,1-4-4V180h32v20A4,4,0,0,1,216,204Zm4-32H36V116H220ZM60,144a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8H64A4,4,0,0,1,60,144Zm112,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,144Z"/>
    </svg>
  );
}
