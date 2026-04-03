import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPeaceDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptODgsMTA0YTg3LjQ4LDg3LjQ4LDAsMCwxLTExLjY0LDQzLjdMMTM2LDEyMy44NFY0MC4zN0E4OC4xMSw4OC4xMSwwLDAsMSwyMTYsMTI4Wk0xMjAsNDAuMzd2ODMuNDdMNTEuNjQsMTcxLjdBODgsODgsMCwwLDEsMTIwLDQwLjM3Wk02MC44NCwxODQuNzksMTIwLDE0My4zN3Y3Mi4yNkE4Ny44NSw4Ny44NSwwLDAsMSw2MC44NCwxODQuNzlaTTEzNiwyMTUuNjNWMTQzLjM3bDU5LjE2LDQxLjQyQTg3Ljg1LDg3Ljg1LDAsMCwxLDEzNiwyMTUuNjNaIi8+PC9zdmc+)
 */
export function PhPeaceDuotoneIcon(props: PhPeaceDuotoneIconProps) {
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
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z"/>
    </svg>
  );
}
