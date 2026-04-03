import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMzJhNCw0LDAsMCwxLTQsNCw5Mi4xLDkyLjEsMCwwLDAtOTIsOTJ2ODYuMzRsNDEuMTctNDEuMTdhNCw0LDAsMCwxLDUuNjYsNS42NmwtNDgsNDhhNCw0LDAsMCwxLTUuNjYsMGwtNDgtNDhhNCw0LDAsMCwxLDUuNjYtNS42NkwxMDAsMjE0LjM0VjEyOEExMDAuMTEsMTAwLjExLDAsMCwxLDIwMCwyOCw0LDQsMCwwLDEsMjA0LDMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendLeftDownThinIcon(props: PhArrowBendLeftDownThinIconProps) {
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
      <path d="M204,32a4,4,0,0,1-4,4,92.1,92.1,0,0,0-92,92v86.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L100,214.34V128A100.11,100.11,0,0,1,200,28,4,4,0,0,1,204,32Z"/>
    </svg>
  );
}
