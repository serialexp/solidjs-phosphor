import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretUpDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQuNDksMTY3LjUxYTEyLDEyLDAsMCwxLDAsMTdsLTQ4LDQ4YTEyLDEyLDAsMCwxLTE3LDBsLTQ4LTQ4YTEyLDEyLDAsMCwxLDE3LTE3TDEyOCwyMDdsMzkuNTEtMzkuNTJBMTIsMTIsMCwwLDEsMTg0LjQ5LDE2Ny41MVptLTk2LTc5TDEyOCw0OWwzOS41MSwzOS41MmExMiwxMiwwLDAsMCwxNy0xN2wtNDgtNDhhMTIsMTIsMCwwLDAtMTcsMGwtNDgsNDhhMTIsMTIsMCwwLDAsMTcsMTdaIi8+PC9zdmc+)
 */
export function PhCaretUpDownBoldIcon(props: PhCaretUpDownBoldIconProps) {
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
      <path d="M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z"/>
    </svg>
  );
}
