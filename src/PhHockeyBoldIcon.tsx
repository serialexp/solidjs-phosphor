import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHockeyBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTQ4SDEzMi43NUw0MS4xNCw0MC4yM0ExMiwxMiwwLDAsMCwyMi44Niw1NS43N2w5NS4xNiwxMTIsLjA2LjA3TDE1Ni40NiwyMTNBMjAsMjAsMCwwLDAsMTcxLjcsMjIwSDIyNGEyMCwyMCwwLDAsMCwyMC0yMFYxNjhBMjAsMjAsMCwwLDAsMjI0LDE0OFptLTcwLjg1LDI0SDE4MHYyNGgtNi40NVpNMjIwLDE5NkgyMDRWMTcyaDE2Wm0tNjYuMzQtODMuNzcsNjEuMi03MmExMiwxMiwwLDAsMSwxOC4yOCwxNS41NGwtNjEuMiw3MmExMiwxMiwwLDEsMS0xOC4yOC0xNS41NFptLTQ0LjE0LDcwLjQ1YTEyLDEyLDAsMCwwLTE2LjkxLDEuMzdMODIuNDUsMTk2SDc2VjE3MS45M0ExMiwxMiwwLDAsMCw3NC43LDE0OEgzMmEyMCwyMCwwLDAsMC0yMCwyMHYzMmEyMCwyMCwwLDAsMCwyMCwyMEg4NC4zQTIwLDIwLDAsMCwwLDk5LjU0LDIxM2wxMS4zNS0xMy4zNkExMiwxMiwwLDAsMCwxMDkuNTIsMTgyLjY4Wk0zNiwxNzJINTJ2MjRIMzZaIi8+PC9zdmc+)
 */
export function PhHockeyBoldIcon(props: PhHockeyBoldIconProps) {
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
      <path d="M224,148H132.75L41.14,40.23A12,12,0,0,0,22.86,55.77l95.16,112,.06.07L156.46,213A20,20,0,0,0,171.7,220H224a20,20,0,0,0,20-20V168A20,20,0,0,0,224,148Zm-70.85,24H180v24h-6.45ZM220,196H204V172h16Zm-66.34-83.77,61.2-72a12,12,0,0,1,18.28,15.54l-61.2,72a12,12,0,1,1-18.28-15.54Zm-44.14,70.45a12,12,0,0,0-16.91,1.37L82.45,196H76V171.93A12,12,0,0,0,74.7,148H32a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H84.3A20,20,0,0,0,99.54,213l11.35-13.36A12,12,0,0,0,109.52,182.68ZM36,172H52v24H36Z"/>
    </svg>
  );
}
