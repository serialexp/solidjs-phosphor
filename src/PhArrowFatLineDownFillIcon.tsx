import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw0MGE4LDgsMCwwLDEsOC04aDk2YTgsOCwwLDAsMSwwLDE2SDgwQTgsOCwwLDAsMSw3Miw0MFptMTU5LjM5LDkyLjk0QTgsOCwwLDAsMCwyMjQsMTI4SDE4NFY3MmE4LDgsMCwwLDAtOC04SDgwYTgsOCwwLDAsMC04LDh2NTZIMzJhOCw4LDAsMCwwLTUuNjYsMTMuNjZsOTYsOTZhOCw4LDAsMCwwLDExLjMyLDBsOTYtOTZBOCw4LDAsMCwwLDIzMS4zOSwxMzIuOTRaIi8+PC9zdmc+)
 */
export function PhArrowFatLineDownFillIcon(props: PhArrowFatLineDownFillIconProps) {
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
      <path d="M72,40a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,40Zm159.39,92.94A8,8,0,0,0,224,128H184V72a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v56H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94Z"/>
    </svg>
  );
}
