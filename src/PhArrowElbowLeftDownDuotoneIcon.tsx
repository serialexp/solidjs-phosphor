import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTY4LDg4LDIxNiw0MCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDY0SDg4YTgsOCwwLDAsMC04LDh2ODhINDBhOCw4LDAsMCwwLTUuNjYsMTMuNjZsNDgsNDhhOCw4LDAsMCwwLDExLjMyLDBsNDgtNDhBOCw4LDAsMCwwLDEzNiwxNjBIOTZWODBIMjMyYTgsOCwwLDAsMCwwLTE2Wk04OCwyMDQuNjksNTkuMzEsMTc2aDU3LjM4WiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowLeftDownDuotoneIcon(props: PhArrowElbowLeftDownDuotoneIconProps) {
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
      <path d="M136,168,88,216,40,168Z" opacity="0.2"/><path d="M232,64H88a8,8,0,0,0-8,8v88H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,160H96V80H232a8,8,0,0,0,0-16ZM88,204.69,59.31,176h57.38Z"/>
    </svg>
  );
}
