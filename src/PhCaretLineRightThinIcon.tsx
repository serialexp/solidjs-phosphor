import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDYuODMsMTI1LjE3YTQsNCwwLDAsMSwwLDUuNjZsLTgwLDgwYTQsNCwwLDAsMS01LjY2LTUuNjZMMTM4LjM0LDEyOCw2MS4xNyw1MC44M2E0LDQsMCwwLDEsNS42Ni01LjY2Wk0xODQsNDRhNCw0LDAsMCwwLTQsNFYyMDhhNCw0LDAsMCwwLDgsMFY0OEE0LDQsMCwwLDAsMTg0LDQ0WiIvPjwvc3ZnPg==)
 */
export function PhCaretLineRightThinIcon(props: PhCaretLineRightThinIconProps) {
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
      <path d="M146.83,125.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66-5.66L138.34,128,61.17,50.83a4,4,0,0,1,5.66-5.66ZM184,44a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V48A4,4,0,0,0,184,44Z"/>
    </svg>
  );
}
