import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParallelogramIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDUuNDMsNDcuMzFBMTUuOTQsMTUuOTQsMCwwLDAsMjMyLDQwSDg4LjgxYTE2LDE2LDAsMCwwLTE0LjU5LDkuNDNsLTY0LjgsMTQ0QTE2LDE2LDAsMCwwLDI0LDIxNkgxNjcuMTlhMTYsMTYsMCwwLDAsMTQuNTktOS40M2w2NC44LTE0NEExNiwxNiwwLDAsMCwyNDUuNDMsNDcuMzFaTTE2Ny4xOSwyMDBIMjRMODguODEsNTZIMjMyWiIvPjwvc3ZnPg==)
 */
export function PhParallelogramIcon(props: PhParallelogramIconProps) {
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
      <path d="M245.43,47.31A15.94,15.94,0,0,0,232,40H88.81a16,16,0,0,0-14.59,9.43l-64.8,144A16,16,0,0,0,24,216H167.19a16,16,0,0,0,14.59-9.43l64.8-144A16,16,0,0,0,245.43,47.31ZM167.19,200H24L88.81,56H232Z"/>
    </svg>
  );
}
