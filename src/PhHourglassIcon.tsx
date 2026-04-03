import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzUuNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA5LDE2LjA5LDAsMCwwLTYuMzUtMTIuNzdMMTQxLjI3LDEyOGw1Mi4zOC0zOS42QTE2LjA1LDE2LjA1LDAsMCwwLDIwMCw3NS42NFpNMTg0LDIxNkg3MlYxODBsNTYtNDIsNTYsNDIuMzVabTAtMTQwLjM2TDEyOCwxMTgsNzIsNzZWNDBIMTg0WiIvPjwvc3ZnPg==)
 */
export function PhHourglassIcon(props: PhHourglassIconProps) {
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
      <path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"/>
    </svg>
  );
}
