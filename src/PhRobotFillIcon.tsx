import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRobotFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjQ4SDU2QTMyLDMyLDAsMCwwLDI0LDgwVjE5MmEzMiwzMiwwLDAsMCwzMiwzMkgyMDBhMzIsMzIsMCwwLDAsMzItMzJWODBBMzIsMzIsMCwwLDAsMjAwLDQ4Wk0xNzIsOTZhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTcyLDk2Wk05NiwxODRIODBhMTYsMTYsMCwwLDEsMC0zMkg5NlpNODQsMTIwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDg0LDEyMFptNjAsNjRIMTEyVjE1MmgzMlptMzIsMEgxNjBWMTUyaDE2YTE2LDE2LDAsMCwxLDAsMzJaIi8+PC9zdmc+)
 */
export function PhRobotFillIcon(props: PhRobotFillIconProps) {
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
      <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z"/>
    </svg>
  );
}
