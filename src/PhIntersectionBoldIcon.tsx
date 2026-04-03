import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectionBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTIwdjgwYTEyLDEyLDAsMCwxLTI0LDBWMTIwYTYwLDYwLDAsMCwwLTEyMCwwdjgwYTEyLDEyLDAsMCwxLTI0LDBWMTIwYTg0LDg0LDAsMCwxLDE2OCwwWiIvPjwvc3ZnPg==)
 */
export function PhIntersectionBoldIcon(props: PhIntersectionBoldIconProps) {
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
      <path d="M212,120v80a12,12,0,0,1-24,0V120a60,60,0,0,0-120,0v80a12,12,0,0,1-24,0V120a84,84,0,0,1,168,0Z"/>
    </svg>
  );
}
