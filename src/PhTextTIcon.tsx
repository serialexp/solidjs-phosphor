import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZWODhhOCw4LDAsMCwxLTE2LDBWNjRIMTM2VjE5MmgyNGE4LDgsMCwwLDEsMCwxNkg5NmE4LDgsMCwwLDEsMC0xNmgyNFY2NEg2NFY4OGE4LDgsMCwwLDEtMTYsMFY1NmE4LDgsMCwwLDEsOC04SDIwMEE4LDgsMCwwLDEsMjA4LDU2WiIvPjwvc3ZnPg==)
 */
export function PhTextTIcon(props: PhTextTIconProps) {
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
      <path d="M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z"/>
    </svg>
  );
}
