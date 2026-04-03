import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMTQ5LjY2bC03Miw3MmE4LDgsMCwwLDEtMTEuMzIsMGwtNzItNzJhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyMCwxOTYuNjlWNDBhOCw4LDAsMCwxLDE2LDBWMTk2LjY5bDU4LjM0LTU4LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 */
export function PhArrowDownIcon(props: PhArrowDownIconProps) {
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
      <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
