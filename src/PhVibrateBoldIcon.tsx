import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVibrateBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMjhIOTJBMjgsMjgsMCwwLDAsNjQsNTZWMjAwYTI4LDI4LDAsMCwwLDI4LDI4aDcyYTI4LDI4LDAsMCwwLDI4LTI4VjU2QTI4LDI4LDAsMCwwLDE2NCwyOFptNCwxNzJhNCw0LDAsMCwxLTQsNEg5MmE0LDQsMCwwLDEtNC00VjU2YTQsNCwwLDAsMSw0LTRoNzJhNCw0LDAsMCwxLDQsNFptNjQtMTAwdjU2YTEyLDEyLDAsMCwxLTI0LDBWMTAwYTEyLDEyLDAsMCwxLDI0LDBaTTQ4LDEwMHY1NmExMiwxMiwwLDAsMS0yNCwwVjEwMGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhVibrateBoldIcon(props: PhVibrateBoldIconProps) {
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
      <path d="M164,28H92A28,28,0,0,0,64,56V200a28,28,0,0,0,28,28h72a28,28,0,0,0,28-28V56A28,28,0,0,0,164,28Zm4,172a4,4,0,0,1-4,4H92a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Zm64-100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0ZM48,100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
