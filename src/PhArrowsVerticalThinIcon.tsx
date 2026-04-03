import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsVerticalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuODMsMTk3LjE3YTQsNCwwLDAsMSwwLDUuNjZsLTMyLDMyYTQsNCwwLDAsMS01LjY2LDBsLTMyLTMyYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI0LDIyMi4zNFYzMy42Nkw5OC44Myw1OC44M2E0LDQsMCwwLDEtNS42Ni01LjY2bDMyLTMyYTQsNCwwLDAsMSw1LjY2LDBsMzIsMzJhNCw0LDAsMCwxLTUuNjYsNS42NkwxMzIsMzMuNjZWMjIyLjM0bDI1LjE3LTI1LjE3QTQsNCwwLDAsMSwxNjIuODMsMTk3LjE3WiIvPjwvc3ZnPg==)
 */
export function PhArrowsVerticalThinIcon(props: PhArrowsVerticalThinIconProps) {
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
      <path d="M162.83,197.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,222.34V33.66L98.83,58.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L132,33.66V222.34l25.17-25.17A4,4,0,0,1,162.83,197.17Z"/>
    </svg>
  );
}
