import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTeaBagIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwYTE2LDE2LDAsMCwxLTE2LTE2VjY0QTU2LDU2LDAsMCwwLDk2LDY0djhINzYuNTNhMTYuMDksMTYuMDksMCwwLDAtMTMuNzIsNy43N0w0Mi4yOCwxMTRBMTYuMDYsMTYuMDYsMCwwLDAsNDAsMTIyLjIyVjIxNmExNiwxNiwwLDAsMCwxNiwxNmg5NmExNiwxNiwwLDAsMCwxNi0xNlYxMjIuMjJhMTYuMDYsMTYuMDYsMCwwLDAtMi4yOC04LjI0TDE0NS4xOSw3OS43N0ExNi4wOSwxNi4wOSwwLDAsMCwxMzEuNDcsNzJIMTEyVjY0YTQwLDQwLDAsMCwxLDgwLDB2ODBhMzIsMzIsMCwwLDAsMzIsMzIsOCw4LDAsMCwwLDAtMTZaTTEzMS40Nyw4OCwxNTIsMTIyLjIyVjIxNkg1NlYxMjIuMjJMNzYuNTMsODhIOTZ2NDhhOCw4LDAsMCwwLDE2LDBWODhaIi8+PC9zdmc+)
 */
export function PhTeaBagIcon(props: PhTeaBagIconProps) {
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
      <path d="M224,160a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8H76.53a16.09,16.09,0,0,0-13.72,7.77L42.28,114A16.06,16.06,0,0,0,40,122.22V216a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V122.22a16.06,16.06,0,0,0-2.28-8.24L145.19,79.77A16.09,16.09,0,0,0,131.47,72H112V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16ZM131.47,88,152,122.22V216H56V122.22L76.53,88H96v48a8,8,0,0,0,16,0V88Z"/>
    </svg>
  );
}
