import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTreasureChestBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzZINzJBNjAuMDcsNjAuMDcsMCwwLDAsMTIsOTZ2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjI0YTIwLDIwLDAsMCwwLDIwLTIwVjk2QTYwLjA3LDYwLjA3LDAsMCwwLDE4NCwzNlptMzYsNjB2NEgxOTJWNjAuOTFBMzYuMDUsMzYuMDUsMCwwLDEsMjIwLDk2Wm0tOTIsNjBhMTIsMTIsMCwwLDAsMTItMTJWMTI0aDI4djY0SDg4VjEyNGgyOHYyMEExMiwxMiwwLDAsMCwxMjgsMTU2Wm0xMi01NlY5NmExMiwxMiwwLDAsMC0yNCwwdjRIODhWNjBoODB2NDBaTTY0LDYwLjkxVjEwMEgzNlY5NkEzNi4wNSwzNi4wNSwwLDAsMSw2NCw2MC45MVpNMzYsMTI0SDY0djY0SDM2Wm0xNTYsNjRWMTI0aDI4djY0WiIvPjwvc3ZnPg==)
 */
export function PhTreasureChestBoldIcon(props: PhTreasureChestBoldIconProps) {
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
      <path d="M184,36H72A60.07,60.07,0,0,0,12,96v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V96A60.07,60.07,0,0,0,184,36Zm36,60v4H192V60.91A36.05,36.05,0,0,1,220,96Zm-92,60a12,12,0,0,0,12-12V124h28v64H88V124h28v20A12,12,0,0,0,128,156Zm12-56V96a12,12,0,0,0-24,0v4H88V60h80v40ZM64,60.91V100H36V96A36.05,36.05,0,0,1,64,60.91ZM36,124H64v64H36Zm156,64V124h28v64Z"/>
    </svg>
  );
}
