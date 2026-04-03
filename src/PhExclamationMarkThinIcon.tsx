import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhExclamationMarkThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMjAwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwyMDBabS0xMi00NGE0LDQsMCwwLDAsNC00VjQ4YTQsNCwwLDAsMC04LDBWMTUyQTQsNCwwLDAsMCwxMjgsMTU2WiIvPjwvc3ZnPg==)
 */
export function PhExclamationMarkThinIcon(props: PhExclamationMarkThinIconProps) {
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
      <path d="M140,200a12,12,0,1,1-12-12A12,12,0,0,1,140,200Zm-12-44a4,4,0,0,0,4-4V48a4,4,0,0,0-8,0V152A4,4,0,0,0,128,156Z"/>
    </svg>
  );
}
