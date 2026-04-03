import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderMinusThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzZIMTI5LjY2TDEwMS4xNyw0Ny41MkExMS45LDExLjksMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYyQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJIMjE2Ljg5QTExLjEyLDExLjEyLDAsMCwwLDIyOCwyMDAuODlWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk00MCw1Mkg5Mi42OWE0LDQsMCwwLDEsMi44MiwxLjE3TDExOC4zNCw3NkgzNlY1NkE0LDQsMCwwLDEsNDAsNTJaTTIyMCwyMDAuODlhMy4xMiwzLjEyLDAsMCwxLTMuMTEsMy4xMUgzOS4zOEEzLjM5LDMuMzksMCwwLDEsMzYsMjAwLjYyVjg0SDIxNmE0LDQsMCwwLDEsNCw0Wk0xNTYsMTQ0YTQsNCwwLDAsMS00LDRIMTA0YTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDE1NiwxNDRaIi8+PC9zdmc+)
 */
export function PhFolderMinusThinIcon(props: PhFolderMinusThinIconProps) {
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
      <path d="M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4ZM156,144a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h48A4,4,0,0,1,156,144Z"/>
    </svg>
  );
}
