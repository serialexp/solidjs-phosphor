import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsNTZWMjAwYTYsNiwwLDAsMS0xMiwwVjU2YTYsNiwwLDAsMSwxMiwwWk0xOTgsOTZ2NjRhMTQsMTQsMCwwLDEtMTQsMTRIMzJhMTQsMTQsMCwwLDEtMTQtMTRWOTZBMTQsMTQsMCwwLDEsMzIsODJIMTg0QTE0LDE0LDAsMCwxLDE5OCw5NlptLTEyLDBhMiwyLDAsMCwwLTItMkgzMmEyLDIsMCwwLDAtMiwydjY0YTIsMiwwLDAsMCwyLDJIMTg0YTIsMiwwLDAsMCwyLTJaIi8+PC9zdmc+)
 */
export function PhAlignRightSimpleLightIcon(props: PhAlignRightSimpleLightIconProps) {
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
      <path d="M230,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM198,96v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V96A14,14,0,0,1,32,82H184A14,14,0,0,1,198,96Zm-12,0a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H184a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
