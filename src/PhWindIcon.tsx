import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWindIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTg0YTMyLDMyLDAsMCwxLTMyLDMyYy0xMy43LDAtMjYuOTUtOC45My0zMS41LTIxLjIyYTgsOCwwLDAsMSwxNS01LjU2QzEzNy43NCwxOTUuMjcsMTQ1LDIwMCwxNTIsMjAwYTE2LDE2LDAsMCwwLDAtMzJINDBhOCw4LDAsMCwxLDAtMTZIMTUyQTMyLDMyLDAsMCwxLDE4NCwxODRabS02NC04MGEzMiwzMiwwLDAsMCwwLTY0Yy0xMy43LDAtMjYuOTUsOC45My0zMS41LDIxLjIyYTgsOCwwLDAsMCwxNSw1LjU2QzEwNS43NCw2MC43MywxMTMsNTYsMTIwLDU2YTE2LDE2LDAsMCwxLDAsMzJIMjRhOCw4LDAsMCwwLDAsMTZabTg4LTMyYy0xMy43LDAtMjYuOTUsOC45My0zMS41LDIxLjIyYTgsOCwwLDAsMCwxNSw1LjU2QzE5My43NCw5Mi43MywyMDEsODgsMjA4LDg4YTE2LDE2LDAsMCwxLDAsMzJIMzJhOCw4LDAsMCwwLDAsMTZIMjA4YTMyLDMyLDAsMCwwLDAtNjRaIi8+PC9zdmc+)
 */
export function PhWindIcon(props: PhWindIconProps) {
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
      <path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"/>
    </svg>
  );
}
