import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassMediumFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzUuNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA5LDE2LjA5LDAsMCwwLTYuMzUtMTIuNzdMMTQxLjI3LDEyOGw1Mi4zOC0zOS41OUExNi4wOSwxNi4wOSwwLDAsMCwyMDAsNzUuNjRaTTE4NCwxODAuMzZWMjE2SDcyVjE4MGw0OC0zNnYyNGE4LDgsMCwwLDAsMTYsMFYxNDQuMDhabTAtMTA0LjcyTDE3OC4yMyw4MEg3Ny4zM0w3Miw3NlY0MEgxODRaIi8+PC9zdmc+)
 */
export function PhHourglassMediumFillIcon(props: PhHourglassMediumFillIconProps) {
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
      <path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,180.36V216H72V180l48-36v24a8,8,0,0,0,16,0V144.08Zm0-104.72L178.23,80H77.33L72,76V40H184Z"/>
    </svg>
  );
}
