import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWebcamIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTA0YTQwLDQwLDAsMSwwLTQwLDQwQTQwLDQwLDAsMCwwLDE2OCwxMDRabS02NCwwYTI0LDI0LDAsMSwxLDI0LDI0QTI0LDI0LDAsMCwxLDEwNCwxMDRabTEyMCw5NkgxMzZWMTgzLjZhODAsODAsMCwxLDAtMTYsMFYyMDBIMzJhOCw4LDAsMCwwLDAsMTZIMjI0YTgsOCwwLDAsMCwwLTE2Wk02NCwxMDRhNjQsNjQsMCwxLDEsNjQsNjRBNjQuMDcsNjQuMDcsMCwwLDEsNjQsMTA0WiIvPjwvc3ZnPg==)
 */
export function PhWebcamIcon(props: PhWebcamIconProps) {
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
      <path d="M168,104a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Zm120,96H136V183.6a80,80,0,1,0-16,0V200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM64,104a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,104Z"/>
    </svg>
  );
}
