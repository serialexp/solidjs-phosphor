import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassMinusIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTEyYTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE1MiwxMTJabTc3LjY2LDExNy42NmE4LDgsMCwwLDEtMTEuMzIsMGwtNTAuMDYtNTAuMDdhODguMTEsODguMTEsMCwxLDEsMTEuMzEtMTEuMzFsNTAuMDcsNTAuMDZBOCw4LDAsMCwxLDIyOS42NiwyMjkuNjZaTTExMiwxODRhNzIsNzIsMCwxLDAtNzItNzJBNzIuMDgsNzIuMDgsMCwwLDAsMTEyLDE4NFoiLz48L3N2Zz4=)
 */
export function PhMagnifyingGlassMinusIcon(props: PhMagnifyingGlassMinusIconProps) {
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
      <path d="M152,112a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h64A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>
    </svg>
  );
}
