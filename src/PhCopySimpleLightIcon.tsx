import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopySimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjZINDBhNiw2LDAsMCwwLTYsNlYyMTZhNiw2LDAsMCwwLDYsNkgxODRhNiw2LDAsMCwwLDYtNlY3MkE2LDYsMCwwLDAsMTg0LDY2Wm0tNiwxNDRINDZWNzhIMTc4Wk0yMjIsNDBWMTg0YTYsNiwwLDAsMS0xMiwwVjQ2SDcyYTYsNiwwLDAsMSwwLTEySDIxNkE2LDYsMCwwLDEsMjIyLDQwWiIvPjwvc3ZnPg==)
 */
export function PhCopySimpleLightIcon(props: PhCopySimpleLightIconProps) {
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
      <path d="M184,66H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V72A6,6,0,0,0,184,66Zm-6,144H46V78H178ZM222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40Z"/>
    </svg>
  );
}
