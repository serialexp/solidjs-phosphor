import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberThreeIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTYwYTU2LDU2LDAsMCwxLTkzLjMzLDQxLjc0LDgsOCwwLDEsMSwxMC42Ni0xMS45MkE0MCw0MCwwLDEsMCwxMjAsMTIwYTgsOCwwLDAsMS02LjQtMTIuOEwxNTIsNTZIODhhOCw4LDAsMCwxLDAtMTZoODBhOCw4LDAsMCwxLDYuNCwxMi44bC0zOS44NCw1My4xMkE1Ni4xLDU2LjEsMCwwLDEsMTc2LDE2MFoiLz48L3N2Zz4=)
 */
export function PhNumberThreeIcon(props: PhNumberThreeIconProps) {
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
      <path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z"/>
    </svg>
  );
}
