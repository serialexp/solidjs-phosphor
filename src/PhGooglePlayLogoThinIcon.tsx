import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGooglePlayLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuODksMTE3LjY5LDcwLjA1LDIxLjYyYTEyLDEyLDAsMCwwLTEyLjEzLDBBMTEuNjksMTEuNjksMCwwLDAsNTIsMzEuODdWMjI0LjEzYTExLjY5LDExLjY5LDAsMCwwLDUuOTIsMTAuMjEsMTIsMTIsMCwwLDAsMTIuMTMsMGwxNjcuNzctOTZhMTEuNzYsMTEuNzYsMCwwLDAsLjA3LTIwLjY2Wm0tNTIuNDQtMjAuOEwxNjAsMTIyLjM0LDY2LjQsMjguNzVaTTYwLDIyMi4zM1YzMy42N0wxNTQuMzQsMTI4Wm02LjQsNC45MkwxNjAsMTMzLjY2bDI1LjQ1LDI1LjQ1Wm0xNjcuNTEtOTUuODhMMTkyLjY1LDE1NWwtMjctMjcsMjctMjdMMjM0LDEyNC42NmEzLjc3LDMuNzcsMCwwLDEtLjA3LDYuNzFaIi8+PC9zdmc+)
 */
export function PhGooglePlayLogoThinIcon(props: PhGooglePlayLogoThinIconProps) {
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
      <path d="M237.89,117.69,70.05,21.62a12,12,0,0,0-12.13,0A11.69,11.69,0,0,0,52,31.87V224.13a11.69,11.69,0,0,0,5.92,10.21,12,12,0,0,0,12.13,0l167.77-96a11.76,11.76,0,0,0,.07-20.66Zm-52.44-20.8L160,122.34,66.4,28.75ZM60,222.33V33.67L154.34,128Zm6.4,4.92L160,133.66l25.45,25.45Zm167.51-95.88L192.65,155l-27-27,27-27L234,124.66a3.77,3.77,0,0,1-.07,6.71Z"/>
    </svg>
  );
}
