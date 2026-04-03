import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleHorizontalBreakLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMiwxMjhhNDIsNDIsMCwwLDAsNDIsNDJoNDBhNiw2LDAsMCwxLDAsMTJINjRBNTQsNTQsMCwwLDEsNjQsNzRoNDBhNiw2LDAsMCwxLDAsMTJINjRBNDIsNDIsMCwwLDAsMjIsMTI4Wk0xOTIsNzRIMTUyYTYsNiwwLDAsMCwwLDEyaDQwYTQyLDQyLDAsMCwxLDAsODRIMTUyYTYsNiwwLDAsMCwwLDEyaDQwYTU0LDU0LDAsMCwwLDAtMTA4WiIvPjwvc3ZnPg==)
 */
export function PhLinkSimpleHorizontalBreakLightIcon(props: PhLinkSimpleHorizontalBreakLightIconProps) {
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
      <path d="M22,128a42,42,0,0,0,42,42h40a6,6,0,0,1,0,12H64A54,54,0,0,1,64,74h40a6,6,0,0,1,0,12H64A42,42,0,0,0,22,128ZM192,74H152a6,6,0,0,0,0,12h40a42,42,0,0,1,0,84H152a6,6,0,0,0,0,12h40a54,54,0,0,0,0-108Z"/>
    </svg>
  );
}
