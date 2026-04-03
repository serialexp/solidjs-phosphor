import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileVueBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ny4zLDE1NmwtMjAsNTZhMTIsMTIsMCwwLDEtMjIuNiwwbC0yMC01NkExMiwxMiwwLDAsMSw0Ny4zLDE0OEw1NiwxNzIuMzIsNjQuNywxNDhBMTIsMTIsMCwwLDEsODcuMywxNTZaTTIxMiwxOTZIMTkydi00aDEyYTEyLDEyLDAsMCwwLDAtMjRIMTkydi00aDIwYTEyLDEyLDAsMCwwLDAtMjRIMTgwYTEyLDEyLDAsMCwwLTEyLDEydjU2YTEyLDEyLDAsMCwwLDEyLDEyaDMyYTEyLDEyLDAsMCwwLDAtMjRabS02OC01NmExMiwxMiwwLDAsMC0xMiwxMnYzOGE2LDYsMCwwLDEtMTIsMFYxNTJhMTIsMTIsMCwwLDAtMjQsMHYzOGEzMCwzMCwwLDAsMCw2MCwwVjE1MkExMiwxMiwwLDAsMCwxNDQsMTQwWk0zNiwxMDhWNDBBMjAsMjAsMCwwLDEsNTYsMjBoOTZhMTIsMTIsMCwwLDEsOC40OSwzLjUybDU2LDU2QTEyLDEyLDAsMCwxLDIyMCw4OHYyMGExMiwxMiwwLDAsMS0yNCwwdi00SDE0OGExMiwxMiwwLDAsMS0xMi0xMlY0NEg2MHY2NGExMiwxMiwwLDAsMS0yNCwwWk0xNjAsODBoMjNMMTYwLDU3WiIvPjwvc3ZnPg==)
 */
export function PhFileVueBoldIcon(props: PhFileVueBoldIconProps) {
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
      <path d="M87.3,156l-20,56a12,12,0,0,1-22.6,0l-20-56A12,12,0,0,1,47.3,148L56,172.32,64.7,148A12,12,0,0,1,87.3,156ZM212,196H192v-4h12a12,12,0,0,0,0-24H192v-4h20a12,12,0,0,0,0-24H180a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h32a12,12,0,0,0,0-24Zm-68-56a12,12,0,0,0-12,12v38a6,6,0,0,1-12,0V152a12,12,0,0,0-24,0v38a30,30,0,0,0,60,0V152A12,12,0,0,0,144,140ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,80h23L160,57Z"/>
    </svg>
  );
}
