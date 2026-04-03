import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDE0MFYxMjBoNDRhMjAsMjAsMCwwLDAsMjAtMjBWNjBhMjAsMjAsMCwwLDAtMjAtMjBIMTQwVjMyYTEyLDEyLDAsMCwwLTI0LDB2OEg3MkEyMCwyMCwwLDAsMCw1Miw2MHY0MGEyMCwyMCwwLDAsMCwyMCwyMGg0NHYxNkg0OGEyMCwyMCwwLDAsMC0yMCwyMHY0MGEyMCwyMCwwLDAsMCwyMCwyMGg2OHY4YTEyLDEyLDAsMCwwLDI0LDB2LThoNjhhMjAsMjAsMCwwLDAsMjAtMjBWMTU2QTIwLDIwLDAsMCwwLDIwOCwxMzZaTTc2LDY0SDE4MFY5Nkg3NlpNMjA0LDE5Mkg1MlYxNjBIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhAlignCenterHorizontalBoldIcon(props: PhAlignCenterHorizontalBoldIconProps) {
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
      <path d="M208,136H140V120h44a20,20,0,0,0,20-20V60a20,20,0,0,0-20-20H140V32a12,12,0,0,0-24,0v8H72A20,20,0,0,0,52,60v40a20,20,0,0,0,20,20h44v16H48a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h68v8a12,12,0,0,0,24,0v-8h68a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136ZM76,64H180V96H76ZM204,192H52V160H204Z"/>
    </svg>
  );
}
