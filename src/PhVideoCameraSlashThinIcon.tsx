import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVideoCameraSlashThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDkuODksNzYuNDdhNCw0LDAsMCwwLTQuMTEuMkwyMDQsMTA0LjUzVjcyYTEyLDEyLDAsMCwwLTEyLTEySDExMy4wNmE0LDQsMCwwLDAsMCw4SDE5MmE0LDQsMCwwLDEsNCw0djg3LjYzYTQsNCwwLDAsMCw4LDB2LTguMTZsNDEuNzgsMjcuODZBNCw0LDAsMCwwLDI1MiwxNzZWODBBNCw0LDAsMCwwLDI0OS44OSw3Ni40N1pNMjQ0LDE2OC41M2wtNDAtMjYuNjdWMTE0LjE0bDQwLTI2LjY3Wk01MSwzNy4zMUE0LDQsMCwwLDAsNDUsNDIuNjlMNjAuNzgsNjBIMzJBMTIsMTIsMCwwLDAsMjAsNzJWMTg0YTEyLDEyLDAsMCwwLDEyLDEySDE4NC40MUwyMDUsMjE4LjY5YTQsNCwwLDEsMCw1LjkyLTUuMzhaTTMyLDE4OGE0LDQsMCwwLDEtNC00VjcyYTQsNCwwLDAsMSw0LTRINjguMDVMMTc3LjE0LDE4OFoiLz48L3N2Zz4=)
 */
export function PhVideoCameraSlashThinIcon(props: PhVideoCameraSlashThinIconProps) {
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
      <path d="M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H113.06a4,4,0,0,0,0,8H192a4,4,0,0,1,4,4v87.63a4,4,0,0,0,8,0v-8.16l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM244,168.53l-40-26.67V114.14l40-26.67ZM51,37.31A4,4,0,0,0,45,42.69L60.78,60H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H184.41L205,218.69a4,4,0,1,0,5.92-5.38ZM32,188a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H68.05L177.14,188Z"/>
    </svg>
  );
}
