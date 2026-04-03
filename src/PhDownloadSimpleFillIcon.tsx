import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDownloadSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTQ0djY0YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFYxNDRhOCw4LDAsMCwxLDE2LDB2NTZIMjA4VjE0NGE4LDgsMCwwLDEsMTYsMFptLTEwMS42Niw1LjY2YTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwQTgsOCwwLDAsMCwxNjgsOTZIMTM2VjMyYTgsOCwwLDAsMC0xNiwwVjk2SDg4YTgsOCwwLDAsMC01LjY2LDEzLjY2WiIvPjwvc3ZnPg==)
 */
export function PhDownloadSimpleFillIcon(props: PhDownloadSimpleFillIconProps) {
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
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"/>
    </svg>
  );
}
