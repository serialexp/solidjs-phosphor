import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAndroidLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTQ4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE3NiwxNDhaTTkyLDEzNmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw5MiwxMzZabTE0OCwyNHYyNGExNiwxNiwwLDAsMS0xNiwxNkgzMmExNiwxNiwwLDAsMS0xNi0xNlYxNjEuMTNBMTEzLjM4LDExMy4zOCwwLDAsMSw1MS40LDc4LjcyTDI2LjM0LDUzLjY2QTgsOCwwLDAsMSwzNy42Niw0Mi4zNEw2My44Miw2OC41YTExMS40MywxMTEuNDMsMCwwLDEsMTI4LjU1LS4xOWwyNi0yNmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMjA0LjgyLDc4LjVjLjc1LjcxLDEuNSwxLjQzLDIuMjQsMi4xN0ExMTEuMjUsMTExLjI1LDAsMCwxLDI0MCwxNjBabS0xNiwwYTk2LDk2LDAsMCwwLTk2LTk2aC0uMzRDNzQuOTEsNjQuMTgsMzIsMTA3Ljc1LDMyLDE2MS4xM1YxODRIMjI0WiIvPjwvc3ZnPg==)
 */
export function PhAndroidLogoIcon(props: PhAndroidLogoIconProps) {
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
      <path d="M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V161.13A113.38,113.38,0,0,1,51.4,78.72L26.34,53.66A8,8,0,0,1,37.66,42.34L63.82,68.5a111.43,111.43,0,0,1,128.55-.19l26-26a8,8,0,0,1,11.32,11.32L204.82,78.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,160Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,64.18,32,107.75,32,161.13V184H224Z"/>
    </svg>
  );
}
