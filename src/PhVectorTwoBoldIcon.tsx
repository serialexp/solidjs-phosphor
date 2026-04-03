import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVectorTwoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMjAwLjQ5bC0zMiwzMmExMiwxMiwwLDAsMS0xNy0xN0wxOTUsMjA0SDgwYTEyLDEyLDAsMCwxLTEyLTEyVjY5TDU2LjQ5LDgwLjQ5YTEyLDEyLDAsMSwxLTE3LTE3bDMyLTMyYTEyLDEyLDAsMCwxLDE3LDBsMzIsMzJhMTIsMTIsMCwwLDEtMTcsMTdMOTIsNjlWMTgwSDE5NWwtMTEuNTItMTEuNTFhMTIsMTIsMCwwLDEsMTctMTdsMzIsMzJBMTIsMTIsMCwwLDEsMjMyLjQ5LDIwMC40OVoiLz48L3N2Zz4=)
 */
export function PhVectorTwoBoldIcon(props: PhVectorTwoBoldIconProps) {
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
      <path d="M232.49,200.49l-32,32a12,12,0,0,1-17-17L195,204H80a12,12,0,0,1-12-12V69L56.49,80.49a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L92,69V180H195l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,232.49,200.49Z"/>
    </svg>
  );
}
