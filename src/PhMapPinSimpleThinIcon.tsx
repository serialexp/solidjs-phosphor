import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsNzJhNTIsNTIsMCwxLDAtNTYsNTEuODNWMjMyYTQsNCwwLDAsMCw4LDBWMTIzLjgzQTUyLjA1LDUyLjA1LDAsMCwwLDE4MCw3MlptLTUyLDQ0YTQ0LDQ0LDAsMSwxLDQ0LTQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDEyOCwxMTZaIi8+PC9zdmc+)
 */
export function PhMapPinSimpleThinIcon(props: PhMapPinSimpleThinIconProps) {
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
      <path d="M180,72a52,52,0,1,0-56,51.83V232a4,4,0,0,0,8,0V123.83A52.05,52.05,0,0,0,180,72Zm-52,44a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,116Z"/>
    </svg>
  );
}
