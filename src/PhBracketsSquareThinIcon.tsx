import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBracketsSquareThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NCw0NFYyMTJIODBhNCw0LDAsMCwxLDAsOEg0MGE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRIODBhNCw0LDAsMCwxLDAsOFptMTcyLThIMTc2YTQsNCwwLDAsMCwwLDhoMzZWMjEySDE3NmE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCw0LTRWNDBBNCw0LDAsMCwwLDIxNiwzNloiLz48L3N2Zz4=)
 */
export function PhBracketsSquareThinIcon(props: PhBracketsSquareThinIconProps) {
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
      <path d="M44,44V212H80a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8Zm172-8H176a4,4,0,0,0,0,8h36V212H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36Z"/>
    </svg>
  );
}
