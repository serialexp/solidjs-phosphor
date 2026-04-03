import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveSawtoothBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguMjksMTM4LjIybC0xMDQsNjRBMTIsMTIsMCwwLDEsMTE2LDE5MlY4NS40N0wzMC4yOSwxMzguMjJhMTIsMTIsMCwwLDEtMTIuNTgtMjAuNDRsMTA0LTY0QTEyLDEyLDAsMCwxLDE0MCw2NFYxNzAuNTNsODUuNzEtNTIuNzVhMTIsMTIsMCwxLDEsMTIuNTgsMjAuNDRaIi8+PC9zdmc+)
 */
export function PhWaveSawtoothBoldIcon(props: PhWaveSawtoothBoldIconProps) {
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
      <path d="M238.29,138.22l-104,64A12,12,0,0,1,116,192V85.47L30.29,138.22a12,12,0,0,1-12.58-20.44l104-64A12,12,0,0,1,140,64V170.53l85.71-52.75a12,12,0,1,1,12.58,20.44Z"/>
    </svg>
  );
}
