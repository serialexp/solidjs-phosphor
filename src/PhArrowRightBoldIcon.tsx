import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDksMTM2LjQ5bC03Miw3MmExMiwxMiwwLDAsMS0xNy0xN0wxODcsMTQwSDQwYTEyLDEyLDAsMCwxLDAtMjRIMTg3TDEzNS41MSw2NC40OGExMiwxMiwwLDAsMSwxNy0xN2w3Miw3MkExMiwxMiwwLDAsMSwyMjQuNDksMTM2LjQ5WiIvPjwvc3ZnPg==)
 */
export function PhArrowRightBoldIcon(props: PhArrowRightBoldIconProps) {
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
      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"/>
    </svg>
  );
}
