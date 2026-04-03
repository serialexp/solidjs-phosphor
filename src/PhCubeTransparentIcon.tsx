import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCubeTransparentIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsOTAuMzRoMGwtNTYtNTZBOCw4LDAsMCwwLDE2MCwzMkg0MGE4LDgsMCwwLDAtOCw4VjE2MGE4LDgsMCwwLDAsMi4zLDUuNjFsNTYsNTZoMEE4LDgsMCwwLDAsOTYsMjI0SDIxNmE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCwyMjEuNjYsOTAuMzRaTTE2OCw1OS4zMSwxOTYuNjksODhIMTY4Wk04OCwxOTYuNjksNTkuMzEsMTY4SDg4Wk04OCwxNTJINDhWNTkuMzFsNDAsNDBaTTU5LjMxLDQ4SDE1MlY4OEg5OS4zMVpNMTUyLDEwNHY0OEgxMDRWMTA0Wk0xMDQsMjA4VjE2OGg1Mi42OWw0MCw0MFptMTA0LTExLjMxLTQwLTQwVjEwNGg0MFoiLz48L3N2Zz4=)
 */
export function PhCubeTransparentIcon(props: PhCubeTransparentIconProps) {
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
      <path d="M221.66,90.34h0l-56-56A8,8,0,0,0,160,32H40a8,8,0,0,0-8,8V160a8,8,0,0,0,2.3,5.61l56,56h0A8,8,0,0,0,96,224H216a8,8,0,0,0,8-8V96A8,8,0,0,0,221.66,90.34ZM168,59.31,196.69,88H168ZM88,196.69,59.31,168H88ZM88,152H48V59.31l40,40ZM59.31,48H152V88H99.31ZM152,104v48H104V104ZM104,208V168h52.69l40,40Zm104-11.31-40-40V104h40Z"/>
    </svg>
  );
}
