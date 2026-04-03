import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNTZWMjAwYTYsNiwwLDAsMS0xMiwwVjEzNEg2MnY2NmE2LDYsMCwwLDEtMTIsMFY1NmE2LDYsMCwwLDEsMTIsMHY2NkgxOTRWNTZhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhTextHLightIcon(props: PhTextHLightIconProps) {
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
      <path d="M206,56V200a6,6,0,0,1-12,0V134H62v66a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v66H194V56a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
