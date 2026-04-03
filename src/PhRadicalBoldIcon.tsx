import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRadicalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsODB2MjRhMTIsMTIsMCwwLDEtMjQsMFY5MkgxMzYuMzJMOTEuMjQsMjEyLjIxYTEyLDEyLDAsMCwxLTIyLjQ3LDBsLTQ4LTEyOGExMiwxMiwwLDEsMSwyMi40Ny04LjQzbDM2Ljc2LDk4LDM2Ljc3LTk4QTEyLDEyLDAsMCwxLDEyOCw2OEgyNDBBMTIsMTIsMCwwLDEsMjUyLDgwWiIvPjwvc3ZnPg==)
 */
export function PhRadicalBoldIcon(props: PhRadicalBoldIconProps) {
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
      <path d="M252,80v24a12,12,0,0,1-24,0V92H136.32L91.24,212.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,128,68H240A12,12,0,0,1,252,80Z"/>
    </svg>
  );
}
