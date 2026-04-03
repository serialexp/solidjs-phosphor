import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarMinusThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZIMTgwVjI0YTQsNCwwLDAsMC04LDBWMzZIODRWMjRhNCw0LDAsMCwwLTgsMFYzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDIwOCwzNlpNNDgsNDRINzZWNTZhNCw0LDAsMCwwLDgsMFY0NGg4OFY1NmE0LDQsMCwwLDAsOCwwVjQ0aDI4YTQsNCwwLDAsMSw0LDRWODRINDRWNDhBNCw0LDAsMCwxLDQ4LDQ0Wk0yMDgsMjEySDQ4YTQsNCwwLDAsMS00LTRWOTJIMjEyVjIwOEE0LDQsMCwwLDEsMjA4LDIxMlptLTUyLTYwYTQsNCwwLDAsMS00LDRIMTA0YTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDE1NiwxNTJaIi8+PC9zdmc+)
 */
export function PhCalendarMinusThinIcon(props: PhCalendarMinusThinIconProps) {
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
      <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-52-60a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h48A4,4,0,0,1,156,152Z"/>
    </svg>
  );
}
