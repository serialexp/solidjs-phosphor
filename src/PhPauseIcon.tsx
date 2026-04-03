import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJIMTYwYTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDAsMzJabTAsMTc2SDE2MFY0OGg0MFpNOTYsMzJINTZBMTYsMTYsMCwwLDAsNDAsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDk2YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDk2LDMyWm0wLDE3Nkg1NlY0OEg5NloiLz48L3N2Zz4=)
 */
export function PhPauseIcon(props: PhPauseIconProps) {
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
      <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"/>
    </svg>
  );
}
