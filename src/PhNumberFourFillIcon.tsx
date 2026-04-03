import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFourFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQuNjUsMTQ0LDE0NCw5NC44MVYxNDRaTTIxNiw0MFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDBBMTYsMTYsMCwwLDEsNTYsMjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw0MFpNMTg0LDE1MmE4LDgsMCwwLDAtOC04SDE2MFY3MmE4LDgsMCwwLDAtMTQuMjUtNWwtNjQsODBBOCw4LDAsMCwwLDg4LDE2MGg1NnYyNGE4LDgsMCwwLDAsMTYsMFYxNjBoMTZBOCw4LDAsMCwwLDE4NCwxNTJaIi8+PC9zdmc+)
 */
export function PhNumberFourFillIcon(props: PhNumberFourFillIconProps) {
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
      <path d="M104.65,144,144,94.81V144ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM184,152a8,8,0,0,0-8-8H160V72a8,8,0,0,0-14.25-5l-64,80A8,8,0,0,0,88,160h56v24a8,8,0,0,0,16,0V160h16A8,8,0,0,0,184,152Z"/>
    </svg>
  );
}
