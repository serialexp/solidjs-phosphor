import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDoubleUpRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTA5LjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjEyLjY5LDEwNCwxNzAuMzQsNjEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMybDQ4LDQ4QTgsOCwwLDAsMSwyMjkuNjYsMTA5LjY2Wm0tNDgtMTEuMzItNDgtNDhBOCw4LDAsMCwwLDEyMCw1NlY5Ni4zQTEwNC4xNSwxMDQuMTUsMCwwLDAsMjQsMjAwYTgsOCwwLDAsMCwxNiwwLDg4LjExLDg4LjExLDAsMCwxLDgwLTg3LjYzVjE1MmE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0OC00OEE4LDgsMCwwLDAsMTgxLjY2LDk4LjM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowBendDoubleUpRightFillIcon(props: PhArrowBendDoubleUpRightFillIconProps) {
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
      <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"/>
    </svg>
  );
}
