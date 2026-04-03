import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShareFatFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTE3LjY2bC04MCw4MEE4LDgsMCwwLDEsMTQ0LDE5MlYxNTIuMjNjLTU3LjEsMy4yNC05Ni4yNSw0MC4yNy0xMDcuMjQsNTJoMGExMiwxMiwwLDAsMS0yMC42OC05LjU4YzMuNzEtMzIuMjYsMjEuMzgtNjMuMjksNDkuNzYtODcuMzcsMjMuNTctMjAsNTIuMjItMzIuNjksNzguMTYtMzQuOTFWMzJhOCw4LDAsMCwxLDEzLjY2LTUuNjZsODAsODBBOCw4LDAsMCwxLDIzNy42NiwxMTcuNjZaIi8+PC9zdmc+)
 */
export function PhShareFatFillIcon(props: PhShareFatFillIconProps) {
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
      <path d="M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z"/>
    </svg>
  );
}
