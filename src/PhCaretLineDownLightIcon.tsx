import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00My43Niw3Ni4yNGE2LDYsMCwwLDEsOC40OC04LjQ4TDEyOCwxNDMuNTFsNzUuNzYtNzUuNzVhNiw2LDAsMCwxLDguNDgsOC40OGwtODAsODBhNiw2LDAsMCwxLTguNDgsMFpNMjA4LDE4Nkg0OGE2LDYsMCwwLDAsMCwxMkgyMDhhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhCaretLineDownLightIcon(props: PhCaretLineDownLightIconProps) {
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
      <path d="M43.76,76.24a6,6,0,0,1,8.48-8.48L128,143.51l75.76-75.75a6,6,0,0,1,8.48,8.48l-80,80a6,6,0,0,1-8.48,0ZM208,186H48a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
