import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjhIMTYwYTIwLDIwLDAsMCwwLTIwLDIwVjIwOGEyMCwyMCwwLDAsMCwyMCwyMGg0MGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDAsMjhabS00LDE3NkgxNjRWNTJoMzJaTTk2LDI4SDU2QTIwLDIwLDAsMCwwLDM2LDQ4VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEg5NmEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCw5NiwyOFpNOTIsMjA0SDYwVjUySDkyWiIvPjwvc3ZnPg==)
 */
export function PhPauseBoldIcon(props: PhPauseBoldIconProps) {
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
      <path d="M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"/>
    </svg>
  );
}
