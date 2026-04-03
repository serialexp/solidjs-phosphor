import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuMyw1Ni4zNGwtODAtMjRBOCw4LDAsMCwwLDEyMCw0MFYxNDguMjZBNDgsNDgsMCwxLDAsMTM2LDE4NFY1MC43NWw2OS43LDIwLjkxYTgsOCwwLDEsMCw0LjYtMTUuMzJaTTg4LDIxNmEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSw4OCwyMTZaIi8+PC9zdmc+)
 */
export function PhMusicNoteSimpleIcon(props: PhMusicNoteSimpleIconProps) {
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
      <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z"/>
    </svg>
  );
}
