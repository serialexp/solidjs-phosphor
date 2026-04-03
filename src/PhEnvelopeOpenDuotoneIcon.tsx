import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeOpenDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOTZsLTc4LjU1LDU2aC0zNC45TDMyLDk2bDk2LTY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyOC40NCw4OS4zNGwtOTYtNjRhOCw4LDAsMCwwLTguODgsMGwtOTYsNjRBOCw4LDAsMCwwLDI0LDk2VjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWOTZBOCw4LDAsMCwwLDIyOC40NCw4OS4zNFpNOTYuNzIsMTUyLDQwLDE5MlYxMTEuNTNabTE2LjM3LDhoMjkuODJsNTYuNjMsNDBINTYuNDZabTQ2LjE5LThMMjE2LDExMS41M1YxOTJaTTEyOCw0MS42MWw4MS45MSw1NC42MS02Nyw0Ny43OEgxMTMuMTFsLTY3LTQ3Ljc4WiIvPjwvc3ZnPg==)
 */
export function PhEnvelopeOpenDuotoneIcon(props: PhEnvelopeOpenDuotoneIconProps) {
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
      <path d="M224,96l-78.55,56h-34.9L32,96l96-64Z" opacity="0.2"/><path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"/>
    </svg>
  );
}
