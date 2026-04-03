import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDAsMCwzMS44NSwxNzcuMjNMMjEsMjA5LjY2QTIwLDIwLDAsMCwwLDQ2LjM0LDIzNWwzMi40My0xMC44MUExMDgsMTA4LDAsMSwwLDEyOCwyMFptMCwxOTJhODQsODQsMCwwLDEtNDIuMDYtMTEuMjcsMTIsMTIsMCwwLDAtNi0xLjYyLDEyLjEsMTIuMSwwLDAsMC0zLjguNjJsLTI5Ljc5LDkuOTMsOS45My0yOS43OWExMiwxMiwwLDAsMC0xLTkuODFBODQsODQsMCwxLDEsMTI4LDIxMloiLz48L3N2Zz4=)
 */
export function PhChatCircleBoldIcon(props: PhChatCircleBoldIconProps) {
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
      <path d="M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"/>
    </svg>
  );
}
