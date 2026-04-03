import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSixThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTA4YTUxLjY2LDUxLjY2LDAsMCwwLTI0Ljc0LDYuMjdMMTM5LjQ5LDUwYTQsNCwwLDAsMC03LTMuOTJMODMsMTM0LjA1QTUyLDUyLDAsMSwwLDEyOCwxMDhabTAsOTZhNDQsNDQsMCwxLDEsNDQtNDRBNDQuMDUsNDQuMDUsMCwwLDEsMTI4LDIwNFoiLz48L3N2Zz4=)
 */
export function PhNumberSixThinIcon(props: PhNumberSixThinIconProps) {
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
      <path d="M128,108a51.66,51.66,0,0,0-24.74,6.27L139.49,50a4,4,0,0,0-7-3.92L83,134.05A52,52,0,1,0,128,108Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,204Z"/>
    </svg>
  );
}
