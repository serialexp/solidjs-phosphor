import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassHighBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjBINzJBMjAsMjAsMCwwLDAsNTIsNDBWNzZhMjAuMSwyMC4xLDAsMCwwLDgsMTZsNDgsMzZMNjAsMTY0YTIwLjEsMjAuMSwwLDAsMC04LDE2djM2YTIwLDIwLDAsMCwwLDIwLDIwSDE4NGEyMCwyMCwwLDAsMCwyMC0yMFYxODAuMzZhMjAuMTMsMjAuMTMsMCwwLDAtNy45NC0xNkwxNDcuOSwxMjhsNDguMTYtMzYuNGEyMC4xMywyMC4xMywwLDAsMCw3Ljk0LTE2VjQwQTIwLDIwLDAsMCwwLDE4NCwyMFptLTQsMjRWNjBINzZWNDRabS01Miw2OUw4OS4zMyw4NGg3N1ptNTIsOTlINzZWMTgybDUyLTM5LDUyLDM5LjMzWiIvPjwvc3ZnPg==)
 */
export function PhHourglassHighBoldIcon(props: PhHourglassHighBoldIconProps) {
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
      <path d="M184,20H72A20,20,0,0,0,52,40V76a20.1,20.1,0,0,0,8,16l48,36L60,164a20.1,20.1,0,0,0-8,16v36a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V180.36a20.13,20.13,0,0,0-7.94-16L147.9,128l48.16-36.4a20.13,20.13,0,0,0,7.94-16V40A20,20,0,0,0,184,20Zm-4,24V60H76V44Zm-52,69L89.33,84h77Zm52,99H76V182l52-39,52,39.33Z"/>
    </svg>
  );
}
