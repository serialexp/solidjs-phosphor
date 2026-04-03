import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEqualizerThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Niw5NmE0LDQsMCwwLDEtNCw0SDI0YTQsNCwwLDAsMSwwLThINzJBNCw0LDAsMCwxLDc2LDk2Wm0tNCwyOEgyNGE0LDQsMCwwLDAsMCw4SDcyYTQsNCwwLDAsMCwwLThabTAsMzJIMjRhNCw0LDAsMCwwLDAsOEg3MmE0LDQsMCwwLDAsMC04Wm0wLDMySDI0YTQsNCwwLDAsMCwwLDhINzJhNCw0LDAsMCwwLDAtOFptODAtNjRIMTA0YTQsNCwwLDAsMCwwLDhoNDhhNCw0LDAsMCwwLDAtOFptMCwzMkgxMDRhNCw0LDAsMCwwLDAsOGg0OGE0LDQsMCwwLDAsMC04Wm0wLDMySDEwNGE0LDQsMCwwLDAsMCw4aDQ4YTQsNCwwLDAsMCwwLThabTgwLTk2SDE4NGE0LDQsMCwwLDAsMCw4aDQ4YTQsNCwwLDAsMCwwLThaTTE4NCw2OGg0OGE0LDQsMCwwLDAsMC04SDE4NGE0LDQsMCwwLDAsMCw4Wm00OCw1NkgxODRhNCw0LDAsMCwwLDAsOGg0OGE0LDQsMCwwLDAsMC04Wm0wLDMySDE4NGE0LDQsMCwwLDAsMCw4aDQ4YTQsNCwwLDAsMCwwLThabTAsMzJIMTg0YTQsNCwwLDAsMCwwLDhoNDhhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 */
export function PhEqualizerThinIcon(props: PhEqualizerThinIconProps) {
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
      <path d="M76,96a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H72A4,4,0,0,1,76,96Zm-4,28H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm80-64H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm80-96H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM184,68h48a4,4,0,0,0,0-8H184a4,4,0,0,0,0,8Zm48,56H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
