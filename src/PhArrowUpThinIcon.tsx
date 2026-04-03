import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuODMsMTE0LjgzYTQsNCwwLDAsMS01LjY2LDBMMTMyLDQ5LjY2VjIxNmE0LDQsMCwwLDEtOCwwVjQ5LjY2TDU4LjgzLDExNC44M2E0LDQsMCwwLDEtNS42Ni01LjY2bDcyLTcyYTQsNCwwLDAsMSw1LjY2LDBsNzIsNzJBNCw0LDAsMCwxLDIwMi44MywxMTQuODNaIi8+PC9zdmc+)
 */
export function PhArrowUpThinIcon(props: PhArrowUpThinIconProps) {
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
      <path d="M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"/>
    </svg>
  );
}
