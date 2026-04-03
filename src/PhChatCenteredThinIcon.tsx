import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCenteredThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTg0YTEyLDEyLDAsMCwwLDEyLDEyaDYyLjc1TDExNy41OCwyMjJhMTIsMTIsMCwwLDAsMjAuODQsMEwxNTMuMjUsMTk2SDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTQsMTQwYTQsNCwwLDAsMS00LDRIMTUwLjkzYTQsNCwwLDAsMC0zLjQ3LDJsLTE2LDI4YTQsNCwwLDAsMS02Ljk0LDBsLTE2LTI4YTQsNCwwLDAsMC0zLjQ3LTJINDBhNCw0LDAsMCwxLTQtNFY1NmE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhChatCenteredThinIcon(props: PhChatCenteredThinIconProps) {
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
      <path d="M216,44H40A12,12,0,0,0,28,56V184a12,12,0,0,0,12,12h62.75L117.58,222a12,12,0,0,0,20.84,0L153.25,196H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,140a4,4,0,0,1-4,4H150.93a4,4,0,0,0-3.47,2l-16,28a4,4,0,0,1-6.94,0l-16-28a4,4,0,0,0-3.47-2H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
