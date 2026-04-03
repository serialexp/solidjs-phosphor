import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberTwoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMjA4YTQsNCwwLDAsMS00LDRIODhhNCw0LDAsMCwxLTMuMi02LjRsNzEuOTQtOTUuOTJBMzYsMzYsMCwxLDAsOTkuMjUsNjYuMzQsMzYuNjIsMzYuNjIsMCwwLDAsOTUsNzMuNjFhNCw0LDAsMCwxLTcuMzMtMy4yMSw0NC40Miw0NC40MiwwLDAsMSw1LjItOC44Nyw0NCw0NCwwLDAsMSw3MC4yOCw1M0w5NiwyMDRoNzJBNCw0LDAsMCwxLDE3MiwyMDhaIi8+PC9zdmc+)
 */
export function PhNumberTwoThinIcon(props: PhNumberTwoThinIconProps) {
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
      <path d="M172,208a4,4,0,0,1-4,4H88a4,4,0,0,1-3.2-6.4l71.94-95.92A36,36,0,1,0,99.25,66.34,36.62,36.62,0,0,0,95,73.61a4,4,0,0,1-7.33-3.21,44.42,44.42,0,0,1,5.2-8.87,44,44,0,0,1,70.28,53L96,204h72A4,4,0,0,1,172,208Z"/>
    </svg>
  );
}
