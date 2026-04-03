import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCirclesThreeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzZhNDAsNDAsMCwxLDAtNDAsNDBBNDAsNDAsMCwwLDAsMTY4LDc2Wm0tNDAsMzJhMzIsMzIsMCwxLDEsMzItMzJBMzIsMzIsMCwwLDEsMTI4LDEwOFptNjAsMjRhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsMTg4LDEzMlptMCw3MmEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSwxODgsMjA0Wk02OCwxMzJhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsNjgsMTMyWm0wLDcyYTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDY4LDIwNFoiLz48L3N2Zz4=)
 */
export function PhCirclesThreeThinIcon(props: PhCirclesThreeThinIconProps) {
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
      <path d="M168,76a40,40,0,1,0-40,40A40,40,0,0,0,168,76Zm-40,32a32,32,0,1,1,32-32A32,32,0,0,1,128,108Zm60,24a40,40,0,1,0,40,40A40,40,0,0,0,188,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,188,204ZM68,132a40,40,0,1,0,40,40A40,40,0,0,0,68,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,68,204Z"/>
    </svg>
  );
}
