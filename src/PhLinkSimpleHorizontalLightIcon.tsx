import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleHorizontalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjJoOTZhNiw2LDAsMCwxLDAsMTJIODBhNiw2LDAsMCwxLDAtMTJabTI0LDQ4SDY0YTQyLDQyLDAsMCwxLDAtODRoNDBhNiw2LDAsMCwwLDAtMTJINjRhNTQsNTQsMCwwLDAsMCwxMDhoNDBhNiw2LDAsMCwwLDAtMTJabTg4LTk2SDE1MmE2LDYsMCwwLDAsMCwxMmg0MGE0Miw0MiwwLDAsMSwwLDg0SDE1MmE2LDYsMCwwLDAsMCwxMmg0MGE1NCw1NCwwLDAsMCwwLTEwOFoiLz48L3N2Zz4=)
 */
export function PhLinkSimpleHorizontalLightIcon(props: PhLinkSimpleHorizontalLightIconProps) {
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
      <path d="M80,122h96a6,6,0,0,1,0,12H80a6,6,0,0,1,0-12Zm24,48H64a42,42,0,0,1,0-84h40a6,6,0,0,0,0-12H64a54,54,0,0,0,0,108h40a6,6,0,0,0,0-12Zm88-96H152a6,6,0,0,0,0,12h40a42,42,0,0,1,0,84H152a6,6,0,0,0,0,12h40a54,54,0,0,0,0-108Z"/>
    </svg>
  );
}
