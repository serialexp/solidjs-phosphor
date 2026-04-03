import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWatchThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTI4YTc1Ljk0LDc1Ljk0LDAsMCwwLTMyLjM1LTYyLjE2bC02LjUyLTM2QTEyLDEyLDAsMCwwLDE1My4zMiwyMEgxMDIuNjhhMTIsMTIsMCwwLDAtMTEuODEsOS44NmwtNi41MiwzNmE3NS44OSw3NS44OSwwLDAsMCwwLDEyNC4zMmw2LjUyLDM2QTEyLDEyLDAsMCwwLDEwMi42OCwyMzZoNTAuNjRhMTIsMTIsMCwwLDAsMTEuODEtOS44Nmw2LjUyLTM2QTc1Ljk0LDc1Ljk0LDAsMCwwLDIwNCwxMjhaTTk4Ljc0LDMxLjI5QTQsNCwwLDAsMSwxMDIuNjgsMjhoNTAuNjRhNCw0LDAsMCwxLDMuOTQsMy4yOWw1LjI2LDI5YTc1LjY5LDc1LjY5LDAsMCwwLTY5LDBabTU4LjUyLDE5My40MmE0LDQsMCwwLDEtMy45NCwzLjI5SDEwMi42OGE0LDQsMCwwLDEtMy45NC0zLjI5bC01LjI2LTI5YTc1LjY5LDc1LjY5LDAsMCwwLDY5LDBaTTEyOCwxOTZhNjgsNjgsMCwxLDEsNjgtNjhBNjguMDcsNjguMDcsMCwwLDEsMTI4LDE5NlptNDQtNjhhNCw0LDAsMCwxLTQsNEgxMjhhNCw0LDAsMCwxLTQtNFY4OGE0LDQsMCwwLDEsOCwwdjM2aDM2QTQsNCwwLDAsMSwxNzIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhWatchThinIcon(props: PhWatchThinIconProps) {
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
      <path d="M204,128a75.94,75.94,0,0,0-32.35-62.16l-6.52-36A12,12,0,0,0,153.32,20H102.68a12,12,0,0,0-11.81,9.86l-6.52,36a75.89,75.89,0,0,0,0,124.32l6.52,36A12,12,0,0,0,102.68,236h50.64a12,12,0,0,0,11.81-9.86l6.52-36A75.94,75.94,0,0,0,204,128ZM98.74,31.29A4,4,0,0,1,102.68,28h50.64a4,4,0,0,1,3.94,3.29l5.26,29a75.69,75.69,0,0,0-69,0Zm58.52,193.42a4,4,0,0,1-3.94,3.29H102.68a4,4,0,0,1-3.94-3.29l-5.26-29a75.69,75.69,0,0,0,69,0ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm44-68a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"/>
    </svg>
  );
}
