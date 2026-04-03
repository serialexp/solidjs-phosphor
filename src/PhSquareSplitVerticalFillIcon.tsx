import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareSplitVerticalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZ2NjBhNCw0LDAsMCwxLTQsNEg0NGE0LDQsMCwwLDEtNC00VjU2QTE2LDE2LDAsMCwxLDU2LDQwSDIwMEExNiwxNiwwLDAsMSwyMTYsNTZabS00LDgwSDQ0YTQsNCwwLDAsMC00LDR2NjBhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjE0MEE0LDQsMCwwLDAsMjEyLDEzNloiLz48L3N2Zz4=)
 */
export function PhSquareSplitVerticalFillIcon(props: PhSquareSplitVerticalFillIconProps) {
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
      <path d="M216,56v60a4,4,0,0,1-4,4H44a4,4,0,0,1-4-4V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Zm-4,80H44a4,4,0,0,0-4,4v60a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V140A4,4,0,0,0,212,136Z"/>
    </svg>
  );
}
