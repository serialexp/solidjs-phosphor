import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiceOneFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJaTTEyOCwxNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTI4LDE0MFoiLz48L3N2Zz4=)
 */
export function PhDiceOneFillIcon(props: PhDiceOneFillIconProps) {
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
      <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/>
    </svg>
  );
}
