import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCameraFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZIMTgwLjI4TDE2Ni42NSwzNS41NkE4LDgsMCwwLDAsMTYwLDMySDk2YTgsOCwwLDAsMC02LjY1LDMuNTZMNzUuNzEsNTZINDhBMjQsMjQsMCwwLDAsMjQsODBWMTkyYTI0LDI0LDAsMCwwLDI0LDI0SDIwOGEyNCwyNCwwLDAsMCwyNC0yNFY4MEEyNCwyNCwwLDAsMCwyMDgsNTZabS00NCw3NmEzNiwzNiwwLDEsMS0zNi0zNkEzNiwzNiwwLDAsMSwxNjQsMTMyWiIvPjwvc3ZnPg==)
 */
export function PhCameraFillIcon(props: PhCameraFillIconProps) {
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
      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"/>
    </svg>
  );
}
