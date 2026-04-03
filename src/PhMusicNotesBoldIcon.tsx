import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNotesBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuMzgsMTQuNTRhMTIsMTIsMCwwLDAtMTAuMjktMi4xOGwtMTI4LDMyQTEyLDEyLDAsMCwwLDY4LDU2VjE1OS4zNUE0MCw0MCwwLDEsMCw5MiwxOTZWMTEzLjM3bDEwNC0yNnY0MEE0MCw0MCwwLDEsMCwyMjAsMTY0VjI0QTEyLDEyLDAsMCwwLDIxNS4zOCwxNC41NFpNNTIsMjEyYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDUyLDIxMlpNOTIsODguNjNWNjUuMzdsMTA0LTI2VjYyLjYzWk0xODAsMTgwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDE4MCwxODBaIi8+PC9zdmc+)
 */
export function PhMusicNotesBoldIcon(props: PhMusicNotesBoldIconProps) {
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
      <path d="M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V113.37l104-26v40A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212ZM92,88.63V65.37l104-26V62.63ZM180,180a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z"/>
    </svg>
  );
}
