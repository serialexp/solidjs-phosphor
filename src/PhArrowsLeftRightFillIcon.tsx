import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsLeftRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Mi4zNCw4NS42NmE4LDgsMCwwLDEsMC0xMS4zMmwzMi0zMkE4LDgsMCwwLDEsODgsNDhWNzJIMjA4YTgsOCwwLDAsMSwwLDE2SDg4djI0YTgsOCwwLDAsMS0xMy42Niw1LjY2Wm0xNzEuMzIsODQuNjgtMzItMzJBOCw4LDAsMCwwLDE2OCwxNDR2MjRINDhhOCw4LDAsMCwwLDAsMTZIMTY4djI0YTgsOCwwLDAsMCwxMy42Niw1LjY2bDMyLTMyQTgsOCwwLDAsMCwyMTMuNjYsMTcwLjM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowsLeftRightFillIcon(props: PhArrowsLeftRightFillIconProps) {
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
      <path d="M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z"/>
    </svg>
  );
}
