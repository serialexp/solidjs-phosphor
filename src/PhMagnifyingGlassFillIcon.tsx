import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTEyYTU2LDU2LDAsMSwxLTU2LTU2QTU2LDU2LDAsMCwxLDE2OCwxMTJabTYxLjY2LDExNy42NmE4LDgsMCwwLDEtMTEuMzIsMGwtNTAuMDYtNTAuMDdhODgsODgsMCwxLDEsMTEuMzItMTEuMzFsNTAuMDYsNTAuMDZBOCw4LDAsMCwxLDIyOS42NiwyMjkuNjZaTTExMiwxODRhNzIsNzIsMCwxLDAtNzItNzJBNzIuMDgsNzIuMDgsMCwwLDAsMTEyLDE4NFoiLz48L3N2Zz4=)
 */
export function PhMagnifyingGlassFillIcon(props: PhMagnifyingGlassFillIconProps) {
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
      <path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>
    </svg>
  );
}
