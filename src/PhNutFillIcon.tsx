import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNutFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuNjgsNjYuMTUsMTM1LjY4LDE4YTE1Ljg4LDE1Ljg4LDAsMCwwLTE1LjM2LDBsLTg4LDQ4LjE3YTE2LDE2LDAsMCwwLTguMzIsMTR2OTUuNjRhMTYsMTYsMCwwLDAsOC4zMiwxNGw4OCw0OC4xN2ExNS44OCwxNS44OCwwLDAsMCwxNS4zNiwwbDg4LTQ4LjE3YTE2LDE2LDAsMCwwLDguMzItMTRWODAuMThBMTYsMTYsMCwwLDAsMjIzLjY4LDY2LjE1Wk0xMjgsMTY4YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDEyOCwxNjhaIi8+PC9zdmc+)
 */
export function PhNutFillIcon(props: PhNutFillIconProps) {
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
      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"/>
    </svg>
  );
}
