import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHeadlightsFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODBhOCw4LDAsMCwxLDgtOGg3MmE4LDgsMCwwLDEsMCwxNkgxNjhBOCw4LDAsMCwxLDE2MCw4MFptODAsODhIMTY4YTgsOCwwLDAsMCwwLDE2aDcyYTgsOCwwLDAsMCwwLTE2Wm0wLTY0SDE2OGE4LDgsMCwwLDAsMCwxNmg3MmE4LDgsMCwwLDAsMC0xNlptMCwzMkgxNjhhOCw4LDAsMCwwLDAsMTZoNzJhOCw4LDAsMCwwLDAtMTZaTTEyOCw0OEg4OC45QzQ0LjYyLDQ4LDguMzMsODMuNjIsOCwxMjcuMzlBODAsODAsMCwwLDAsODgsMjA4aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDEyOCw0OFoiLz48L3N2Zz4=)
 */
export function PhHeadlightsFillIcon(props: PhHeadlightsFillIconProps) {
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
      <path d="M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM128,48H88.9C44.62,48,8.33,83.62,8,127.39A80,80,0,0,0,88,208h40a16,16,0,0,0,16-16V64A16,16,0,0,0,128,48Z"/>
    </svg>
  );
}
