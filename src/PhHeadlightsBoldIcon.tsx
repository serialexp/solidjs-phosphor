import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHeadlightsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsODBhMTIsMTIsMCwwLDEsMTItMTJoNjRhMTIsMTIsMCwwLDEsMCwyNEgxNzZBMTIsMTIsMCwwLDEsMTY0LDgwWm03Niw4NEgxNzZhMTIsMTIsMCwwLDAsMCwyNGg2NGExMiwxMiwwLDAsMCwwLTI0Wm0wLTQ4SDE3NmExMiwxMiwwLDAsMCwwLDI0aDY0YTEyLDEyLDAsMCwwLDAtMjRaTTE0OCw2NFYxOTJhMjAsMjAsMCwwLDEtMjAsMjBIODhBODQsODQsMCwwLDEsNCwxMjcuMzdDNC4zNCw4MS40LDQyLjQzLDQ0LDg4LjksNDRIMTI4QTIwLDIwLDAsMCwxLDE0OCw2NFptLTI0LDRIODguOUM1NS41Nyw2OCwyOC4yNSw5NC43MSwyOCwxMjcuNTRBNjAsNjAsMCwwLDAsODgsMTg4aDM2WiIvPjwvc3ZnPg==)
 */
export function PhHeadlightsBoldIcon(props: PhHeadlightsBoldIconProps) {
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
      <path d="M164,80a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H176A12,12,0,0,1,164,80Zm76,84H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0-48H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM148,64V192a20,20,0,0,1-20,20H88A84,84,0,0,1,4,127.37C4.34,81.4,42.43,44,88.9,44H128A20,20,0,0,1,148,64Zm-24,4H88.9C55.57,68,28.25,94.71,28,127.54A60,60,0,0,0,88,188h36Z"/>
    </svg>
  );
}
