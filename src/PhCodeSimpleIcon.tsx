import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodeSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05My4zMSw3MCwyOCwxMjhsNjUuMjcsNThhOCw4LDAsMSwxLTEwLjYyLDEybC03Mi02NGE4LDgsMCwwLDEsMC0xMmw3Mi02NEE4LDgsMCwxLDEsOTMuMzEsNzBabTE1Miw1Mi03Mi02NGE4LDgsMCwwLDAtMTAuNjIsMTJMMjI4LDEyOGwtNjUuMjcsNThhOCw4LDAsMSwwLDEwLjYyLDEybDcyLTY0YTgsOCwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhCodeSimpleIcon(props: PhCodeSimpleIconProps) {
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
      <path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z"/>
    </svg>
  );
}
