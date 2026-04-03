import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTQxLjY2bC05Niw5NmE4LDgsMCwwLDEtMTEuMzIsMGwtOTYtOTZBOCw4LDAsMCwxLDMyLDEyOEg3MlY0OEExNiwxNiwwLDAsMSw4OCwzMmg4MGExNiwxNiwwLDAsMSwxNiwxNnY4MGg0MGE4LDgsMCwwLDEsNS42NiwxMy42NloiLz48L3N2Zz4=)
 */
export function PhArrowFatDownFillIcon(props: PhArrowFatDownFillIconProps) {
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
      <path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,5.66,13.66Z"/>
    </svg>
  );
}
