import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNTZWMjAwYTQsNCwwLDAsMS04LDBWNTZhNCw0LDAsMCwxLDgsMFpNMTk2LDk2djY0YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjk2QTEyLDEyLDAsMCwxLDMyLDg0SDE4NEExMiwxMiwwLDAsMSwxOTYsOTZabS04LDBhNCw0LDAsMCwwLTQtNEgzMmE0LDQsMCwwLDAtNCw0djY0YTQsNCwwLDAsMCw0LDRIMTg0YTQsNCwwLDAsMCw0LTRaIi8+PC9zdmc+)
 */
export function PhAlignRightSimpleThinIcon(props: PhAlignRightSimpleThinIconProps) {
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
      <path d="M228,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM196,96v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V96A12,12,0,0,1,32,84H184A12,12,0,0,1,196,96Zm-8,0a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
