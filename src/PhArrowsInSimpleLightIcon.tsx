import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsNTIuMjQsMTU4LjQ4LDEwNkgxOTJhNiw2LDAsMCwxLDAsMTJIMTQ0YTYsNiwwLDAsMS02LTZWNjRhNiw2LDAsMCwxLDEyLDBWOTcuNTJsNTMuNzYtNTMuNzZhNiw2LDAsMCwxLDguNDgsOC40OFpNMTEyLDEzOEg2NGE2LDYsMCwwLDAsMCwxMkg5Ny41Mkw0My43NiwyMDMuNzZhNiw2LDAsMSwwLDguNDgsOC40OEwxMDYsMTU4LjQ4VjE5MmE2LDYsMCwwLDAsMTIsMFYxNDRBNiw2LDAsMCwwLDExMiwxMzhaIi8+PC9zdmc+)
 */
export function PhArrowsInSimpleLightIcon(props: PhArrowsInSimpleLightIconProps) {
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
      <path d="M212.24,52.24,158.48,106H192a6,6,0,0,1,0,12H144a6,6,0,0,1-6-6V64a6,6,0,0,1,12,0V97.52l53.76-53.76a6,6,0,0,1,8.48,8.48ZM112,138H64a6,6,0,0,0,0,12H97.52L43.76,203.76a6,6,0,1,0,8.48,8.48L106,158.48V192a6,6,0,0,0,12,0V144A6,6,0,0,0,112,138Z"/>
    </svg>
  );
}
