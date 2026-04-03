import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareHalfIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBINTZBMTYsMTYsMCwwLDAsNDAsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMDAsNDBabS02NCw4MGg2NHYxNkgxMzZabTAtMTZWODhoNjR2MTZabTAsNDhoNjR2MTZIMTM2Wm02NC04MEgxMzZWNTZoNjRaTTU2LDU2aDY0VjIwMEg1NlpNMjAwLDIwMEgxMzZWMTg0aDY0djE2WiIvPjwvc3ZnPg==)
 */
export function PhSquareHalfIcon(props: PhSquareHalfIconProps) {
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
      <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-64,80h64v16H136Zm0-16V88h64v16Zm0,48h64v16H136Zm64-80H136V56h64ZM56,56h64V200H56ZM200,200H136V184h64v16Z"/>
    </svg>
  );
}
