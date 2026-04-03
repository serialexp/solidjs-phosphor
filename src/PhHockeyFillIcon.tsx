import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHockeyFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDkuOSwxMjIuODJsNjgtODBhOCw4LDAsMCwxLDEyLjIsMTAuMzZsLTY4LDgwYTgsOCwwLDEsMS0xMi4yLTEwLjM2Wk0yNDAsMTY4djMyYTE2LDE2LDAsMCwxLTE2LDE2SDE3MS43YTE2LDE2LDAsMCwxLTEyLjE5LTUuNjRMMjUuOSw1My4xOGgwQTgsOCwwLDAsMSwzOC4xLDQyLjgyTDEzMC45LDE1MkgyMjRBMTYsMTYsMCwwLDEsMjQwLDE2OFptLTE2LDBIMjA4djMyaDE2Wk0xMTUuMywxODMuMDZhNCw0LDAsMCwxLDAsNS4xOEw5Ni40OSwyMTAuMzZBMTYsMTYsMCwwLDEsODQuMywyMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWMTY4YTE2LDE2LDAsMCwxLDE2LTE2SDg3LjA1YTQsNCwwLDAsMSwzLDEuNDFaTTQ4LDE2OEgzMnYzMkg0OFoiLz48L3N2Zz4=)
 */
export function PhHockeyFillIcon(props: PhHockeyFillIconProps) {
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
      <path d="M149.9,122.82l68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36ZM240,168v32a16,16,0,0,1-16,16H171.7a16,16,0,0,1-12.19-5.64L25.9,53.18h0A8,8,0,0,1,38.1,42.82L130.9,152H224A16,16,0,0,1,240,168Zm-16,0H208v32h16ZM115.3,183.06a4,4,0,0,1,0,5.18L96.49,210.36A16,16,0,0,1,84.3,216H32a16,16,0,0,1-16-16V168a16,16,0,0,1,16-16H87.05a4,4,0,0,1,3,1.41ZM48,168H32v32H48Z"/>
    </svg>
  );
}
