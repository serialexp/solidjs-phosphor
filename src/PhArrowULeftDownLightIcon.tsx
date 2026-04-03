import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowULeftDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsODh2ODhhNiw2LDAsMCwxLTEyLDBWODhBNTAsNTAsMCwwLDAsOTQsODhWMjA5LjUxbDM3Ljc2LTM3Ljc1YTYsNiwwLDAsMSw4LjQ4LDguNDhsLTQ4LDQ4YTYsNiwwLDAsMS04LjQ4LDBsLTQ4LTQ4YTYsNiwwLDAsMSw4LjQ4LTguNDhMODIsMjA5LjUxVjg4YTYyLDYyLDAsMCwxLDEyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowULeftDownLightIcon(props: PhArrowULeftDownLightIconProps) {
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
      <path d="M206,88v88a6,6,0,0,1-12,0V88A50,50,0,0,0,94,88V209.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,209.51V88a62,62,0,0,1,124,0Z"/>
    </svg>
  );
}
