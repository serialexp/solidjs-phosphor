import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGoogleCardboardLogoDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZIMzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDgsOEg5NmwyNi4zNC0yNi4zNGE4LDgsMCwwLDEsMTEuMzIsMEwxNjAsMjAwaDY0YTgsOCwwLDAsMCw4LThWNjRBOCw4LDAsMCwwLDIyNCw1NlpNODAsMTUyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDgwLDE1MlptOTYsMGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwxNzYsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCw0OEgzMkExNiwxNiwwLDAsMCwxNiw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIOTZhOCw4LDAsMCwwLDUuNjYtMi4zNEwxMjgsMTc5LjMxbDI2LjM0LDI2LjM1QTgsOCwwLDAsMCwxNjAsMjA4aDY0YTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIyNCw0OFptMCwxNDRIMTYzLjMxbC0yNC0yNGExNiwxNiwwLDAsMC0yMi42MiwwbC0yNCwyNEgzMlY2NEgyMjRaTTgwLDE2MGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCw4MCwxNjBabTAtNDhhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsODAsMTEyWm05Niw0OGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCwxNzYsMTYwWm0wLTQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDE3NiwxMTJaIi8+PC9zdmc+)
 */
export function PhGoogleCardboardLogoDuotoneIcon(props: PhGoogleCardboardLogoDuotoneIconProps) {
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
      <path d="M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96l26.34-26.34a8,8,0,0,1,11.32,0L160,200h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" opacity="0.2"/><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z"/>
    </svg>
  );
}
