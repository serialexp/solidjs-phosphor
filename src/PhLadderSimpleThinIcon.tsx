import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLadderSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhhNCw0LDAsMCwwLTQsNFY2OEg2OFYzMmE0LDQsMCwwLDAtOCwwVjIyNGE0LDQsMCwwLDAsOCwwVjE4OEgxODh2MzZhNCw0LDAsMCwwLDgsMFYzMkE0LDQsMCwwLDAsMTkyLDI4Wm0tNCw0OHY0OEg2OFY3NlpNNjgsMTgwVjEzMkgxODh2NDhaIi8+PC9zdmc+)
 */
export function PhLadderSimpleThinIcon(props: PhLadderSimpleThinIconProps) {
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
      <path d="M192,28a4,4,0,0,0-4,4V68H68V32a4,4,0,0,0-8,0V224a4,4,0,0,0,8,0V188H188v36a4,4,0,0,0,8,0V32A4,4,0,0,0,192,28Zm-4,48v48H68V76ZM68,180V132H188v48Z"/>
    </svg>
  );
}
