import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuNjYsMTIzLjU2LDIwMSw1NS4xM0ExNS45NCwxNS45NCwwLDAsMCwxODcuNzIsNDhINDBBMTYsMTYsMCwwLDAsMjQsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDE4Ny43MkExNiwxNiwwLDAsMCwyMDEsMjAwLjg4aDBsNDUuNjMtNjguNDRBOCw4LDAsMCwwLDI0Ni42NiwxMjMuNTZaIi8+PC9zdmc+)
 */
export function PhTagSimpleFillIcon(props: PhTagSimpleFillIconProps) {
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
      <path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z"/>
    </svg>
  );
}
