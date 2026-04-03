import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyRubIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTUyYTYwLDYwLDAsMCwwLDAtMTIwSDg4YTgsOCwwLDAsMC04LDh2OTZINTZhOCw4LDAsMCwwLDAsMTZIODB2MTZINTZhOCw4LDAsMCwwLDAsMTZIODB2MzJhOCw4LDAsMCwwLDE2LDBWMTg0aDQ4YTgsOCwwLDAsMCwwLTE2SDk2VjE1MlpNOTYsNDhoNTJhNDQsNDQsMCwwLDEsMCw4OEg5NloiLz48L3N2Zz4=)
 */
export function PhCurrencyRubIcon(props: PhCurrencyRubIconProps) {
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
      <path d="M148,152a60,60,0,0,0,0-120H88a8,8,0,0,0-8,8v96H56a8,8,0,0,0,0,16H80v16H56a8,8,0,0,0,0,16H80v32a8,8,0,0,0,16,0V184h48a8,8,0,0,0,0-16H96V152ZM96,48h52a44,44,0,0,1,0,88H96Z"/>
    </svg>
  );
}
