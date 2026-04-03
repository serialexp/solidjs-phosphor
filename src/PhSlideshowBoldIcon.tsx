import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSlideshowBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDRINzJBMjAsMjAsMCwwLDAsNTIsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDE4NGEyMCwyMCwwLDAsMCwyMC0yMFY2NEEyMCwyMCwwLDAsMCwxODQsNDRabS00LDE0NEg3NlY2OEgxODBaTTI0NCw1NlYyMDBhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwWk0zNiw1NlYyMDBhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhSlideshowBoldIcon(props: PhSlideshowBoldIconProps) {
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
      <path d="M184,44H72A20,20,0,0,0,52,64V192a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V64A20,20,0,0,0,184,44Zm-4,144H76V68H180ZM244,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM36,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
