import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerNoneBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTcuMjcsMjEuMjJhMTIsMTIsMCwwLDAtMTIuNjQsMS4zMUw3NS44OCw3NkgzMkEyMCwyMCwwLDAsMCwxMiw5NnY2NGEyMCwyMCwwLDAsMCwyMCwyMEg3NS44OGw2OC43NSw1My40N0ExMiwxMiwwLDAsMCwxNjQsMjI0VjMyQTEyLDEyLDAsMCwwLDE1Ny4yNywyMS4yMlpNMzYsMTAwSDY4djU2SDM2Wm0xMDQsOTkuNDZMOTIsMTYyLjEyVjkzLjg4bDQ4LTM3LjM0WiIvPjwvc3ZnPg==)
 */
export function PhSpeakerNoneBoldIcon(props: PhSpeakerNoneBoldIconProps) {
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
      <path d="M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.46L92,162.12V93.88l48-37.34Z"/>
    </svg>
  );
}
