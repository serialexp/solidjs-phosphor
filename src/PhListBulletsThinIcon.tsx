import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListBulletsThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDg4QTQsNCwwLDAsMSw4NCw2NFptMTMyLDYwSDg4YTQsNCwwLDAsMCwwLDhIMjE2YTQsNCwwLDAsMCwwLThabTAsNjRIODhhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNNDQsMTIwYTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDQ0LDEyMFptMC02NGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCw0NCw1NlptMCwxMjhhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsNDQsMTg0WiIvPjwvc3ZnPg==)
 */
export function PhListBulletsThinIcon(props: PhListBulletsThinIconProps) {
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
      <path d="M84,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H88A4,4,0,0,1,84,64Zm132,60H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM44,120a8,8,0,1,0,8,8A8,8,0,0,0,44,120Zm0-64a8,8,0,1,0,8,8A8,8,0,0,0,44,56Zm0,128a8,8,0,1,0,8,8A8,8,0,0,0,44,184Z"/>
    </svg>
  );
}
