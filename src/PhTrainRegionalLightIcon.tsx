import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrainRegionalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNzksMTE4LjQyLDE5OS40LDM2LjMyQTE0LDE0LDAsMCwwLDE4NS44OSwyNkg3MC4xMUExNCwxNCwwLDAsMCw1Ni42LDM2LjMybC0yMi4zOSw4Mi4xYTYsNiwwLDAsMCwwLDMuMTZsMjIuMzksODIuMUExNCwxNCwwLDAsMCw3MC4xMSwyMTRIODRMNjcuMiwyMzYuNGE2LDYsMCwxLDAsOS42LDcuMkw5OSwyMTRoNThsMjIuMiwyOS42YTYsNiwwLDAsMCw5LjYtNy4yTDE3MiwyMTRoMTMuODlhMTQsMTQsMCwwLDAsMTMuNTEtMTAuMzJsMjIuMzktODIuMUE2LDYsMCwwLDAsMjIxLjc5LDExOC40MlpNNjguMTgsMzkuNDdBMiwyLDAsMCwxLDcwLjExLDM4SDE4NS44OWEyLDIsMCwwLDEsMS45MywxLjQ3bDIwLjY3LDc1LjhMMTI4LDEyOS45LDQ3LjUxLDExNS4yN1ptMCwxNjEuMDZMNDguMjksMTI3LjYxLDEyMiwxNDF2NjFINzAuMTFBMiwyLDAsMCwxLDY4LjE4LDIwMC41M1ptMTE5LjY0LDBhMiwyLDAsMCwxLTEuOTMsMS40N0gxMzRWMTQxbDczLjcxLTEzLjRaTTkwLDg4YTYsNiwwLDAsMSw2LTZoNjRhNiw2LDAsMCwxLDAsMTJIOTZBNiw2LDAsMCwxLDkwLDg4WiIvPjwvc3ZnPg==)
 */
export function PhTrainRegionalLightIcon(props: PhTrainRegionalLightIconProps) {
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
      <path d="M221.79,118.42,199.4,36.32A14,14,0,0,0,185.89,26H70.11A14,14,0,0,0,56.6,36.32l-22.39,82.1a6,6,0,0,0,0,3.16l22.39,82.1A14,14,0,0,0,70.11,214H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h13.89a14,14,0,0,0,13.51-10.32l22.39-82.1A6,6,0,0,0,221.79,118.42ZM68.18,39.47A2,2,0,0,1,70.11,38H185.89a2,2,0,0,1,1.93,1.47l20.67,75.8L128,129.9,47.51,115.27Zm0,161.06L48.29,127.61,122,141v61H70.11A2,2,0,0,1,68.18,200.53Zm119.64,0a2,2,0,0,1-1.93,1.47H134V141l73.71-13.4ZM90,88a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,88Z"/>
    </svg>
  );
}
