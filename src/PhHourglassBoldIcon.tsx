import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNzUuNjRWNDBhMjAsMjAsMCwwLDAtMjAtMjBINzJBMjAsMjAsMCwwLDAsNTIsNDBWNzZhMjAuMSwyMC4xLDAsMCwwLDgsMTZsNDgsMzZMNjAsMTY0YTIwLjEsMjAuMSwwLDAsMC04LDE2djM2YTIwLDIwLDAsMCwwLDIwLDIwSDE4NGEyMCwyMCwwLDAsMCwyMC0yMFYxODAuMzZhMjAuMTMsMjAuMTMsMCwwLDAtNy45NC0xNkwxNDcuOSwxMjhsNDguMTYtMzYuNEEyMC4xMywyMC4xMywwLDAsMCwyMDQsNzUuNjRaTTE4MCwyMTJINzZWMTgybDUyLTM5LDUyLDM5LjMzWm0wLTEzOC4zNUwxMjgsMTEzLDc2LDc0VjQ0SDE4MFoiLz48L3N2Zz4=)
 */
export function PhHourglassBoldIcon(props: PhHourglassBoldIconProps) {
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
      <path d="M204,75.64V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V76a20.1,20.1,0,0,0,8,16l48,36L60,164a20.1,20.1,0,0,0-8,16v36a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V180.36a20.13,20.13,0,0,0-7.94-16L147.9,128l48.16-36.4A20.13,20.13,0,0,0,204,75.64ZM180,212H76V182l52-39,52,39.33Zm0-138.35L128,113,76,74V44H180Z"/>
    </svg>
  );
}
