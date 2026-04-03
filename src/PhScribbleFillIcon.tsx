import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhScribbleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE5My42NiwxNjkuNjZsLTgsOGE5LDksMCwwLDAsMCwxMi42OGw0LDRhOCw4LDAsMCwxLTExLjMyLDExLjMybC00LTRhMjUsMjUsMCwwLDEsMC0zNS4zMmw4LThhOSw5LDAsMCwwLDAtMTIuNjgsOSw5LDAsMCwwLTEyLjY4LDBsLTQ4LDQ4YTI1LDI1LDAsMCwxLTM1LjMyLTM1LjMybDcyLTcyYTksOSwwLDAsMCwwLTEyLjY4LDksOSwwLDAsMC0xMi42OCwwbC00OCw0OEEyNSwyNSwwLDAsMSw2Mi4zNCw4Ni4zNGwyOC0yOGE4LDgsMCwwLDEsMTEuMzIsMTEuMzJsLTI4LDI4YTksOSwwLDAsMCwwLDEyLjY4LDksOSwwLDAsMCwxMi42OCwwbDQ4LTQ4YTI1LDI1LDAsMCwxLDM1LjMyLDM1LjMybC03Miw3MmE5LDksMCwwLDAsMCwxMi42OCw5LDksMCwwLDAsMTIuNjgsMGw0OC00OGEyNSwyNSwwLDAsMSwzNS4zMiwzNS4zMloiLz48L3N2Zz4=)
 */
export function PhScribbleFillIcon(props: PhScribbleFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM193.66,169.66l-8,8a9,9,0,0,0,0,12.68l4,4a8,8,0,0,1-11.32,11.32l-4-4a25,25,0,0,1,0-35.32l8-8a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48a25,25,0,0,1-35.32-35.32l72-72a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48A25,25,0,0,1,62.34,86.34l28-28a8,8,0,0,1,11.32,11.32l-28,28a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32l-72,72a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32Z"/>
    </svg>
  );
}
