import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiceTwoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJabTE2LDE2MGExNiwxNiwwLDAsMS0xNiwxNkg2NGExNiwxNiwwLDAsMS0xNi0xNlY2NEExNiwxNiwwLDAsMSw2NCw0OEgxOTJhMTYsMTYsMCwwLDEsMTYsMTZabS04OC04NGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMjAsMTA4Wm00MCw0MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNjAsMTQ4WiIvPjwvc3ZnPg==)
 */
export function PhDiceTwoIcon(props: PhDiceTwoIconProps) {
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
      <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-88-84a12,12,0,1,1-12-12A12,12,0,0,1,120,108Zm40,40a12,12,0,1,1-12-12A12,12,0,0,1,160,148Z"/>
    </svg>
  );
}
