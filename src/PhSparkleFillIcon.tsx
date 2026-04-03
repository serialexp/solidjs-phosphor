import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSparkleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQ0YTE1Ljc4LDE1Ljc4LDAsMCwxLTEwLjQyLDE0Ljk0TDE0NiwxNzhsLTE5LDUxLjYyYTE1LjkyLDE1LjkyLDAsMCwxLTI5Ljg4LDBMNzgsMTc4bC01MS42Mi0xOWExNS45MiwxNS45MiwwLDAsMSwwLTI5Ljg4TDc4LDExMGwxOS01MS42MmExNS45MiwxNS45MiwwLDAsMSwyOS44OCwwTDE0NiwxMTBsNTEuNjIsMTlBMTUuNzgsMTUuNzgsMCwwLDEsMjA4LDE0NFpNMTUyLDQ4aDE2VjY0YTgsOCwwLDAsMCwxNiwwVjQ4aDE2YTgsOCwwLDAsMCwwLTE2SDE4NFYxNmE4LDgsMCwwLDAtMTYsMFYzMkgxNTJhOCw4LDAsMCwwLDAsMTZabTg4LDMyaC04VjcyYTgsOCwwLDAsMC0xNiwwdjhoLThhOCw4LDAsMCwwLDAsMTZoOHY4YTgsOCwwLDAsMCwxNiwwVjk2aDhhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhSparkleFillIcon(props: PhSparkleFillIconProps) {
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
      <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
