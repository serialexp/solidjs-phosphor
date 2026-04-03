import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJINDBBMTIsMTIsMCwwLDAsMjgsNjRWMjI0YTExLjg5LDExLjg5LDAsMCwwLDYuOTMsMTAuODhBMTIuMTcsMTIuMTcsMCwwLDAsNDAsMjM2YTExLjg5LDExLjg5LDAsMCwwLDcuNjktMi44M2wwLDBMODEuNDksMjA0SDIxNmExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMTYsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRIODBhNCw0LDAsMCwwLTIuNjIsMUw0Mi41NiwyMjcuMDZBNCw0LDAsMCwxLDM2LDIyNFY2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhChatThinIcon(props: PhChatThinIconProps) {
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
      <path d="M216,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.17,12.17,0,0,0,40,236a11.89,11.89,0,0,0,7.69-2.83l0,0L81.49,204H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52Zm4,140a4,4,0,0,1-4,4H80a4,4,0,0,0-2.62,1L42.56,227.06A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
