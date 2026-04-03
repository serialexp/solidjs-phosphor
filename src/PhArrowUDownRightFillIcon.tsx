import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTczLjY2bC00OCw0OEE4LDgsMCwwLDEsMTY4LDIxNlYxNzZIODhBNjQsNjQsMCwwLDEsODgsNDhoODhhOCw4LDAsMCwxLDAsMTZIODhhNDgsNDgsMCwwLDAsMCw5Nmg4MFYxMjBhOCw4LDAsMCwxLDEzLjY2LTUuNjZsNDgsNDhBOCw4LDAsMCwxLDIyOS42NiwxNzMuNjZaIi8+PC9zdmc+)
 */
export function PhArrowUDownRightFillIcon(props: PhArrowUDownRightFillIconProps) {
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
      <path d="M229.66,173.66l-48,48A8,8,0,0,1,168,216V176H88A64,64,0,0,1,88,48h88a8,8,0,0,1,0,16H88a48,48,0,0,0,0,96h80V120a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,173.66Z"/>
    </svg>
  );
}
