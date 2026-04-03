import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingOfficeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjEySDIyOFY5Mmg0YTQsNCwwLDAsMCwwLThIMTgwVjQ0aDRhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4aDRWMjEySDI0YTQsNCwwLDAsMCwwLDhIMjQ4YTQsNCwwLDAsMCwwLThaTTIyMCw5MlYyMTJIMTgwVjkyWk01Miw0NEgxNzJWMjEySDE0MFYxNjBhNCw0LDAsMCwwLTQtNEg4OGE0LDQsMCwwLDAtNCw0djUySDUyWm04MCwxNjhIOTJWMTY0aDQwWk03Niw4MGE0LDQsMCwwLDEsNC00SDk2YTQsNCwwLDAsMSwwLDhIODBBNCw0LDAsMCwxLDc2LDgwWm00OCwwYTQsNCwwLDAsMSw0LTRoMTZhNCw0LDAsMCwxLDAsOEgxMjhBNCw0LDAsMCwxLDEyNCw4MFpNODAsMTI0YTQsNCwwLDAsMSwwLThIOTZhNCw0LDAsMCwxLDAsOFptNDQtNGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTI4QTQsNCwwLDAsMSwxMjQsMTIwWiIvPjwvc3ZnPg==)
 */
export function PhBuildingOfficeThinIcon(props: PhBuildingOfficeThinIconProps) {
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
      <path d="M248,212H228V92h4a4,4,0,0,0,0-8H180V44h4a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8h4V212H24a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM220,92V212H180V92ZM52,44H172V212H140V160a4,4,0,0,0-4-4H88a4,4,0,0,0-4,4v52H52Zm80,168H92V164h40ZM76,80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,80Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,80ZM80,124a4,4,0,0,1,0-8H96a4,4,0,0,1,0,8Zm44-4a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,120Z"/>
    </svg>
  );
}
