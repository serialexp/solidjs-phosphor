import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCirclesFourBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03OCwzNmE0Miw0MiwwLDEsMCw0Miw0MkE0Miw0MiwwLDAsMCw3OCwzNlptMCw2MEExOCwxOCwwLDEsMSw5Niw3OCwxOCwxOCwwLDAsMSw3OCw5NlptMTAwLDI0YTQyLDQyLDAsMSwwLTQyLTQyQTQyLDQyLDAsMCwwLDE3OCwxMjBabTAtNjBhMTgsMTgsMCwxLDEtMTgsMThBMTgsMTgsMCwwLDEsMTc4LDYwWk03OCwxMzZhNDIsNDIsMCwxLDAsNDIsNDJBNDIsNDIsMCwwLDAsNzgsMTM2Wm0wLDYwYTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDc4LDE5NlptMTAwLTYwYTQyLDQyLDAsMSwwLDQyLDQyQTQyLDQyLDAsMCwwLDE3OCwxMzZabTAsNjBhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsMTc4LDE5NloiLz48L3N2Zz4=)
 */
export function PhCirclesFourBoldIcon(props: PhCirclesFourBoldIconProps) {
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
      <path d="M78,36a42,42,0,1,0,42,42A42,42,0,0,0,78,36Zm0,60A18,18,0,1,1,96,78,18,18,0,0,1,78,96Zm100,24a42,42,0,1,0-42-42A42,42,0,0,0,178,120Zm0-60a18,18,0,1,1-18,18A18,18,0,0,1,178,60ZM78,136a42,42,0,1,0,42,42A42,42,0,0,0,78,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,78,196Zm100-60a42,42,0,1,0,42,42A42,42,0,0,0,178,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,178,196Z"/>
    </svg>
  );
}
