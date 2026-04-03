import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatTeardropThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsMjhhOTYuMTEsOTYuMTEsMCwwLDAtOTYsOTZ2ODRhMTIsMTIsMCwwLDAsMTIsMTJoODRhOTYsOTYsMCwwLDAsMC0xOTJabTAsMTg0SDQ4YTQsNCwwLDAsMS00LTRWMTI0YTg4LDg4LDAsMSwxLDg4LDg4WiIvPjwvc3ZnPg==)
 */
export function PhChatTeardropThinIcon(props: PhChatTeardropThinIconProps) {
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
      <path d="M132,28a96.11,96.11,0,0,0-96,96v84a12,12,0,0,0,12,12h84a96,96,0,0,0,0-192Zm0,184H48a4,4,0,0,1-4-4V124a88,88,0,1,1,88,88Z"/>
    </svg>
  );
}
