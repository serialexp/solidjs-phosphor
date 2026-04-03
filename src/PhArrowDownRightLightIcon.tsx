import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsODhWMTkyYTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLDAtMTJoODkuNTJMNTkuNzYsNjguMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxODYsMTc3LjUyVjg4YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowDownRightLightIcon(props: PhArrowDownRightLightIconProps) {
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
      <path d="M198,88V192a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h89.52L59.76,68.24a6,6,0,0,1,8.48-8.48L186,177.52V88a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
