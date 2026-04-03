import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAddressBookTabsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabS0xOCw2OGgyMHY1MkgxOTBabTIwLTU0VjkwSDE5MFY0NmgxOEEyLDIsMCwwLDEsMjEwLDQ4Wk00NiwyMDhWNDhhMiwyLDAsMCwxLDItMkgxNzhWMjEwSDQ4QTIsMiwwLDAsMSw0NiwyMDhabTE2MiwySDE5MFYxNjZoMjB2NDJBMiwyLDAsMCwxLDIwOCwyMTBabS01OC4xOS00My40OUEzOCwzOCwwLDAsMCwxMzEuMjMsMTQzYTMwLDMwLDAsMSwwLTM4LjQ1LDBBMzgsMzgsMCwwLDAsNzQuMTksMTY2LjVhNiw2LDAsMCwwLDExLjYyLDNDODguNjcsMTU4LjM4LDk5LjkzLDE1MCwxMTIsMTUwczIzLjM0LDguMzgsMjYuMTksMTkuNDlhNiw2LDAsMCwwLDExLjYyLTNaTTk0LDEyMGExOCwxOCwwLDEsMSwxOCwxOEExOCwxOCwwLDAsMSw5NCwxMjBaIi8+PC9zdmc+)
 */
export function PhAddressBookTabsLightIcon(props: PhAddressBookTabsLightIconProps) {
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
      <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-18,68h20v52H190Zm20-54V90H190V46h18A2,2,0,0,1,210,48ZM46,208V48a2,2,0,0,1,2-2H178V210H48A2,2,0,0,1,46,208Zm162,2H190V166h20v42A2,2,0,0,1,208,210Zm-58.19-43.49A38,38,0,0,0,131.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,74.19,166.5a6,6,0,0,0,11.62,3C88.67,158.38,99.93,150,112,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM94,120a18,18,0,1,1,18,18A18,18,0,0,1,94,120Z"/>
    </svg>
  );
}
