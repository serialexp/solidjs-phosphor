import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockersIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNzJhOCw4LDAsMCwxLTgsOEgxNjBhOCw4LDAsMCwxLDAtMTZoMjRBOCw4LDAsMCwxLDE5Miw3MlptLTgsMjRIMTYwYTgsOCwwLDAsMCwwLDE2aDI0YTgsOCwwLDAsMCwwLTE2Wk03Miw4MEg5NmE4LDgsMCwwLDAsMC0xNkg3MmE4LDgsMCwwLDAsMCwxNlpNOTYsOTZINzJhOCw4LDAsMCwwLDAsMTZIOTZhOCw4LDAsMCwwLDAtMTZaTTIyNCw0OFYyMjRhOCw4LDAsMCwxLTE2LDBWMjA4SDEzNnYxNmE4LDgsMCwwLDEtMTYsMFYyMDhINDh2MTZhOCw4LDAsMCwxLTE2LDBWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNMTIwLDE5MlY0OEg0OFYxOTJabTE2LDBoNzJWNDhIMTM2WiIvPjwvc3ZnPg==)
 */
export function PhLockersIcon(props: PhLockersIconProps) {
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
      <path d="M192,72a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h24A8,8,0,0,1,192,72Zm-8,24H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM72,80H96a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16ZM96,96H72a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM224,48V224a8,8,0,0,1-16,0V208H136v16a8,8,0,0,1-16,0V208H48v16a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM120,192V48H48V192Zm16,0h72V48H136Z"/>
    </svg>
  );
}
