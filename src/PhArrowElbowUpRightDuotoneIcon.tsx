import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODBsLTQ4LDQ4VjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyMS42Niw3NC4zNGwtNDgtNDhBOCw4LDAsMCwwLDE2MCwzMlY3Mkg3MmE4LDgsMCwwLDAtOCw4VjIyNGE4LDgsMCwwLDAsMTYsMFY4OGg4MHY0MGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0OC00OEE4LDgsMCwwLDAsMjIxLjY2LDc0LjM0Wk0xNzYsMTA4LjY5VjUxLjMxTDIwNC42OSw4MFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowUpRightDuotoneIcon(props: PhArrowElbowUpRightDuotoneIconProps) {
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
      <path d="M216,80l-48,48V32Z" opacity="0.2"/><path d="M221.66,74.34l-48-48A8,8,0,0,0,160,32V72H72a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,74.34ZM176,108.69V51.31L204.69,80Z"/>
    </svg>
  );
}
