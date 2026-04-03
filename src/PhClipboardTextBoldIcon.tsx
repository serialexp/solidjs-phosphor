import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClipboardTextBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTY0YTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLDAtMjRoNjRBMTIsMTIsMCwwLDEsMTcyLDE2NFptLTEyLTUySDk2YTEyLDEyLDAsMCwwLDAsMjRoNjRhMTIsMTIsMCwwLDAsMC0yNFptNjAtNjRWMjE2YTIwLDIwLDAsMCwxLTIwLDIwSDU2YTIwLDIwLDAsMCwxLTIwLTIwVjQ4QTIwLDIwLDAsMCwxLDU2LDI4SDkwLjUzYTUxLjg4LDUxLjg4LDAsMCwxLDc0Ljk0LDBIMjAwQTIwLDIwLDAsMCwxLDIyMCw0OFpNMTAwLjI5LDYwaDU1LjQyYTI4LDI4LDAsMCwwLTU1LjQyLDBaTTE5Niw1MkgxNzguNTlBNTIuMTMsNTIuMTMsMCwwLDEsMTgwLDY0djhhMTIsMTIsMCwwLDEtMTIsMTJIODhBMTIsMTIsMCwwLDEsNzYsNzJWNjRhNTIuMTMsNTIuMTMsMCwwLDEsMS40MS0xMkg2MFYyMTJIMTk2WiIvPjwvc3ZnPg==)
 */
export function PhClipboardTextBoldIcon(props: PhClipboardTextBoldIconProps) {
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
      <path d="M172,164a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,164Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-64V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM100.29,60h55.42a28,28,0,0,0-55.42,0ZM196,52H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z"/>
    </svg>
  );
}
