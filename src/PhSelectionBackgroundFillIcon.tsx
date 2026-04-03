import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSelectionBackgroundFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxMTJoNzJ2NzJINzJaTTIyNCw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINDhhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNOTYsNzJhOCw4LDAsMCwwLDE2LDBoMTZhOCw4LDAsMCwwLDAtMTZIMTEyQTE2LDE2LDAsMCwwLDk2LDcyWm02NCw0MGExNiwxNiwwLDAsMC0xNi0xNkg3MmExNiwxNiwwLDAsMC0xNiwxNnY3MmExNiwxNiwwLDAsMCwxNiwxNmg3MmExNiwxNiwwLDAsMCwxNi0xNlptNDAsMTZhOCw4LDAsMCwwLTE2LDB2MTZhOCw4LDAsMCwwLDAsMTYsMTYsMTYsMCwwLDAsMTYtMTZabTAtNTZhMTYsMTYsMCwwLDAtMTYtMTZIMTY4YTgsOCwwLDAsMCwwLDE2aDE2Vjg4YTgsOCwwLDAsMCwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhSelectionBackgroundFillIcon(props: PhSelectionBackgroundFillIconProps) {
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
      <path d="M72,112h72v72H72ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM96,72a8,8,0,0,0,16,0h16a8,8,0,0,0,0-16H112A16,16,0,0,0,96,72Zm64,40a16,16,0,0,0-16-16H72a16,16,0,0,0-16,16v72a16,16,0,0,0,16,16h72a16,16,0,0,0,16-16Zm40,16a8,8,0,0,0-16,0v16a8,8,0,0,0,0,16,16,16,0,0,0,16-16Zm0-56a16,16,0,0,0-16-16H168a8,8,0,0,0,0,16h16V88a8,8,0,0,0,16,0Z"/>
    </svg>
  );
}
