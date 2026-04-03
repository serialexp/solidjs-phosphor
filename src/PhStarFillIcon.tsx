import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStarFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuMjksMTE0Ljg1bC00NSwzOC44M0wyMDMsMjExLjc1YTE2LjQsMTYuNCwwLDAsMS0yNC41LDE3LjgyTDEyOCwxOTguNDksNzcuNDcsMjI5LjU3QTE2LjQsMTYuNCwwLDAsMSw1MywyMTEuNzVsMTMuNzYtNTguMDctNDUtMzguODNBMTYuNDYsMTYuNDYsMCwwLDEsMzEuMDgsODZsNTktNC43NiwyMi43Ni01NS4wOGExNi4zNiwxNi4zNiwwLDAsMSwzMC4yNywwbDIyLjc1LDU1LjA4LDU5LDQuNzZhMTYuNDYsMTYuNDYsMCwwLDEsOS4zNywyOC44NloiLz48L3N2Zz4=)
 */
export function PhStarFillIcon(props: PhStarFillIconProps) {
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
      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/>
    </svg>
  );
}
