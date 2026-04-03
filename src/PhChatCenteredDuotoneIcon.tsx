import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCenteredDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTg0YTgsOCwwLDAsMS04LDhIMTUwLjkzbC0xNiwyOGE4LDgsMCwwLDEtMTMuOSwwbC0xNi0yOEg0MGE4LDgsMCwwLDEtOC04VjU2YTgsOCwwLDAsMSw4LThIMjE2QTgsOCwwLDAsMSwyMjQsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE4NGExNiwxNiwwLDAsMCwxNiwxNmg2MC40M2wxMy42OCwyMy45NGExNiwxNiwwLDAsMCwyNy43OCwwTDE1NS41NywyMDBIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxNDRIMTUwLjkzYTgsOCwwLDAsMC03LDRsLTE2LDI4LTE2LTI4YTgsOCwwLDAsMC03LTRINDBWNTZIMjE2WiIvPjwvc3ZnPg==)
 */
export function PhChatCenteredDuotoneIcon(props: PhChatCenteredDuotoneIconProps) {
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
      <path d="M224,56V184a8,8,0,0,1-8,8H150.93l-16,28a8,8,0,0,1-13.9,0l-16-28H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H150.93a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H216Z"/>
    </svg>
  );
}
