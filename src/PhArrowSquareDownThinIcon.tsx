import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wm0tNDkuMTctNzQuODNhNCw0LDAsMCwxLDAsNS42NmwtMzIsMzJhNCw0LDAsMCwxLTUuNjYsMGwtMzItMzJhNCw0LDAsMCwxLDUuNjYtNS42NkwxMjQsMTU4LjM0Vjg4YTQsNCwwLDAsMSw4LDB2NzAuMzRsMjUuMTctMjUuMTdBNCw0LDAsMCwxLDE2Mi44MywxMzMuMTdaIi8+PC9zdmc+)
 */
export function PhArrowSquareDownThinIcon(props: PhArrowSquareDownThinIconProps) {
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
      <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-49.17-74.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"/>
    </svg>
  );
}
