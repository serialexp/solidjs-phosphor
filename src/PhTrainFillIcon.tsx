import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrainFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjRINzJBMzIsMzIsMCwwLDAsNDAsNTZWMTg0YTMyLDMyLDAsMCwwLDMyLDMyaDhMNjUuNiwyMzUuMmE4LDgsMCwxLDAsMTIuOCw5LjZMMTAwLDIxNmg1NmwyMS42LDI4LjhhOCw4LDAsMSwwLDEyLjgtOS42TDE3NiwyMTZoOGEzMiwzMiwwLDAsMCwzMi0zMlY1NkEzMiwzMiwwLDAsMCwxODQsMjRaTTg0LDE4NGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw4NCwxODRabTM2LTY0SDU2VjgwaDY0Wm01Miw2NGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNzIsMTg0Wm0yOC02NEgxMzZWODBoNjRaIi8+PC9zdmc+)
 */
export function PhTrainFillIcon(props: PhTrainFillIconProps) {
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
      <path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm36-64H56V80h64Zm52,64a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm28-64H136V80h64Z"/>
    </svg>
  );
}
