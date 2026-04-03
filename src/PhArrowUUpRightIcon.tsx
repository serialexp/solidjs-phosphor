import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuMzQsMTMwLjM0LDIwNC42OSw5Nkg4OGE0OCw0OCwwLDAsMCwwLDk2aDg4YTgsOCwwLDAsMSwwLDE2SDg4QTY0LDY0LDAsMCwxLDg4LDgwSDIwNC42OUwxNzAuMzQsNDUuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMybDQ4LDQ4YTgsOCwwLDAsMSwwLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJaIi8+PC9zdmc+)
 */
export function PhArrowUUpRightIcon(props: PhArrowUUpRightIconProps) {
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
      <path d="M170.34,130.34,204.69,96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80H204.69L170.34,45.66a8,8,0,0,1,11.32-11.32l48,48a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32Z"/>
    </svg>
  );
}
