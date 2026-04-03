import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveSquareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTI4djU2YTYsNiwwLDAsMS02LDZIMTI4YTYsNiwwLDAsMS02LTZWNzhIMzB2NTBhNiw2LDAsMCwxLTEyLDBWNzJhNiw2LDAsMCwxLDYtNkgxMjhhNiw2LDAsMCwxLDYsNlYxNzhoOTJWMTI4YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhWaveSquareLightIcon(props: PhWaveSquareLightIconProps) {
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
      <path d="M238,128v56a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V78H30v50a6,6,0,0,1-12,0V72a6,6,0,0,1,6-6H128a6,6,0,0,1,6,6V178h92V128a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
