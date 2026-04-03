import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagChevronThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzMsMTI1Ljc4LDE5Ny43LDU3LjM0YTEyLDEyLDAsMCwwLTEwLTUuMzRIMzJhNCw0LDAsMCwwLTMuMzMsNi4yMkw3NS4xOSwxMjgsMjguNjcsMTk3Ljc4QTQsNCwwLDAsMCwzMiwyMDRIMTg3LjcyYTEyLDEyLDAsMCwwLDEwLTUuMzRsNDUuNjMtNjguNDRBNCw0LDAsMCwwLDI0My4zMywxMjUuNzhabS01Mi4yOCw2OC40NGE0LDQsMCwwLDEtMy4zMywxLjc4SDM5LjQ3bDQzLjg2LTY1Ljc4YTQsNCwwLDAsMCwwLTQuNDRMMzkuNDcsNjBIMTg3LjcyYTQsNCwwLDAsMSwzLjMzLDEuNzhMMjM1LjE5LDEyOFoiLz48L3N2Zz4=)
 */
export function PhTagChevronThinIcon(props: PhTagChevronThinIconProps) {
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
      <path d="M243.33,125.78,197.7,57.34a12,12,0,0,0-10-5.34H32a4,4,0,0,0-3.33,6.22L75.19,128,28.67,197.78A4,4,0,0,0,32,204H187.72a12,12,0,0,0,10-5.34l45.63-68.44A4,4,0,0,0,243.33,125.78Zm-52.28,68.44a4,4,0,0,1-3.33,1.78H39.47l43.86-65.78a4,4,0,0,0,0-4.44L39.47,60H187.72a4,4,0,0,1,3.33,1.78L235.19,128Z"/>
    </svg>
  );
}
