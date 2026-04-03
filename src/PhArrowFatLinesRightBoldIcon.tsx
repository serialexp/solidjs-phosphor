import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTE5LjUxbC05Ni05NkExMiwxMiwwLDAsMCwxMjQsMzJWNjhoLTRhMTIsMTIsMCwwLDAtMTIsMTJ2OTZhMTIsMTIsMCwwLDAsMTIsMTJoNHYzNmExMiwxMiwwLDAsMCwyMC40OSw4LjQ5bDk2LTk2QTEyLDEyLDAsMCwwLDI0MC40OSwxMTkuNTFaTTE0OCwxOTVWMTc2YTEyLDEyLDAsMCwwLTEyLTEyaC00VjkyaDRhMTIsMTIsMCwwLDAsMTItMTJWNjFsNjcsNjdaTTUyLDgwdjk2YTEyLDEyLDAsMCwxLTI0LDBWODBhMTIsMTIsMCwwLDEsMjQsMFptNDAsMHY5NmExMiwxMiwwLDAsMS0yNCwwVjgwYTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
export function PhArrowFatLinesRightBoldIcon(props: PhArrowFatLinesRightBoldIconProps) {
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
      <path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68h-4a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h4v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12h-4V92h4a12,12,0,0,0,12-12V61l67,67ZM52,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
