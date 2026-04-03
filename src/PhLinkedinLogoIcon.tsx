import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkedinLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjRINDBBMTYsMTYsMCwwLDAsMjQsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMTYsMjRabTAsMTkySDQwVjQwSDIxNlYyMTZaTTk2LDExMnY2NGE4LDgsMCwwLDEtMTYsMFYxMTJhOCw4LDAsMCwxLDE2LDBabTg4LDI4djM2YTgsOCwwLDAsMS0xNiwwVjE0MGEyMCwyMCwwLDAsMC00MCwwdjM2YTgsOCwwLDAsMS0xNiwwVjExMmE4LDgsMCwwLDEsMTUuNzktMS43OEEzNiwzNiwwLDAsMSwxODQsMTQwWk0xMDAsODRBMTIsMTIsMCwxLDEsODgsNzIsMTIsMTIsMCwwLDEsMTAwLDg0WiIvPjwvc3ZnPg==)
 */
export function PhLinkedinLogoIcon(props: PhLinkedinLogoIconProps) {
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
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
    </svg>
  );
}
