import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareSplitHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZINTZBMjAsMjAsMCwwLDAsMzYsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMDAsMzZaTTYwLDYwaDU2VjE5Nkg2MFpNMTk2LDE5NkgxNDBWNjBoNTZaIi8+PC9zdmc+)
 */
export function PhSquareSplitHorizontalBoldIcon(props: PhSquareSplitHorizontalBoldIconProps) {
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
      <path d="M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36ZM60,60h56V196H60ZM196,196H140V60h56Z"/>
    </svg>
  );
}
