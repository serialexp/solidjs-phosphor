import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToteSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNjkuNEExNi4xMywxNi4xMywwLDAsMCwyMjMuOTIsNjRIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBIMzIuMDhhMTYuMTMsMTYuMTMsMCwwLDAtMTIsNS40LDE2LDE2LDAsMCwwLTMuOTIsMTIuNDhsMTQuMjYsMTIwYTE2LDE2LDAsMCwwLDE2LDE0LjEySDIwOS42N2ExNiwxNiwwLDAsMCwxNi0xNC4xMmwxNC4yNi0xMjBBMTYsMTYsMCwwLDAsMjM2LDY5LjRaTTEyOCwzMmEzMiwzMiwwLDAsMSwzMiwzMkg5NkEzMiwzMiwwLDAsMSwxMjgsMzJabTgxLjc2LDE2OGEuMTMuMTMsMCwwLDEtLjA5LDBINDYuMjVMMzIuMDgsODBIMjI0WiIvPjwvc3ZnPg==)
 */
export function PhToteSimpleIcon(props: PhToteSimpleIconProps) {
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
      <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"/>
    </svg>
  );
}
