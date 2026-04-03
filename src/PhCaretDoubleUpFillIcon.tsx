import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTk0LjM0QTgsOCwwLDAsMSwyMDgsMjA4SDQ4YTgsOCwwLDAsMS01LjY2LTEzLjY2TDEwOC42OSwxMjhINDhhOCw4LDAsMCwxLTUuNjYtMTMuNjZsODAtODBhOCw4LDAsMCwxLDExLjMyLDBsODAsODBBOCw4LDAsMCwxLDIwOCwxMjhIMTQ3LjMxWiIvPjwvc3ZnPg==)
 */
export function PhCaretDoubleUpFillIcon(props: PhCaretDoubleUpFillIconProps) {
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
      <path d="M213.66,194.34A8,8,0,0,1,208,208H48a8,8,0,0,1-5.66-13.66L108.69,128H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,208,128H147.31Z"/>
    </svg>
  );
}
