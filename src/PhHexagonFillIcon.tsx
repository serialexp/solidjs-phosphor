import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHexagonFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODAuMTh2OTUuNjRhMTYsMTYsMCwwLDEtOC4zMiwxNGwtODgsNDguMTdhMTUuODgsMTUuODgsMCwwLDEtMTUuMzYsMGwtODgtNDguMTdhMTYsMTYsMCwwLDEtOC4zMi0xNFY4MC4xOGExNiwxNiwwLDAsMSw4LjMyLTE0bDg4LTQ4LjE3YTE1Ljg4LDE1Ljg4LDAsMCwxLDE1LjM2LDBsODgsNDguMTdBMTYsMTYsMCwwLDEsMjMyLDgwLjE4WiIvPjwvc3ZnPg==)
 */
export function PhHexagonFillIcon(props: PhHexagonFillIconProps) {
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
      <path d="M232,80.18v95.64a16,16,0,0,1-8.32,14l-88,48.17a15.88,15.88,0,0,1-15.36,0l-88-48.17a16,16,0,0,1-8.32-14V80.18a16,16,0,0,1,8.32-14l88-48.17a15.88,15.88,0,0,1,15.36,0l88,48.17A16,16,0,0,1,232,80.18Z"/>
    </svg>
  );
}
