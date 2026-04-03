import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTY1LjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzIsMGwtNDgtNDhhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE2OCwxODguNjlWNzJIMzJhOCw4LDAsMCwxLDAtMTZIMTc2YTgsOCwwLDAsMSw4LDhWMTg4LjY5bDM0LjM0LTM0LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 */
export function PhArrowElbowRightDownIcon(props: PhArrowElbowRightDownIconProps) {
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
      <path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
