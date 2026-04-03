import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCircleTextThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMTEyYTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMTY0LDExMlptLTQsMjhIOTZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsMC04Wm02OC0xMkExMDAsMTAwLDAsMCwxLDc5LjUsMjE1LjQ3bC0zNS42OSwxMS45YTEyLDEyLDAsMCwxLTE1LjE4LTE1LjE4bDExLjktMzUuNjlBMTAwLDEwMCwwLDEsMSwyMjgsMTI4Wm0tOCwwQTkyLDkyLDAsMSwwLDQ4LjM1LDE3NC4wN2E0LDQsMCwwLDEsLjMzLDMuMjdMMzYuMjIsMjE0LjcyYTQsNCwwLDAsMCw1LjA2LDUuMDZsMzcuMzgtMTIuNDZhMy45MywzLjkzLDAsMCwxLDEuMjctLjIxLDQuMDUsNC4wNSwwLDAsMSwyLC41NEE5Miw5MiwwLDAsMCwyMjAsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhChatCircleTextThinIcon(props: PhChatCircleTextThinIconProps) {
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
      <path d="M164,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,112Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm68-12A100,100,0,0,1,79.5,215.47l-35.69,11.9a12,12,0,0,1-15.18-15.18l11.9-35.69A100,100,0,1,1,228,128Zm-8,0A92,92,0,1,0,48.35,174.07a4,4,0,0,1,.33,3.27L36.22,214.72a4,4,0,0,0,5.06,5.06l37.38-12.46a3.93,3.93,0,0,1,1.27-.21,4.05,4.05,0,0,1,2,.54A92,92,0,0,0,220,128Z"/>
    </svg>
  );
}
