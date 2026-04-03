import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMjI0YTQsNCwwLDAsMS00LDRBMTAwLjExLDEwMC4xMSwwLDAsMSwxMDAsMTI4VjQxLjY2TDU4LjgzLDgyLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZsNDgtNDhhNCw0LDAsMCwxLDUuNjYsMGw0OCw0OGE0LDQsMCwwLDEtNS42Niw1LjY2TDEwOCw0MS42NlYxMjhhOTIuMSw5Mi4xLDAsMCwwLDkyLDkyQTQsNCwwLDAsMSwyMDQsMjI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowBendLeftUpThinIcon(props: PhArrowBendLeftUpThinIconProps) {
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
      <path d="M204,224a4,4,0,0,1-4,4A100.11,100.11,0,0,1,100,128V41.66L58.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L108,41.66V128a92.1,92.1,0,0,0,92,92A4,4,0,0,1,204,224Z"/>
    </svg>
  );
}
