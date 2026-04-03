import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyYTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLTgtOFY2Ny4zMUw0NS42NiwxMDEuNjZBOCw4LDAsMCwxLDM0LjM0LDkwLjM0bDQ4LTQ4YTgsOCwwLDAsMSwxMS4zMiwwbDQ4LDQ4YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkw5Niw2Ny4zMVYxODRIMjMyQTgsOCwwLDAsMSwyNDAsMTkyWiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowLeftUpIcon(props: PhArrowElbowLeftUpIconProps) {
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
      <path d="M240,192a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V67.31L45.66,101.66A8,8,0,0,1,34.34,90.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L96,67.31V184H232A8,8,0,0,1,240,192Z"/>
    </svg>
  );
}
