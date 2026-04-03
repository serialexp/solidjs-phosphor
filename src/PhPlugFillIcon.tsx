import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlugFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNzcuNjYsMjAzLjMxLDExMmwyNi4zNSwyNi4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMjEyLDE0My4zMWwtNTMsNTNhNDAsNDAsMCwwLDEtNTYuNTcsMEw4Ni43NSwxODAuNTcsMzcuNjYsMjI5LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw0OS4wOS00OS4wOUw1OS43MiwxNTMuNTRhNDAsNDAsMCwwLDEsMC01Ni41N2w1My01My02LjM1LTYuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE0NCw1Mi42OWwzNC4zNC0zNC4zNWE4LDgsMCwxLDEsMTEuMzIsMTEuMzJMMTU1LjMxLDY0LDE5MiwxMDAuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhPlugFillIcon(props: PhPlugFillIconProps) {
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
      <path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
