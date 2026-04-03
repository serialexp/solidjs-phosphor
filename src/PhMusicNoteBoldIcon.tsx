import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuNDUsNTIuNTFsLTgwLTI0QTEyLDEyLDAsMCwwLDExNiw0MFYxNDAuMjJBNTIsNTIsMCwxLDAsMTQwLDE4NFYxMDQuMTNsNjQuNTUsMTkuMzZBMTIsMTIsMCwwLDAsMjIwLDExMlY2NEExMiwxMiwwLDAsMCwyMTEuNDUsNTIuNTFaTTg4LDIxMmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSw4OCwyMTJaTTE5Niw5NS44N2wtNTYtMTYuOFY1Ni4xM2w1NiwxNi44WiIvPjwvc3ZnPg==)
 */
export function PhMusicNoteBoldIcon(props: PhMusicNoteBoldIconProps) {
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
      <path d="M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V104.13l64.55,19.36A12,12,0,0,0,220,112V64A12,12,0,0,0,211.45,52.51ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212ZM196,95.87l-56-16.8V56.13l56,16.8Z"/>
    </svg>
  );
}
