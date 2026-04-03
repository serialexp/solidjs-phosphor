import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandPalmIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsODhhMjcuNzUsMjcuNzUsMCwwLDAtMTIsMi43MVY2MGEyOCwyOCwwLDAsMC00MS4zNi0yNC42QTI4LDI4LDAsMCwwLDgwLDQ0djYuNzFBMjcuNzUsMjcuNzUsMCwwLDAsNjgsNDgsMjgsMjgsMCwwLDAsNDAsNzZ2NzZhODgsODgsMCwwLDAsMTc2LDBWMTE2QTI4LDI4LDAsMCwwLDE4OCw4OFptMTIsNjRhNzIsNzIsMCwwLDEtMTQ0LDBWNzZhMTIsMTIsMCwwLDEsMjQsMHY0NGE4LDgsMCwwLDAsMTYsMFY0NGExMiwxMiwwLDAsMSwyNCwwdjY4YTgsOCwwLDAsMCwxNiwwVjYwYTEyLDEyLDAsMCwxLDI0LDB2NjguNjdBNDguMDgsNDguMDgsMCwwLDAsMTIwLDE3NmE4LDgsMCwwLDAsMTYsMCwzMiwzMiwwLDAsMSwzMi0zMiw4LDgsMCwwLDAsOC04VjExNmExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhHandPalmIcon(props: PhHandPalmIconProps) {
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
      <path d="M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
