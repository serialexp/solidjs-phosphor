import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterVerticalSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTIySDE3NFY0OGExNCwxNCwwLDAsMC0xNC0xNEg5NkExNCwxNCwwLDAsMCw4Miw0OHY3NEg0OGE2LDYsMCwwLDAsMCwxMkg4MnY3NGExNCwxNCwwLDAsMCwxNCwxNGg2NGExNCwxNCwwLDAsMCwxNC0xNFYxMzRoMzRhNiw2LDAsMCwwLDAtMTJabS00Niw4NmEyLDIsMCwwLDEtMiwySDk2YTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMmg2NGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 */
export function PhAlignCenterVerticalSimpleLightIcon(props: PhAlignCenterVerticalSimpleLightIconProps) {
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
      <path d="M208,122H174V48a14,14,0,0,0-14-14H96A14,14,0,0,0,82,48v74H48a6,6,0,0,0,0,12H82v74a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V134h34a6,6,0,0,0,0-12Zm-46,86a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
