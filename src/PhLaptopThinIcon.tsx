import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLaptopThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTcySDIyMFY3MmEyMCwyMCwwLDAsMC0yMC0yMEg1NkEyMCwyMCwwLDAsMCwzNiw3MlYxNzJIMjRhNCw0LDAsMCwwLTQsNHYxNmEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWMTc2QTQsNCwwLDAsMCwyMzIsMTcyWk00NCw3MkExMiwxMiwwLDAsMSw1Niw2MEgyMDBhMTIsMTIsMCwwLDEsMTIsMTJWMTcySDQ0Wk0yMjgsMTkyYTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLTEyLTEyVjE4MEgyMjhaTTE0OCw4OGE0LDQsMCwwLDEtNCw0SDExMmE0LDQsMCwwLDEsMC04aDMyQTQsNCwwLDAsMSwxNDgsODhaIi8+PC9zdmc+)
 */
export function PhLaptopThinIcon(props: PhLaptopThinIconProps) {
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
      <path d="M232,172H220V72a20,20,0,0,0-20-20H56A20,20,0,0,0,36,72V172H24a4,4,0,0,0-4,4v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A4,4,0,0,0,232,172ZM44,72A12,12,0,0,1,56,60H200a12,12,0,0,1,12,12V172H44ZM228,192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V180H228ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z"/>
    </svg>
  );
}
