import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerSimpleSlashIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTUyVjEwNGE4LDgsMCwwLDEsMTYsMHY0OGE4LDgsMCwwLDEtMTYsMFptNDAtNzJhOCw4LDAsMCwwLTgsOHY4MGE4LDgsMCwwLDAsMTYsMFY4OEE4LDgsMCwwLDAsMjMyLDgwWk0yMjEuOTIsMjEwLjYyYTgsOCwwLDEsMS0xMS44NCwxMC43NkwxNjgsMTc1LjA5VjIyNGE4LDgsMCwwLDEtMTIuOTEsNi4zMUw4NS4yNSwxNzZINDBhMTYsMTYsMCwwLDEtMTYtMTZWOTZBMTYsMTYsMCwwLDEsNDAsODBIODEuNTVMNTAuMDgsNDUuMzhBOCw4LDAsMCwxLDYxLjkyLDM0LjYyWk0xNTIsMTU3LjQ5LDk2LjEsOTZINDB2NjRIODhhNy45NCw3Ljk0LDAsMCwxLDQuOTEsMS42OUwxNTIsMjA3LjY0Wk0xMjUuMDYsNjkuMzFsMjYuOTQtMjF2NTguNDdhOCw4LDAsMCwwLDE2LDBWMzJhOCw4LDAsMCwwLTEyLjkxLTYuMzFsLTM5Ljg1LDMxYTgsOCwwLDAsMCw5LjgyLDEyLjYzWiIvPjwvc3ZnPg==)
 */
export function PhSpeakerSimpleSlashIcon(props: PhSpeakerSimpleSlashIconProps) {
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
      <path d="M192,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,232,80ZM221.92,210.62a8,8,0,1,1-11.84,10.76L168,175.09V224a8,8,0,0,1-12.91,6.31L85.25,176H40a16,16,0,0,1-16-16V96A16,16,0,0,1,40,80H81.55L50.08,45.38A8,8,0,0,1,61.92,34.62ZM152,157.49,96.1,96H40v64H88a7.94,7.94,0,0,1,4.91,1.69L152,207.64ZM125.06,69.31l26.94-21v58.47a8,8,0,0,0,16,0V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0,9.82,12.63Z"/>
    </svg>
  );
}
