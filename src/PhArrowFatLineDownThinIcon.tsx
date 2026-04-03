import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNywxMzQuNDdBNCw0LDAsMCwwLDIyNCwxMzJIMTgwVjcyYTQsNCwwLDAsMC00LTRIODBhNCw0LDAsMCwwLTQsNHY2MEgzMmE0LDQsMCwwLDAtMi44Myw2LjgzbDk2LDk2YTQsNCwwLDAsMCw1LjY2LDBsOTYtOTZBNCw0LDAsMCwwLDIyNy43LDEzNC40N1pNMTI4LDIyNi4zNCw0MS42NiwxNDBIODBhNCw0LDAsMCwwLDQtNFY3Nmg4OHY2MGE0LDQsMCwwLDAsNCw0aDM4LjM0Wk03Niw0MGE0LDQsMCwwLDEsNC00aDk2YTQsNCwwLDAsMSwwLDhIODBBNCw0LDAsMCwxLDc2LDQwWiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLineDownThinIcon(props: PhArrowFatLineDownThinIconProps) {
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
      <path d="M227.7,134.47A4,4,0,0,0,224,132H180V72a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v60H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V76h88v60a4,4,0,0,0,4,4h38.34ZM76,40a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,40Z"/>
    </svg>
  );
}
