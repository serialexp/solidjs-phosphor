import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyCnyDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNTZ2NTZINjRWNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTYsNTZhOCw4LDAsMCwxLDgtOEgxOTJhOCw4LDAsMCwxLDAsMTZINjRBOCw4LDAsMCwxLDU2LDU2Wk0yMTYsMTYwYTgsOCwwLDAsMC04LDh2MTZIMTc2YTE2LDE2LDAsMCwxLTE2LTE2VjEyMGg0OGE4LDgsMCwwLDAsMC0xNkg0OGE4LDgsMCwwLDAsMCwxNkg5NnY4YTU2LjA2LDU2LjA2LDAsMCwxLTU2LDU2LDgsOCwwLDAsMCwwLDE2LDcyLjA4LDcyLjA4LDAsMCwwLDcyLTcydi04aDMydjQ4YTMyLDMyLDAsMCwwLDMyLDMyaDQwYTgsOCwwLDAsMCw4LThWMTY4QTgsOCwwLDAsMCwyMTYsMTYwWiIvPjwvc3ZnPg==)
 */
export function PhCurrencyCnyDuotoneIcon(props: PhCurrencyCnyDuotoneIconProps) {
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
      <path d="M192,56v56H64V56Z" opacity="0.2"/><path d="M56,56a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16H64A8,8,0,0,1,56,56ZM216,160a8,8,0,0,0-8,8v16H176a16,16,0,0,1-16-16V120h48a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16H96v8a56.06,56.06,0,0,1-56,56,8,8,0,0,0,0,16,72.08,72.08,0,0,0,72-72v-8h32v48a32,32,0,0,0,32,32h40a8,8,0,0,0,8-8V168A8,8,0,0,0,216,160Z"/>
    </svg>
  );
}
