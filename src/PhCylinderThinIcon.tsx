import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCylinderThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBDODkuODcsMjAsNjAsMzcuNTcsNjAsNjBWMTk2YzAsMjIuNDMsMjkuODcsNDAsNjgsNDBzNjgtMTcuNTcsNjgtNDBWNjBDMTk2LDM3LjU3LDE2Ni4xMywyMCwxMjgsMjBabTAsOGMzMi41MiwwLDYwLDE0LjY1LDYwLDMycy0yNy40OCwzMi02MCwzMlM2OCw3Ny4zNSw2OCw2MCw5NS40OCwyOCwxMjgsMjhabTYwLDE2OGMwLDE3LjM1LTI3LjQ4LDMyLTYwLDMycy02MC0xNC42NS02MC0zMlY3OS4xMUM3OS4zNSw5MS42NSwxMDEuNzEsMTAwLDEyOCwxMDBzNDguNjUtOC4zNSw2MC0yMC44OVoiLz48L3N2Zz4=)
 */
export function PhCylinderThinIcon(props: PhCylinderThinIconProps) {
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
      <path d="M128,20C89.87,20,60,37.57,60,60V196c0,22.43,29.87,40,68,40s68-17.57,68-40V60C196,37.57,166.13,20,128,20Zm0,8c32.52,0,60,14.65,60,32s-27.48,32-60,32S68,77.35,68,60,95.48,28,128,28Zm60,168c0,17.35-27.48,32-60,32s-60-14.65-60-32V79.11C79.35,91.65,101.71,100,128,100s48.65-8.35,60-20.89Z"/>
    </svg>
  );
}
