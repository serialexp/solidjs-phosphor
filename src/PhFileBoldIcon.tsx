import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksNzkuNTJsLTU2LTU2QTEyLDEyLDAsMCwwLDE1MiwyMEg1NkEyMCwyMCwwLDAsMCwzNiw0MFYyMTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjg4QTEyLDEyLDAsMCwwLDIxNi40OSw3OS41MlpNMTYwLDU3bDIzLDIzSDE2MFpNNjAsMjEyVjQ0aDc2VjkyYTEyLDEyLDAsMCwwLDEyLDEyaDQ4VjIxMloiLz48L3N2Zz4=)
 */
export function PhFileBoldIcon(props: PhFileBoldIconProps) {
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
      <path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Z"/>
    </svg>
  );
}
