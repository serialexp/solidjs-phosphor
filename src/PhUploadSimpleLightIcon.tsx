import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUploadSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTQ0djY0YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLTYtNlYxNDRhNiw2LDAsMCwxLDEyLDB2NThIMjEwVjE0NGE2LDYsMCwwLDEsMTIsMFpNOTIuMjQsNzYuMjQsMTIyLDQ2LjQ5VjE0NGE2LDYsMCwwLDAsMTIsMFY0Ni40OWwyOS43NiwyOS43NWE2LDYsMCwwLDAsOC40OC04LjQ4bC00MC00MGE2LDYsMCwwLDAtOC40OCwwbC00MCw0MGE2LDYsMCwwLDAsOC40OCw4LjQ4WiIvPjwvc3ZnPg==)
 */
export function PhUploadSimpleLightIcon(props: PhUploadSimpleLightIconProps) {
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
      <path d="M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"/>
    </svg>
  );
}
