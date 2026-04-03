import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotepadLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsMTI4YTYsNiwwLDAsMS02LDZIOTZhNiw2LDAsMCwxLDAtMTJoNjRBNiw2LDAsMCwxLDE2NiwxMjhabS02LDI2SDk2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCwwLTEyWk0yMTQsNDBWMjAwYTMwLDMwLDAsMCwxLTMwLDMwSDcyYTMwLDMwLDAsMCwxLTMwLTMwVjQwYTYsNiwwLDAsMSw2LTZINzRWMjRhNiw2LDAsMCwxLDEyLDBWMzRoMzZWMjRhNiw2LDAsMCwxLDEyLDBWMzRoMzZWMjRhNiw2LDAsMCwxLDEyLDBWMzRoMjZBNiw2LDAsMCwxLDIxNCw0MFptLTEyLDZIMTgyVjU2YTYsNiwwLDAsMS0xMiwwVjQ2SDEzNFY1NmE2LDYsMCwwLDEtMTIsMFY0Nkg4NlY1NmE2LDYsMCwwLDEtMTIsMFY0Nkg1NFYyMDBhMTgsMTgsMCwwLDAsMTgsMThIMTg0YTE4LDE4LDAsMCwwLDE4LTE4WiIvPjwvc3ZnPg==)
 */
export function PhNotepadLightIcon(props: PhNotepadLightIconProps) {
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
      <path d="M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z"/>
    </svg>
  );
}
