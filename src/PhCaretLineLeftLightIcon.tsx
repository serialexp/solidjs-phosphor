import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYuMjQsMjAzLjc2YTYsNiwwLDEsMS04LjQ4LDguNDhsLTgwLTgwYTYsNiwwLDAsMSwwLTguNDhsODAtODBhNiw2LDAsMCwxLDguNDgsOC40OEwxMjAuNDksMTI4Wk03Miw0MmE2LDYsMCwwLDAtNiw2VjIwOGE2LDYsMCwwLDAsMTIsMFY0OEE2LDYsMCwwLDAsNzIsNDJaIi8+PC9zdmc+)
 */
export function PhCaretLineLeftLightIcon(props: PhCaretLineLeftLightIconProps) {
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
      <path d="M196.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L120.49,128ZM72,42a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V48A6,6,0,0,0,72,42Z"/>
    </svg>
  );
}
