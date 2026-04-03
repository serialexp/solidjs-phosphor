import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAsteriskSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm02My4zNCw5MS44My01MC40LDE2LjM4LDMxLjE1LDQyLjg3YTgsOCwwLDEsMS0xMi45NCw5LjRMMTI4LDE0MS42MSw5Ni44NSwxODQuNDhhOCw4LDAsMCwxLTEyLjk0LTkuNGwzMS4xNS00Mi44Ny01MC40LTE2LjM4YTgsOCwwLDAsMSw0Ljk0LTE1LjIyTDEyMCwxMTdWNjRhOCw4LDAsMCwxLDE2LDB2NTNsNTAuNC0xNi4zOGE4LDgsMCwwLDEsNC45NCwxNS4yMloiLz48L3N2Zz4=)
 */
export function PhAsteriskSimpleFillIcon(props: PhAsteriskSimpleFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm63.34,91.83-50.4,16.38,31.15,42.87a8,8,0,1,1-12.94,9.4L128,141.61,96.85,184.48a8,8,0,0,1-12.94-9.4l31.15-42.87-50.4-16.38a8,8,0,0,1,4.94-15.22L120,117V64a8,8,0,0,1,16,0v53l50.4-16.38a8,8,0,0,1,4.94,15.22Z"/>
    </svg>
  );
}
