import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHashStraightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQ4SDE3MlYxMDhoNDRhMTIsMTIsMCwwLDAsMC0yNEgxNzJWNDBhMTIsMTIsMCwwLDAtMjQsMFY4NEgxMDhWNDBhMTIsMTIsMCwwLDAtMjQsMFY4NEg0MGExMiwxMiwwLDAsMCwwLDI0SDg0djQwSDQwYTEyLDEyLDAsMCwwLDAsMjRIODR2NDRhMTIsMTIsMCwwLDAsMjQsMFYxNzJoNDB2NDRhMTIsMTIsMCwwLDAsMjQsMFYxNzJoNDRhMTIsMTIsMCwwLDAsMC0yNFptLTEwOCwwVjEwOGg0MHY0MFoiLz48L3N2Zz4=)
 */
export function PhHashStraightBoldIcon(props: PhHashStraightBoldIconProps) {
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
      <path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"/>
    </svg>
  );
}
