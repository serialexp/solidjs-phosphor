import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSixIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTA0YTU2LDU2LDAsMCwwLTE1LjYyLDIuMjNMMTQzLDUxLjkzQTgsOCwwLDEsMCwxMjksNDQuMDhsLTQ5LjU1LDg4QTU2LDU2LDAsMSwwLDEyOCwxMDRabTAsOTZhNDAsNDAsMCwxLDEsNDAtNDBBNDAsNDAsMCwwLDEsMTI4LDIwMFoiLz48L3N2Zz4=)
 */
export function PhNumberSixIcon(props: PhNumberSixIconProps) {
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
      <path d="M128,104a56,56,0,0,0-15.62,2.23L143,51.93A8,8,0,1,0,129,44.08l-49.55,88A56,56,0,1,0,128,104Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"/>
    </svg>
  );
}
