import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNTZWODhhNCw0LDAsMCwxLTgsMFY2MEgxMzJWMTk2aDI4YTQsNCwwLDAsMSwwLDhIOTZhNCw0LDAsMCwxLDAtOGgyOFY2MEg2MFY4OGE0LDQsMCwwLDEtOCwwVjU2YTQsNCwwLDAsMSw0LTRIMjAwQTQsNCwwLDAsMSwyMDQsNTZaIi8+PC9zdmc+)
 */
export function PhTextTThinIcon(props: PhTextTThinIconProps) {
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
      <path d="M204,56V88a4,4,0,0,1-8,0V60H132V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,4-4H200A4,4,0,0,1,204,56Z"/>
    </svg>
  );
}
