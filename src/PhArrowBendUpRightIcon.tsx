import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTA5LjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjA0LjY5LDExMkgxMjhhODguMSw4OC4xLDAsMCwwLTg4LDg4LDgsOCwwLDAsMS0xNiwwQTEwNC4xMSwxMDQuMTEsMCwwLDEsMTI4LDk2aDc2LjY5TDE3MC4zNCw2MS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJsNDgsNDhBOCw4LDAsMCwxLDIyOS42NiwxMDkuNjZaIi8+PC9zdmc+)
 */
export function PhArrowBendUpRightIcon(props: PhArrowBendUpRightIconProps) {
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
      <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"/>
    </svg>
  );
}
