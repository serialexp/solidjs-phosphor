import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerSimpleNoneFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjMuNTIsMjQuODFhOCw4LDAsMCwwLTguNDMuODhMODUuMjUsODBINDBBMTYsMTYsMCwwLDAsMjQsOTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIODUuMjVsNjkuODQsNTQuMzFBNy45NCw3Ljk0LDAsMCwwLDE2MCwyMzJhOCw4LDAsMCwwLDgtOFYzMkE4LDgsMCwwLDAsMTYzLjUyLDI0LjgxWiIvPjwvc3ZnPg==)
 */
export function PhSpeakerSimpleNoneFillIcon(props: PhSpeakerSimpleNoneFillIconProps) {
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
      <path d="M163.52,24.81a8,8,0,0,0-8.43.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A7.94,7.94,0,0,0,160,232a8,8,0,0,0,8-8V32A8,8,0,0,0,163.52,24.81Z"/>
    </svg>
  );
}
