import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjRINzJBMzIsMzIsMCwwLDAsNDAsNTZWMjI0YTgsOCwwLDAsMCw4LDhIMTkyYTgsOCwwLDAsMCwwLTE2SDU2YTE2LDE2LDAsMCwxLDE2LTE2SDIwOGE4LDgsMCwwLDAsOC04VjMyQTgsOCwwLDAsMCwyMDgsMjRabS04LDE2MEg3MmEzMS44MiwzMS44MiwwLDAsMC0xNiw0LjI5VjU2QTE2LDE2LDAsMCwxLDcyLDQwSDIwMFoiLz48L3N2Zz4=)
 */
export function PhBookIcon(props: PhBookIconProps) {
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
      <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"/>
    </svg>
  );
}
