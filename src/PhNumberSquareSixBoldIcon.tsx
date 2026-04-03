import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareSixBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRabS03Ni0xNmE0MCw0MCwwLDAsMCw1LjA2LTc5LjY3TDE0Ni4zLDg2LjE1YTEyLDEyLDAsMSwwLTIwLjYtMTIuM2wtMzIuMjQsNTRBNDAsNDAsMCwwLDAsMTI4LDE4OFptMC01NmExNiwxNiwwLDEsMS0xNiwxNkExNiwxNiwwLDAsMSwxMjgsMTMyWiIvPjwvc3ZnPg==)
 */
export function PhNumberSquareSixBoldIcon(props: PhNumberSquareSixBoldIconProps) {
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
      <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-76-16a40,40,0,0,0,5.06-79.67L146.3,86.15a12,12,0,1,0-20.6-12.3l-32.24,54A40,40,0,0,0,128,188Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,128,132Z"/>
    </svg>
  );
}
