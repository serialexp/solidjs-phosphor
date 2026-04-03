import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNotesSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuNDYsMjAuODVhNCw0LDAsMCwwLTMuNDMtLjczbC0xMjgsMzJBNCw0LDAsMCwwLDc2LDU2VjE3NC44N0EzMiwzMiwwLDEsMCw4NCwxOTZWNTkuMTJsMTIwLTMwVjE0Mi44N0EzMiwzMiwwLDEsMCwyMTIsMTY0VjI0QTQsNCwwLDAsMCwyMTAuNDYsMjAuODVaTTUyLDIyMGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw1MiwyMjBabTEyOC0zMmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwxODAsMTg4WiIvPjwvc3ZnPg==)
 */
export function PhMusicNotesSimpleThinIcon(props: PhMusicNotesSimpleThinIconProps) {
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
      <path d="M210.46,20.85a4,4,0,0,0-3.43-.73l-128,32A4,4,0,0,0,76,56V174.87A32,32,0,1,0,84,196V59.12l120-30V142.87A32,32,0,1,0,212,164V24A4,4,0,0,0,210.46,20.85ZM52,220a24,24,0,1,1,24-24A24,24,0,0,1,52,220Zm128-32a24,24,0,1,1,24-24A24,24,0,0,1,180,188Z"/>
    </svg>
  );
}
