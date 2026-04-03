import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberTwoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDg4YTEyLDEyLDAsMCwxLTkuNi0xOS4ybDcxLjk1LTk1LjkyYTI4LDI4LDAsMSwwLTQ4LTI4LjA2LDEyLDEyLDAsMCwxLTIyLTkuNjIsNTIuMzIsNTIuMzIsMCwwLDEsNi4xMy0xMC40OSw1Miw1MiwwLDAsMSw4My4wNiw2Mi41OUwxMTIsMTk2aDU2QTEyLDEyLDAsMCwxLDE4MCwyMDhaIi8+PC9zdmc+)
 */
export function PhNumberTwoBoldIcon(props: PhNumberTwoBoldIconProps) {
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
      <path d="M180,208a12,12,0,0,1-12,12H88a12,12,0,0,1-9.6-19.2l71.95-95.92a28,28,0,1,0-48-28.06,12,12,0,0,1-22-9.62,52.32,52.32,0,0,1,6.13-10.49,52,52,0,0,1,83.06,62.59L112,196h56A12,12,0,0,1,180,208Z"/>
    </svg>
  );
}
