import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFiveIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTYwYTU2LDU2LDAsMCwxLTkzLjMzLDQxLjc0LDgsOCwwLDEsMSwxMC42Ni0xMS45Miw0MCw0MCwwLDEsMCwuNzctNjAuMyw4LDgsMCwwLDEtMTMtNy42Nkw5Ni4xNiw0Ni40M0E4LDgsMCwwLDEsMTA0LDQwaDY0YTgsOCwwLDAsMSwwLDE2SDExMC41NmwtMTAuMzIsNTEuNkE1Niw1NiwwLDAsMSwxNzYsMTYwWiIvPjwvc3ZnPg==)
 */
export function PhNumberFiveIcon(props: PhNumberFiveIconProps) {
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
      <path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z"/>
    </svg>
  );
}
