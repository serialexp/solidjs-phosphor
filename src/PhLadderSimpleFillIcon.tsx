import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLadderSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRhOCw4LDAsMCwwLTgsOHY4SDcyVjMyYTgsOCwwLDAsMC0xNiwwVjIyNGE4LDgsMCwwLDAsMTYsMHYtOEgxODR2OGE4LDgsMCwwLDAsMTYsMFYzMkE4LDgsMCwwLDAsMTkyLDI0Wk0xNzYsMTg0SDgwYTgsOCwwLDAsMSwwLTE2aDk2YTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDgwYTgsOCwwLDAsMSwwLTE2aDk2YTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDgwYTgsOCwwLDAsMSwwLTE2aDk2YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhLadderSimpleFillIcon(props: PhLadderSimpleFillIconProps) {
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
      <path d="M192,24a8,8,0,0,0-8,8v8H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0v-8H184v8a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
