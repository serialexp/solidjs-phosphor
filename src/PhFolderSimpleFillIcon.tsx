import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODhWMjAwLjg5QTE1LjEzLDE1LjEzLDAsMCwxLDIxNi44OSwyMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNDAsNDhIOTMuMzNhMTYuMTIsMTYuMTIsMCwwLDEsOS42LDMuMkwxMzAuNjcsNzJIMjE2QTE2LDE2LDAsMCwxLDIzMiw4OFoiLz48L3N2Zz4=)
 */
export function PhFolderSimpleFillIcon(props: PhFolderSimpleFillIconProps) {
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
      <path d="M232,88V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z"/>
    </svg>
  );
}
