import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCertificateFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODYuNTNWNTZhMTYsMTYsMCwwLDAtMTYtMTZINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDE2MHYyNEE4LDgsMCwwLDAsMTcyLDIzMWwyNC0xMy43NEwyMjAsMjMxQTgsOCwwLDAsMCwyMzIsMjI0VjE2MS40N2E1MS44OCw1MS44OCwwLDAsMCwwLTc0Ljk0Wk0xMjgsMTQ0SDcyYTgsOCwwLDAsMSwwLTE2aDU2YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDcyYTgsOCwwLDAsMSwwLTE2aDU2YTgsOCwwLDAsMSwwLDE2Wm04OCw5OC4yMS0xNi05LjE2YTgsOCwwLDAsMC03Ljk0LDBsLTE2LDkuMTZWMTcyYTUxLjg4LDUxLjg4LDAsMCwwLDQwLDBaTTE5NiwxNjBhMzYsMzYsMCwxLDEsMzYtMzZBMzYsMzYsMCwwLDEsMTk2LDE2MFoiLz48L3N2Zz4=)
 */
export function PhCertificateFillIcon(props: PhCertificateFillIconProps) {
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
      <path d="M232,86.53V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H160v24A8,8,0,0,0,172,231l24-13.74L220,231A8,8,0,0,0,232,224V161.47a51.88,51.88,0,0,0,0-74.94ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,98.21-16-9.16a8,8,0,0,0-7.94,0l-16,9.16V172a51.88,51.88,0,0,0,40,0ZM196,160a36,36,0,1,1,36-36A36,36,0,0,1,196,160Z"/>
    </svg>
  );
}
