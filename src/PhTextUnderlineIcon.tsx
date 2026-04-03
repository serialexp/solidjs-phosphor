import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextUnderlineIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjI0YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLDAtMTZIMTkyQTgsOCwwLDAsMSwyMDAsMjI0Wm0tNzItMjRhNjQuMDcsNjQuMDcsMCwwLDAsNjQtNjRWNTZhOCw4LDAsMCwwLTE2LDB2ODBhNDgsNDgsMCwwLDEtOTYsMFY1NmE4LDgsMCwwLDAtMTYsMHY4MEE2NC4wNyw2NC4wNywwLDAsMCwxMjgsMjAwWiIvPjwvc3ZnPg==)
 */
export function PhTextUnderlineIcon(props: PhTextUnderlineIconProps) {
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
      <path d="M200,224a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,224Zm-72-24a64.07,64.07,0,0,0,64-64V56a8,8,0,0,0-16,0v80a48,48,0,0,1-96,0V56a8,8,0,0,0-16,0v80A64.07,64.07,0,0,0,128,200Z"/>
    </svg>
  );
}
