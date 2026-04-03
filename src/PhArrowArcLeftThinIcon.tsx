import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTg0YTQsNCwwLDAsMS04LDBBOTIsOTIsMCwwLDAsNjMsMTE5TDMzLjcsMTQ4SDg4YTQsNCwwLDAsMSwwLDhIMjRhNCw0LDAsMCwxLTQtNFY4OGE0LDQsMCwwLDEsOCwwdjU0LjM5bDI5LjMtMjkuMTFBMTAwLDEwMCwwLDAsMSwyMjgsMTg0WiIvPjwvc3ZnPg==)
 */
export function PhArrowArcLeftThinIcon(props: PhArrowArcLeftThinIconProps) {
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
      <path d="M228,184a4,4,0,0,1-8,0A92,92,0,0,0,63,119L33.7,148H88a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v54.39l29.3-29.11A100,100,0,0,1,228,184Z"/>
    </svg>
  );
}
