import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjAwYTQsNCwwLDAsMS04LDAsOTIuMSw5Mi4xLDAsMCwwLTkyLTkySDQxLjY2bDQxLjE3LDQxLjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTQ4LTQ4YTQsNCwwLDAsMSwwLTUuNjZsNDgtNDhhNCw0LDAsMCwxLDUuNjYsNS42Nkw0MS42NiwxMDBIMTI4QTEwMC4xMSwxMDAuMTEsMCwwLDEsMjI4LDIwMFoiLz48L3N2Zz4=)
 */
export function PhArrowBendUpLeftThinIcon(props: PhArrowBendUpLeftThinIconProps) {
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
      <path d="M228,200a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,100H128A100.11,100.11,0,0,1,228,200Z"/>
    </svg>
  );
}
