import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjQsNTMuNjYsMTI4LDEyOCw1MC4zNiw1My42NkE4LDgsMCwwLDEsNTYsNDBIMjAwQTgsOCwwLDAsMSwyMDUuNjQsNTMuNjZaTTEyOCwxMjgsNTAuMzYsMjAyLjM0QTgsOCwwLDAsMCw1NiwyMTZIMjAwYTgsOCwwLDAsMCw1LjY2LTEzLjY2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMS4xOCwxOTYuNTYsMTM5LjU3LDEyOGw3MS42MS02OC41NmExLjU5LDEuNTksMCwwLDEsLjEzLS4xM0ExNiwxNiwwLDAsMCwyMDAsMzJINTZBMTYsMTYsMCwwLDAsNDQuNjksNTkuMzFhMS41OSwxLjU5LDAsMCwxLC4xMy4xM0wxMTYuNDMsMTI4LDQ0LjgyLDE5Ni41NmExLjU5LDEuNTksMCwwLDEtLjEzLjEzQTE2LDE2LDAsMCwwLDU2LDIyNEgyMDBhMTYsMTYsMCwwLDAsMTEuMzItMjcuMzFBMS41OSwxLjU5LDAsMCwxLDIxMS4xOCwxOTYuNTZaTTU2LDQ4aDB2MFptMTQ0LDAtNzIsNjguOTJMNTYsNDhaTTU2LDIwOGw3Mi02OC45MkwyMDAsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhHourglassSimpleDuotoneIcon(props: PhHourglassSimpleDuotoneIconProps) {
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
      <path d="M205.64,53.66,128,128,50.36,53.66A8,8,0,0,1,56,40H200A8,8,0,0,1,205.64,53.66ZM128,128,50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66Z" opacity="0.2"/><path d="M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0Zm144,0-72,68.92L56,48ZM56,208l72-68.92L200,208Z"/>
    </svg>
  );
}
