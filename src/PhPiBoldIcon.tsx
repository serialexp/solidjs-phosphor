import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPiBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTcyYTQwLDQwLDAsMCwxLTgwLDBWNzZIMTAwVjIwMGExMiwxMiwwLDAsMS0yNCwwVjc2SDcyYTM2LDM2LDAsMCwwLTM2LDM2LDEyLDEyLDAsMCwxLTI0LDBBNjAuMDcsNjAuMDcsMCwwLDEsNzIsNTJIMjI0YTEyLDEyLDAsMCwxLDAsMjRIMTgwdjk2YTE2LDE2LDAsMCwwLDMyLDAsMTIsMTIsMCwwLDEsMjQsMFoiLz48L3N2Zz4=)
 */
export function PhPiBoldIcon(props: PhPiBoldIconProps) {
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
      <path d="M236,172a40,40,0,0,1-80,0V76H100V200a12,12,0,0,1-24,0V76H72a36,36,0,0,0-36,36,12,12,0,0,1-24,0A60.07,60.07,0,0,1,72,52H224a12,12,0,0,1,0,24H180v96a16,16,0,0,0,32,0,12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
