import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVanThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEsMTA5LjQsMjA1LjQ3LDU2LjNhMTIsMTIsMCwwLDAtOS4yMS00LjNIMzJBMTIsMTIsMCwwLDAsMjAsNjRWMTc2YTEyLDEyLDAsMCwwLDEyLDEySDUyLjI5YTI4LDI4LDAsMCwwLDU1LjQyLDBoNTYuNThhMjgsMjgsMCwwLDAsNTUuNDIsMEgyNDBhMTIsMTIsMCwwLDAsMTItMTJWMTEyQTQsNCwwLDAsMCwyNTEsMTA5LjRaTTE5OS4zNiw2MS40NywyMzkuMywxMDhIMTcyVjYwaDI0LjI2QTQsNCwwLDAsMSwxOTkuMzYsNjEuNDdaTTEwMCwxMDhWNjBoNjR2NDhaTTMyLDYwSDkydjQ4SDI4VjY0QTQsNCwwLDAsMSwzMiw2MFpNODAsMjA0YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDgwLDIwNFptMTEyLDBhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTkyLDIwNFptNDgtMjRIMjE5LjcxYTI4LDI4LDAsMCwwLTU1LjQyLDBIMTA3LjcxYTI4LDI4LDAsMCwwLTU1LjQyLDBIMzJhNCw0LDAsMCwxLTQtNFYxMTZIMjQ0djYwQTQsNCwwLDAsMSwyNDAsMTgwWiIvPjwvc3ZnPg==)
 */
export function PhVanThinIcon(props: PhVanThinIconProps) {
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
      <path d="M251,109.4,205.47,56.3a12,12,0,0,0-9.21-4.3H32A12,12,0,0,0,20,64V176a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V112A4,4,0,0,0,251,109.4ZM199.36,61.47,239.3,108H172V60h24.26A4,4,0,0,1,199.36,61.47ZM100,108V60h64v48ZM32,60H92v48H28V64A4,4,0,0,1,32,60ZM80,204a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm112,0a20,20,0,1,1,20-20A20,20,0,0,1,192,204Zm48-24H219.71a28,28,0,0,0-55.42,0H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V116H244v60A4,4,0,0,1,240,180Z"/>
    </svg>
  );
}
