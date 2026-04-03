import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCoatHangerThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuMTgsMTc0LjQsMTM0LjY3LDk2bDI3LjcyLTIwLjhBNCw0LDAsMCwwLDE2NCw3MmEzNiwzNiwwLDEsMC03MiwwLDQsNCwwLDAsMCw4LDAsMjgsMjgsMCwwLDEsNTUuOTItMmwtMzAuMjYsMjIuNy0uMTQuMUwxNi44MiwxNzQuNEExMiwxMiwwLDAsMCwyNCwxOTZIMjMyYTEyLDEyLDAsMCwwLDcuMi0yMS42Wm0tMy40MSwxMC44N0EzLjg4LDMuODgsMCwwLDEsMjMyLDE4OEgyNGE0LDQsMCwwLDEtMi40LTcuMkwxMjgsMTAxbDEwNi4zOCw3OS44QTMuODgsMy44OCwwLDAsMSwyMzUuNzcsMTg1LjI3WiIvPjwvc3ZnPg==)
 */
export function PhCoatHangerThinIcon(props: PhCoatHangerThinIconProps) {
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
      <path d="M239.18,174.4,134.67,96l27.72-20.8A4,4,0,0,0,164,72a36,36,0,1,0-72,0,4,4,0,0,0,8,0,28,28,0,0,1,55.92-2l-30.26,22.7-.14.1L16.82,174.4A12,12,0,0,0,24,196H232a12,12,0,0,0,7.2-21.6Zm-3.41,10.87A3.88,3.88,0,0,1,232,188H24a4,4,0,0,1-2.4-7.2L128,101l106.38,79.8A3.88,3.88,0,0,1,235.77,185.27Z"/>
    </svg>
  );
}
