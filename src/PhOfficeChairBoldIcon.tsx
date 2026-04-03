import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOfficeChairBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDIyNi42QTUyLjA5LDUyLjA5LDAsMCwxLDE3NiwxODBIMTQwdjE2aDIwYTM2LDM2LDAsMCwxLDM2LDM2LDEyLDEyLDAsMCwxLTI0LDAsMTIsMTIsMCwwLDAtMTItMTJIMTQwdjEyYTEyLDEyLDAsMCwxLTI0LDBWMjIwSDk2YTEyLDEyLDAsMCwwLTEyLDEyLDEyLDEyLDAsMCwxLTI0LDAsMzYsMzYsMCwwLDEsMzYtMzZoMjBWMTgwSDgwYTUyLjA5LDUyLjA5LDAsMCwxLTUwLjYtNDBIMTZhMTIsMTIsMCwwLDEsMC0yNEg0MGExMiwxMiwwLDAsMSwxMiwxMiwyOCwyOCwwLDAsMCwyOCwyOGg5NmEyOCwyOCwwLDAsMCwyOC0yOCwxMiwxMiwwLDAsMSwxMi0xMmgyNEExMiwxMiwwLDAsMSwyNTIsMTI4Wk03Mi44MiwxMzNhMjAsMjAsMCwwLDEtNC41OS0xNkw4MS44LDI5YTE5LjkxLDE5LjkxLDAsMCwxLDE5Ljc5LTE3aDUyLjgyQTE5LjkxLDE5LjkxLDAsMCwxLDE3NC4yLDI5bDEzLjU3LDg4QTIwLDIwLDAsMCwxLDE2OCwxNDBIODhBMjAsMjAsMCwwLDEsNzIuODIsMTMzWm0xOS44NS0xN2g3MC42NkwxNTEsMzZIMTA1WiIvPjwvc3ZnPg==)
 */
export function PhOfficeChairBoldIcon(props: PhOfficeChairBoldIconProps) {
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
      <path d="M252,128a12,12,0,0,1-12,12H226.6A52.09,52.09,0,0,1,176,180H140v16h20a36,36,0,0,1,36,36,12,12,0,0,1-24,0,12,12,0,0,0-12-12H140v12a12,12,0,0,1-24,0V220H96a12,12,0,0,0-12,12,12,12,0,0,1-24,0,36,36,0,0,1,36-36h20V180H80a52.09,52.09,0,0,1-50.6-40H16a12,12,0,0,1,0-24H40a12,12,0,0,1,12,12,28,28,0,0,0,28,28h96a28,28,0,0,0,28-28,12,12,0,0,1,12-12h24A12,12,0,0,1,252,128ZM72.82,133a20,20,0,0,1-4.59-16L81.8,29a19.91,19.91,0,0,1,19.79-17h52.82A19.91,19.91,0,0,1,174.2,29l13.57,88A20,20,0,0,1,168,140H88A20,20,0,0,1,72.82,133Zm19.85-17h70.66L151,36H105Z"/>
    </svg>
  );
}
