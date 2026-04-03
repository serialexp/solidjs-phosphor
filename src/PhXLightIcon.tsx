import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhXLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsMTk1Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhMMTI4LDEzNi40OSw2MC4yNCwyMDQuMjRhNiw2LDAsMCwxLTguNDgtOC40OEwxMTkuNTEsMTI4LDUxLjc2LDYwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTI4LDExOS41MWw2Ny43Ni02Ny43NWE2LDYsMCwwLDEsOC40OCw4LjQ4TDEzNi40OSwxMjhaIi8+PC9zdmc+)
 */
export function PhXLightIcon(props: PhXLightIconProps) {
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
      <path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"/>
    </svg>
  );
}
