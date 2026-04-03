import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlayIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNCwxMTQuNDksODguMzIsMjYuMzVhMTYsMTYsMCwwLDAtMTYuMi0uM0ExNS44NiwxNS44NiwwLDAsMCw2NCwzOS44N1YyMTYuMTNBMTUuOTQsMTUuOTQsMCwwLDAsODAsMjMyYTE2LjA3LDE2LjA3LDAsMCwwLDguMzYtMi4zNUwyMzIuNCwxNDEuNTFhMTUuODEsMTUuODEsMCwwLDAsMC0yN1pNODAsMjE1Ljk0VjQwbDE0My44Myw4OFoiLz48L3N2Zz4=)
 */
export function PhPlayIcon(props: PhPlayIconProps) {
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
      <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"/>
    </svg>
  );
}
