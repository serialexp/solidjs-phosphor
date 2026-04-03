import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBirdFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuNDQsNzMuMzQsMjEzLjIxLDU3Ljg2QTYwLDYwLDAsMCwwLDE1NiwxNmgtLjI5QzEyMi43OSwxNi4xNiw5Niw0My40Nyw5Niw3Ni44OVY5Ni42M0wxMS42MywxOTcuODhsLS4xLjEyQTE2LDE2LDAsMCwwLDI0LDIyNGg4OEExMDQuMTEsMTA0LjExLDAsMCwwLDIxNiwxMjBWMTAwLjI4bDIwLjQ0LTEzLjYyYTgsOCwwLDAsMCwwLTEzLjMyWk0xMjYuMTUsMTMzLjEybC02MCw3MmE4LDgsMCwxLDEtMTIuMjktMTAuMjRsNjAtNzJhOCw4LDAsMSwxLDEyLjI5LDEwLjI0Wk0xNjQsODBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTY0LDgwWiIvPjwvc3ZnPg==)
 */
export function PhBirdFillIcon(props: PhBirdFillIconProps) {
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
      <path d="M236.44,73.34,213.21,57.86A60,60,0,0,0,156,16h-.29C122.79,16.16,96,43.47,96,76.89V96.63L11.63,197.88l-.1.12A16,16,0,0,0,24,224h88A104.11,104.11,0,0,0,216,120V100.28l20.44-13.62a8,8,0,0,0,0-13.32ZM126.15,133.12l-60,72a8,8,0,1,1-12.29-10.24l60-72a8,8,0,1,1,12.29,10.24ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z"/>
    </svg>
  );
}
