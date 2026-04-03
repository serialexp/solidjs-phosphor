import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRadicalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsODB2MjRhNCw0LDAsMCwxLTgsMFY4NEgxMzAuNzdsLTQ3LDEyNS40YTQsNCwwLDAsMS03LjQ5LDBsLTQ4LTEyOGE0LDQsMCwxLDEsNy40OS0yLjgxTDgwLDE5Ni42MWw0NC4yNi0xMThBNCw0LDAsMCwxLDEyOCw3NkgyNDBBNCw0LDAsMCwxLDI0NCw4MFoiLz48L3N2Zz4=)
 */
export function PhRadicalThinIcon(props: PhRadicalThinIconProps) {
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
      <path d="M244,80v24a4,4,0,0,1-8,0V84H130.77l-47,125.4a4,4,0,0,1-7.49,0l-48-128a4,4,0,1,1,7.49-2.81L80,196.61l44.26-118A4,4,0,0,1,128,76H240A4,4,0,0,1,244,80Z"/>
    </svg>
  );
}
