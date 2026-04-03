import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBugDroidLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODksNTEuNDdsMTUuMjItMTUuMjNhNiw2LDAsMSwwLTguNDgtOC40OEwxODAsNDMuNTRBODUuNzYsODUuNzYsMCwwLDAsNzYsNDMuNTRMNjAuMjQsMjcuNzZhNiw2LDAsMCwwLTguNDgsOC40OEw2Nyw1MS40N0E4NS43LDg1LjcsMCwwLDAsNDIsMTEydjQwYTg2LDg2LDAsMCwwLDE3MiwwVjExMkE4NS43LDg1LjcsMCwwLDAsMTg5LDUxLjQ3Wk0xMjgsMzhhNzQuMDksNzQuMDksMCwwLDEsNzQsNzR2MTBINTRWMTEyQTc0LjA5LDc0LjA5LDAsMCwxLDEyOCwzOFptMCwxODhhNzQuMDksNzQuMDksMCwwLDEtNzQtNzRWMTM0SDIwMnYxOEE3NC4wOSw3NC4wOSwwLDAsMSwxMjgsMjI2Wk0xNDYsOTJhMTAsMTAsMCwxLDEsMTAsMTBBMTAsMTAsMCwwLDEsMTQ2LDkyWk05MCw5MmExMCwxMCwwLDEsMSwxMCwxMEExMCwxMCwwLDAsMSw5MCw5MloiLz48L3N2Zz4=)
 */
export function PhBugDroidLightIcon(props: PhBugDroidLightIconProps) {
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
      <path d="M189,51.47l15.22-15.23a6,6,0,1,0-8.48-8.48L180,43.54A85.76,85.76,0,0,0,76,43.54L60.24,27.76a6,6,0,0,0-8.48,8.48L67,51.47A85.7,85.7,0,0,0,42,112v40a86,86,0,0,0,172,0V112A85.7,85.7,0,0,0,189,51.47ZM128,38a74.09,74.09,0,0,1,74,74v10H54V112A74.09,74.09,0,0,1,128,38Zm0,188a74.09,74.09,0,0,1-74-74V134H202v18A74.09,74.09,0,0,1,128,226ZM146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM90,92a10,10,0,1,1,10,10A10,10,0,0,1,90,92Z"/>
    </svg>
  );
}
