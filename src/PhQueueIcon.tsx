import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQueueIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsNjRabTEwNCw1Nkg0MGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlptMTEyLTI0YTgsOCwwLDAsMS0zLjc2LDYuNzhsLTY0LDQwQTgsOCwwLDAsMSwxNjgsMjAwVjEyMGE4LDgsMCwwLDEsMTIuMjQtNi43OGw2NCw0MEE4LDgsMCwwLDEsMjQ4LDE2MFptLTIzLjA5LDBMMTg0LDEzNC40M3Y1MS4xNFoiLz48L3N2Zz4=)
 */
export function PhQueueIcon(props: PhQueueIconProps) {
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
      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z"/>
    </svg>
  );
}
