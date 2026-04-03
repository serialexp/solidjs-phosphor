import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiceOneBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhINjRBMzYsMzYsMCwwLDAsMjgsNjRWMTkyYTM2LDM2LDAsMCwwLDM2LDM2SDE5MmEzNiwzNiwwLDAsMCwzNi0zNlY2NEEzNiwzNiwwLDAsMCwxOTIsMjhabTEyLDE2NGExMiwxMiwwLDAsMS0xMiwxMkg2NGExMiwxMiwwLDAsMS0xMi0xMlY2NEExMiwxMiwwLDAsMSw2NCw1MkgxOTJhMTIsMTIsMCwwLDEsMTIsMTJabS02MC02NGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxNDQsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhDiceOneBoldIcon(props: PhDiceOneBoldIconProps) {
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
      <path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12Zm-60-64a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"/>
    </svg>
  );
}
