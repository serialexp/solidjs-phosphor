import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHeartFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==)
 */
export function PhHeartFillIcon(props: PhHeartFillIconProps) {
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
      <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"/>
    </svg>
  );
}
