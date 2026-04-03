import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotSubsetOfIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuMzgsMzQuMDhhOCw4LDAsMCwwLTExLjMuNTRMMTk3LjE5LDQwSDEyOEE4OCw4OCwwLDAsMCw2My4xNiwxODcuNDNMNDIuMDgsMjEwLjYyYTgsOCwwLDEsMCwxMS44NCwxMC43Nkw3NSwxOTguMkE4Ny41LDg3LjUsMCwwLDAsMTI4LDIxNmg3MmE4LDgsMCwwLDAsMC0xNkgxMjhhNzEuNjMsNzEuNjMsMCwwLDEtNDIuMTgtMTMuN0wyMTMuOTIsNDUuMzhBOCw4LDAsMCwwLDIxMy4zOCwzNC4wOFpNNTYsMTI4YTcyLjA4LDcyLjA4LDAsMCwxLDcyLTcyaDU0LjY0TDc0LDE3NS41M0E3MS42OSw3MS42OSwwLDAsMSw1NiwxMjhaIi8+PC9zdmc+)
 */
export function PhNotSubsetOfIcon(props: PhNotSubsetOfIconProps) {
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
      <path d="M213.38,34.08a8,8,0,0,0-11.3.54L197.19,40H128A88,88,0,0,0,63.16,187.43L42.08,210.62a8,8,0,1,0,11.84,10.76L75,198.2A87.5,87.5,0,0,0,128,216h72a8,8,0,0,0,0-16H128a71.63,71.63,0,0,1-42.18-13.7L213.92,45.38A8,8,0,0,0,213.38,34.08ZM56,128a72.08,72.08,0,0,1,72-72h54.64L74,175.53A71.69,71.69,0,0,1,56,128Z"/>
    </svg>
  );
}
