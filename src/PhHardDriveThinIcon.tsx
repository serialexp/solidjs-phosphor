import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHardDriveThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjhIMzJBMTIsMTIsMCwwLDAsMjAsODB2OTZhMTIsMTIsMCwwLDAsMTIsMTJIMjI0YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDIyNCw2OFptNCwxMDhhNCw0LDAsMCwxLTQsNEgzMmE0LDQsMCwwLDEtNC00VjgwYTQsNCwwLDAsMSw0LTRIMjI0YTQsNCwwLDAsMSw0LDRabS0zMi00OGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxOTYsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhHardDriveThinIcon(props: PhHardDriveThinIconProps) {
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
      <path d="M224,68H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,108a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Zm-32-48a8,8,0,1,1-8-8A8,8,0,0,1,196,128Z"/>
    </svg>
  );
}
