import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFlowArrowThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDIuODMsNzcuMTdsLTMyLTMyYTQsNCwwLDAsMC01LjY2LDUuNjZMMjMwLjM0LDc2SDIwOGMtNDYuNjcsMC01Ny44NCwyNi44MS02Ny42OSw1MC40Ni05LjQ2LDIyLjY5LTE4LjQsNDQuMTYtNTYuNTUsNDUuNDhhMzYsMzYsMCwxLDAsMCw4YzQzLjQ5LTEuNDIsNTQuMzMtMjcuMzksNjMuOTEtNTAuMzlDMTU3LjQ1LDEwNi4xMiwxNjYuNjcsODQsMjA4LDg0aDIyLjM0bC0yNS4xNywyNS4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDMyLTMyQTQsNCwwLDAsMCwyNDIuODMsNzcuMTdaTTQ4LDIwNGEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSw0OCwyMDRaIi8+PC9zdmc+)
 */
export function PhFlowArrowThinIcon(props: PhFlowArrowThinIconProps) {
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
      <path d="M242.83,77.17l-32-32a4,4,0,0,0-5.66,5.66L230.34,76H208c-46.67,0-57.84,26.81-67.69,50.46-9.46,22.69-18.4,44.16-56.55,45.48a36,36,0,1,0,0,8c43.49-1.42,54.33-27.39,63.91-50.39C157.45,106.12,166.67,84,208,84h22.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,77.17ZM48,204a28,28,0,1,1,28-28A28,28,0,0,1,48,204Z"/>
    </svg>
  );
}
