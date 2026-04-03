import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTableThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJhNCw0LDAsMCwwLTQsNFYxOTJhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjU2QTQsNCwwLDAsMCwyMjQsNTJaTTM2LDEwOEg4NHY0MEgzNlptNTYsMEgyMjB2NDBIOTJaTTIyMCw2MHY0MEgzNlY2MFpNMzYsMTkyVjE1Nkg4NHY0MEg0MEE0LDQsMCwwLDEsMzYsMTkyWm0xODAsNEg5MlYxNTZIMjIwdjM2QTQsNCwwLDAsMSwyMTYsMTk2WiIvPjwvc3ZnPg==)
 */
export function PhTableThinIcon(props: PhTableThinIconProps) {
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
      <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52ZM36,108H84v40H36Zm56,0H220v40H92ZM220,60v40H36V60ZM36,192V156H84v40H40A4,4,0,0,1,36,192Zm180,4H92V156H220v36A4,4,0,0,1,216,196Z"/>
    </svg>
  );
}
