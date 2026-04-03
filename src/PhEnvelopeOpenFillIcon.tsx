import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeOpenFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNDQsODkuMzRsLTk2LTY0YTgsOCwwLDAsMC04Ljg4LDBsLTk2LDY0QTgsOCwwLDAsMCwyNCw5NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTgsOCwwLDAsMCwyMjguNDQsODkuMzRaTTk2LjcyLDE1Miw0MCwxOTJWMTExLjUzWm0xNi4zNyw4aDI5LjgybDU2LjYzLDQwSDU2LjQ2Wm00Ni4xOS04TDIxNiwxMTEuNTNWMTkyWiIvPjwvc3ZnPg==)
 */
export function PhEnvelopeOpenFillIcon(props: PhEnvelopeOpenFillIconProps) {
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
      <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192Z"/>
    </svg>
  );
}
