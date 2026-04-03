import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRssSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTc2LDE5MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw3NiwxOTJabTYwLDBhOCw4LDAsMCwxLTgtOCw1Ni4wNiw1Ni4wNiwwLDAsMC01Ni01Niw4LDgsMCwwLDEsMC0xNiw3Mi4wOCw3Mi4wOCwwLDAsMSw3Miw3MkE4LDgsMCwwLDEsMTM2LDE5MlptNDgsMGE4LDgsMCwwLDEtOC04QTEwNC4xMSwxMDQuMTEsMCwwLDAsNzIsODBhOCw4LDAsMCwxLDAtMTZBMTIwLjEzLDEyMC4xMywwLDAsMSwxOTIsMTg0LDgsOCwwLDAsMSwxODQsMTkyWiIvPjwvc3ZnPg==)
 */
export function PhRssSimpleFillIcon(props: PhRssSimpleFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm60,0a8,8,0,0,1-8-8,56.06,56.06,0,0,0-56-56,8,8,0,0,1,0-16,72.08,72.08,0,0,1,72,72A8,8,0,0,1,136,192Zm48,0a8,8,0,0,1-8-8A104.11,104.11,0,0,0,72,80a8,8,0,0,1,0-16A120.13,120.13,0,0,1,192,184,8,8,0,0,1,184,192Z"/>
    </svg>
  );
}
