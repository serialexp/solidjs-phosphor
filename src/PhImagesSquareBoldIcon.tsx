import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhImagesSquareBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIODhBMjAsMjAsMCwwLDAsNjgsNDhWNjBINDhBMjAsMjAsMCwwLDAsMjgsODBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE3NmEyMCwyMCwwLDAsMCwyMC0yMFYxODhoMTJhMjAsMjAsMCwwLDAsMjAtMjBWNDhBMjAsMjAsMCwwLDAsMjA4LDI4Wk05Miw1MkgyMDR2NTkuNzJsLTkuODYtOS44NmEyMCwyMCwwLDAsMC0yOC4yOCwwTDEwMy43MiwxNjRIOTJabTgwLDE1Mkg1MlY4NEg2OHY4NGEyMCwyMCwwLDAsMCwyMCwyMGg4NFptLTM0LjM0LTQwTDE4MCwxMjEuNjZsMjQsMjRWMTY0Wk0xMDgsODhhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTA4LDg4WiIvPjwvc3ZnPg==)
 */
export function PhImagesSquareBoldIcon(props: PhImagesSquareBoldIconProps) {
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
      <path d="M208,28H88A20,20,0,0,0,68,48V60H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V188h12a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52H204v59.72l-9.86-9.86a20,20,0,0,0-28.28,0L103.72,164H92Zm80,152H52V84H68v84a20,20,0,0,0,20,20h84Zm-34.34-40L180,121.66l24,24V164ZM108,88a20,20,0,1,1,20,20A20,20,0,0,1,108,88Z"/>
    </svg>
  );
}
