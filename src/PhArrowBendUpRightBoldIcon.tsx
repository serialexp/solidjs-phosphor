import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTEyLjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNy0xN0wxOTUsMTE2SDEyOGE4NC4wOSw4NC4wOSwwLDAsMC04NCw4NCwxMiwxMiwwLDAsMS0yNCwwQTEwOC4xMiwxMDguMTIsMCwwLDEsMTI4LDkyaDY3TDE2Ny41MSw2NC40OGExMiwxMiwwLDAsMSwxNy0xN2w0OCw0OEExMiwxMiwwLDAsMSwyMzIuNDksMTEyLjQ5WiIvPjwvc3ZnPg==)
 */
export function PhArrowBendUpRightBoldIcon(props: PhArrowBendUpRightBoldIconProps) {
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
      <path d="M232.49,112.49l-48,48a12,12,0,0,1-17-17L195,116H128a84.09,84.09,0,0,0-84,84,12,12,0,0,1-24,0A108.12,108.12,0,0,1,128,92h67L167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49Z"/>
    </svg>
  );
}
