import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEggThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBDOTIuODcsMjAsNDQsODYuNTIsNDQsMTUyYTg0LDg0LDAsMCwwLDE2OCwwQzIxMiw4Ni41MiwxNjMuMTMsMjAsMTI4LDIwWm0wLDIwOGE3Ni4wOCw3Ni4wOCwwLDAsMS03Ni03NmMwLTI4LjQ2LDEwLTU5LjczLDI3LjMzLTg1Ljc4Qzk0LjgxLDQzLDExMy45MSwyOCwxMjgsMjhzMzMuMTksMTUsNDguNjcsMzguMjJDMTk0LDkyLjI3LDIwNCwxMjMuNTQsMjA0LDE1MkE3Ni4wOCw3Ni4wOCwwLDAsMSwxMjgsMjI4WiIvPjwvc3ZnPg==)
 */
export function PhEggThinIcon(props: PhEggThinIconProps) {
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
      <path d="M128,20C92.87,20,44,86.52,44,152a84,84,0,0,0,168,0C212,86.52,163.13,20,128,20Zm0,208a76.08,76.08,0,0,1-76-76c0-28.46,10-59.73,27.33-85.78C94.81,43,113.91,28,128,28s33.19,15,48.67,38.22C194,92.27,204,123.54,204,152A76.08,76.08,0,0,1,128,228Z"/>
    </svg>
  );
}
