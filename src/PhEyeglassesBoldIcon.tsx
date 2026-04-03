import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEyeglassesBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZhMTIsMTIsMCwwLDAsMCwyNCwxMiwxMiwwLDAsMSwxMiwxMnY1MC40NkE0Ny45NCw0Ny45NCwwLDAsMCwxNDIuNzUsMTQ4aC0yOS41QTQ3Ljk0LDQ3Ljk0LDAsMCwwLDQ0LDEyMi40NlY3MkExMiwxMiwwLDAsMSw1Niw2MGExMiwxMiwwLDAsMCwwLTI0QTM2LDM2LDAsMCwwLDIwLDcydjkyYTQ4LDQ4LDAsMCwwLDk1LjMyLDhoMjUuMzZBNDgsNDgsMCwwLDAsMjM2LDE2NFY3MkEzNiwzNiwwLDAsMCwyMDAsMzZaTTY4LDE4OGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw2OCwxODhabTEyMCwwYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDE4OCwxODhaIi8+PC9zdmc+)
 */
export function PhEyeglassesBoldIcon(props: PhEyeglassesBoldIconProps) {
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
      <path d="M200,36a12,12,0,0,0,0,24,12,12,0,0,1,12,12v50.46A47.94,47.94,0,0,0,142.75,148h-29.5A47.94,47.94,0,0,0,44,122.46V72A12,12,0,0,1,56,60a12,12,0,0,0,0-24A36,36,0,0,0,20,72v92a48,48,0,0,0,95.32,8h25.36A48,48,0,0,0,236,164V72A36,36,0,0,0,200,36ZM68,188a24,24,0,1,1,24-24A24,24,0,0,1,68,188Zm120,0a24,24,0,1,1,24-24A24,24,0,0,1,188,188Z"/>
    </svg>
  );
}
