import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhYinYangFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsODBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDgwWm05Miw0OEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS05Miw0OGExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwxNDAsMTc2Wm0zMi05MmE0NC4wNSw0NC4wNSwwLDAsMC00NC00NEE4OCw4OCwwLDAsMCw4MS4wOSwyMDIuNDIsNTIsNTIsMCwwLDEsMTI4LDEyOCw0NC4wNSw0NC4wNSwwLDAsMCwxNzIsODRaIi8+PC9zdmc+)
 */
export function PhYinYangFillIcon(props: PhYinYangFillIconProps) {
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
      <path d="M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44.05,44.05,0,0,0-44-44A88,88,0,0,0,81.09,202.42,52,52,0,0,1,128,128,44.05,44.05,0,0,0,172,84Z"/>
    </svg>
  );
}
