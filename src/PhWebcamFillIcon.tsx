import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWebcamFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTA0YTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDE2MCwxMDRabTcyLDEwNGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMSwwLTE2aDg4VjE4My42YTgwLDgwLDAsMSwxLDE2LDBWMjAwaDg4QTgsOCwwLDAsMSwyMzIsMjA4Wk0xMjgsMTUyYTQ4LDQ4LDAsMSwwLTQ4LTQ4QTQ4LjA1LDQ4LjA1LDAsMCwwLDEyOCwxNTJaIi8+PC9zdmc+)
 */
export function PhWebcamFillIcon(props: PhWebcamFillIconProps) {
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
      <path d="M160,104a32,32,0,1,1-32-32A32,32,0,0,1,160,104Zm72,104a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h88V183.6a80,80,0,1,1,16,0V200h88A8,8,0,0,1,232,208ZM128,152a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,152Z"/>
    </svg>
  );
}
