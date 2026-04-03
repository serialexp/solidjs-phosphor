import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsMTM2LDE0NCwzNi42OUExNS44NiwxNS44NiwwLDAsMCwxMzIuNjksMzJINDBhOCw4LDAsMCwwLTgsOHY5Mi42OUExNS44NiwxNS44NiwwLDAsMCwzNi42OSwxNDRMMTM2LDI0My4zMWExNiwxNiwwLDAsMCwyMi42MywwbDg0LjY4LTg0LjY4YTE2LDE2LDAsMCwwLDAtMjIuNjNaTTg0LDk2QTEyLDEyLDAsMSwxLDk2LDg0LDEyLDEyLDAsMCwxLDg0LDk2WiIvPjwvc3ZnPg==)
 */
export function PhTagFillIcon(props: PhTagFillIconProps) {
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
      <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"/>
    </svg>
  );
}
