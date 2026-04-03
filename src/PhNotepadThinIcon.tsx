import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotepadThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMTI4YTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMTY0LDEyOFptLTQsMjhIOTZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsMC04Wk0yMTIsNDBWMjAwYTI4LDI4LDAsMCwxLTI4LDI4SDcyYTI4LDI4LDAsMCwxLTI4LTI4VjQwYTQsNCwwLDAsMSw0LTRINzZWMjRhNCw0LDAsMCwxLDgsMFYzNmg0MFYyNGE0LDQsMCwwLDEsOCwwVjM2aDQwVjI0YTQsNCwwLDAsMSw4LDBWMzZoMjhBNCw0LDAsMCwxLDIxMiw0MFptLTgsNEgxODBWNTZhNCw0LDAsMCwxLTgsMFY0NEgxMzJWNTZhNCw0LDAsMCwxLTgsMFY0NEg4NFY1NmE0LDQsMCwwLDEtOCwwVjQ0SDUyVjIwMGEyMCwyMCwwLDAsMCwyMCwyMEgxODRhMjAsMjAsMCwwLDAsMjAtMjBaIi8+PC9zdmc+)
 */
export function PhNotepadThinIcon(props: PhNotepadThinIconProps) {
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
      <path d="M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,40V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V40a4,4,0,0,1,4-4H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h28A4,4,0,0,1,212,40Zm-8,4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H52V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z"/>
    </svg>
  );
}
