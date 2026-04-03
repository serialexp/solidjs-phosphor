import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuestionFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE2OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTkyWm04LTQ4LjcyVjE0NGE4LDgsMCwwLDEtMTYsMHYtOGE4LDgsMCwwLDEsOC04YzEzLjIzLDAsMjQtOSwyNC0yMHMtMTAuNzctMjAtMjQtMjAtMjQsOS0yNCwyMHY0YTgsOCwwLDAsMS0xNiwwdi00YzAtMTkuODUsMTcuOTQtMzYsNDAtMzZzNDAsMTYuMTUsNDAsMzZDMTY4LDEyNS4zOCwxNTQuMjQsMTM5LjkzLDEzNiwxNDMuMjhaIi8+PC9zdmc+)
 */
export function PhQuestionFillIcon(props: PhQuestionFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"/>
    </svg>
  );
}
