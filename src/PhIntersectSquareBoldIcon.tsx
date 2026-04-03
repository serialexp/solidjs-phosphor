import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectSquareBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODRIMTcyVjQwYTEyLDEyLDAsMCwwLTEyLTEySDQwQTEyLDEyLDAsMCwwLDI4LDQwVjE2MGExMiwxMiwwLDAsMCwxMiwxMkg4NHY0NGExMiwxMiwwLDAsMCwxMiwxMkgyMTZhMTIsMTIsMCwwLDAsMTItMTJWOTZBMTIsMTIsMCwwLDAsMjE2LDg0Wk01MiwxNDhWNTJoOTZWODRIOTZBMTIsMTIsMCwwLDAsODQsOTZ2NTJabTU2LTIzLDIzLDIzSDEwOFpNMTQ4LDEzMWwtMjMtMjNoMjNabTU2LDczSDEwOFYxNzJoNTJhMTIsMTIsMCwwLDAsMTItMTJWMTA4aDMyWiIvPjwvc3ZnPg==)
 */
export function PhIntersectSquareBoldIcon(props: PhIntersectSquareBoldIconProps) {
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
      <path d="M216,84H172V40a12,12,0,0,0-12-12H40A12,12,0,0,0,28,40V160a12,12,0,0,0,12,12H84v44a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A12,12,0,0,0,216,84ZM52,148V52h96V84H96A12,12,0,0,0,84,96v52Zm56-23,23,23H108ZM148,131l-23-23h23Zm56,73H108V172h52a12,12,0,0,0,12-12V108h32Z"/>
    </svg>
  );
}
