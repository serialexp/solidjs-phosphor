import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Ny41MSwxMTIuNDlhMTIsMTIsMCwwLDEsMTctMTdMMTE2LDE0N1YzMmExMiwxMiwwLDAsMSwyNCwwVjE0N2w1MS41MS01MS41MmExMiwxMiwwLDAsMSwxNywxN2wtNzIsNzJhMTIsMTIsMCwwLDEtMTcsMFpNMjE2LDIwNEg0MGExMiwxMiwwLDAsMCwwLDI0SDIxNmExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineDownBoldIcon(props: PhArrowLineDownBoldIconProps) {
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
      <path d="M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
