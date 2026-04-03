import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuNDUsNTIuNTFsLTgwLTI0QTEyLDEyLDAsMCwwLDExNiw0MFYxNDAuMjJBNTIsNTIsMCwxLDAsMTQwLDE4NFY1Ni4xM2w2NC41NSwxOS4zNmExMiwxMiwwLDEsMCw2LjktMjNaTTg4LDIxMmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSw4OCwyMTJaIi8+PC9zdmc+)
 */
export function PhMusicNoteSimpleBoldIcon(props: PhMusicNoteSimpleBoldIconProps) {
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
      <path d="M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V56.13l64.55,19.36a12,12,0,1,0,6.9-23ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212Z"/>
    </svg>
  );
}
