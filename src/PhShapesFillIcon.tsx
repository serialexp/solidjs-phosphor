import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShapesFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTEuNTksMTgxLjQ3QTgsOCwwLDAsMSwxMDQsMTkySDI0YTgsOCwwLDAsMS03LjU5LTEwLjUzbDQwLTEyMGE4LDgsMCwwLDEsMTUuMTgsMFpNMjA4LDc2YTUyLDUyLDAsMSwwLTUyLDUyQTUyLjA2LDUyLjA2LDAsMCwwLDIwOCw3NlptMTYsNjhIMTM2YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGg4OGE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMjI0LDE0NFoiLz48L3N2Zz4=)
 */
export function PhShapesFillIcon(props: PhShapesFillIconProps) {
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
      <path d="M111.59,181.47A8,8,0,0,1,104,192H24a8,8,0,0,1-7.59-10.53l40-120a8,8,0,0,1,15.18,0ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm16,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Z"/>
    </svg>
  );
}
