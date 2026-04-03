import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBlueprintThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjBINjhWNDBhNCw0LDAsMCwwLTQtNEg0OEEyOCwyOCwwLDAsMCwyMCw2NFYxNzZhMjgsMjgsMCwwLDAsMjgsMjhIMjMyYTQsNCwwLDAsMCw0LTRWNjRBNCw0LDAsMCwwLDIzMiw2MFpNMjgsNjRBMjAsMjAsMCwwLDEsNDgsNDRINjBWMTQ4SDQ4YTI3Ljk0LDI3Ljk0LDAsMCwwLTIwLDguNDJaTTIyOCwxOTZINDhhMjAsMjAsMCwwLDEsMC00MEg2NGE0LDQsMCwwLDAsNC00VjY4SDIyOFpNMTA0LDE0MGE0LDQsMCwwLDAsMCw4aDIwdjEyYTQsNCwwLDAsMCw4LDBWMTQ4aDMydjEyYTQsNCwwLDAsMCw4LDBWMTQ4aDIwYTQsNCwwLDAsMCwwLThIMTcyVjExNmgyMGE0LDQsMCwwLDAsMC04SDE3MlY5NmE0LDQsMCwwLDAtOCwwdjEySDEzMlY5NmE0LDQsMCwwLDAtOCwwdjEySDEwNGE0LDQsMCwwLDAsMCw4aDIwdjI0Wm0yOC0yNGgzMnYyNEgxMzJaIi8+PC9zdmc+)
 */
export function PhBlueprintThinIcon(props: PhBlueprintThinIconProps) {
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
      <path d="M232,60H68V40a4,4,0,0,0-4-4H48A28,28,0,0,0,20,64V176a28,28,0,0,0,28,28H232a4,4,0,0,0,4-4V64A4,4,0,0,0,232,60ZM28,64A20,20,0,0,1,48,44H60V148H48a27.94,27.94,0,0,0-20,8.42ZM228,196H48a20,20,0,0,1,0-40H64a4,4,0,0,0,4-4V68H228ZM104,140a4,4,0,0,0,0,8h20v12a4,4,0,0,0,8,0V148h32v12a4,4,0,0,0,8,0V148h20a4,4,0,0,0,0-8H172V116h20a4,4,0,0,0,0-8H172V96a4,4,0,0,0-8,0v12H132V96a4,4,0,0,0-8,0v12H104a4,4,0,0,0,0,8h20v24Zm28-24h32v24H132Z"/>
    </svg>
  );
}
