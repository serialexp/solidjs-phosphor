import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseLineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEySDIyMFYxMjYuMzRsOS4xNyw5LjE3YTQsNCwwLDEsMCw1LjY2LTUuNjZMMTM2LjQ5LDMxLjUxYTEyLDEyLDAsMCwwLTE3LDBMMjEuMTcsMTI5Ljg1YTQsNCwwLDEsMCw1LjY2LDUuNjZMMzYsMTI2LjM0VjIxMkgxNmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04Wk00NCwxMTguMzRsODEuMTctODEuMTdhNCw0LDAsMCwxLDUuNjYsMEwyMTIsMTE4LjM0VjIxMkgxNTZWMTUyYTQsNCwwLDAsMC00LTRIMTA0YTQsNCwwLDAsMC00LDR2NjBINDRaTTE0OCwyMTJIMTA4VjE1Nmg0MFoiLz48L3N2Zz4=)
 */
export function PhHouseLineThinIcon(props: PhHouseLineThinIconProps) {
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
      <path d="M240,212H220V126.34l9.17,9.17a4,4,0,1,0,5.66-5.66L136.49,31.51a12,12,0,0,0-17,0L21.17,129.85a4,4,0,1,0,5.66,5.66L36,126.34V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM44,118.34l81.17-81.17a4,4,0,0,1,5.66,0L212,118.34V212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44ZM148,212H108V156h40Z"/>
    </svg>
  );
}
