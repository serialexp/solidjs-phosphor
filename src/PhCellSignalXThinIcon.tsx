import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalXThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsMTk3LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZMMTg0LDE4MS42NmwtMjEuMTcsMjEuMTdhNCw0LDAsMCwxLTUuNjYtNS42NkwxNzguMzQsMTc2bC0yMS4xNy0yMS4xN2E0LDQsMCwwLDEsNS42Ni01LjY2TDE4NCwxNzAuMzRsMjEuMTctMjEuMTdhNCw0LDAsMCwxLDUuNjYsNS42NkwxODkuNjYsMTc2Wk0xNjAsMTE2YTQsNCwwLDAsMCw0LTRWNzJhNCw0LDAsMCwwLTgsMHY0MEE0LDQsMCwwLDAsMTYwLDExNlptNDAsMGE0LDQsMCwwLDAsNC00VjMyYTQsNCwwLDAsMC04LDB2ODBBNCw0LDAsMCwwLDIwMCwxMTZabS04MC04YTQsNCwwLDAsMC00LDR2ODhhNCw0LDAsMCwwLDgsMFYxMTJBNCw0LDAsMCwwLDEyMCwxMDhaTTgwLDE0OGE0LDQsMCwwLDAtNCw0djQ4YTQsNCwwLDAsMCw4LDBWMTUyQTQsNCwwLDAsMCw4MCwxNDhaTTQwLDE4OGE0LDQsMCwwLDAtNCw0djhhNCw0LDAsMCwwLDgsMHYtOEE0LDQsMCwwLDAsNDAsMTg4WiIvPjwvc3ZnPg==)
 */
export function PhCellSignalXThinIcon(props: PhCellSignalXThinIconProps) {
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
      <path d="M210.83,197.17a4,4,0,0,1-5.66,5.66L184,181.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L178.34,176l-21.17-21.17a4,4,0,0,1,5.66-5.66L184,170.34l21.17-21.17a4,4,0,0,1,5.66,5.66L189.66,176ZM160,116a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v40A4,4,0,0,0,160,116Zm40,0a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0v80A4,4,0,0,0,200,116Zm-80-8a4,4,0,0,0-4,4v88a4,4,0,0,0,8,0V112A4,4,0,0,0,120,108ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z"/>
    </svg>
  );
}
