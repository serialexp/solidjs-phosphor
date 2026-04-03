import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKeyReturnThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTA0djMyYTQsNCwwLDAsMS00LDRIODkuNjZsMTcuMTcsMTcuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtMjQtMjRhNCw0LDAsMCwxLDAtNS42NmwyNC0yNGE0LDQsMCwwLDEsNS42Niw1LjY2TDg5LjY2LDEzMkgxNzJWMTA0YTQsNCwwLDAsMSw4LDBabTQ4LTQ4VjIwMGExMiwxMiwwLDAsMS0xMiwxMkg0MGExMiwxMiwwLDAsMS0xMi0xMlY1NkExMiwxMiwwLDAsMSw0MCw0NEgyMTZBMTIsMTIsMCwwLDEsMjI4LDU2Wm0tOCwwYTQsNCwwLDAsMC00LTRINDBhNCw0LDAsMCwwLTQsNFYyMDBhNCw0LDAsMCwwLDQsNEgyMTZhNCw0LDAsMCwwLDQtNFoiLz48L3N2Zz4=)
 */
export function PhKeyReturnThinIcon(props: PhKeyReturnThinIconProps) {
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
      <path d="M180,104v32a4,4,0,0,1-4,4H89.66l17.17,17.17a4,4,0,0,1-5.66,5.66l-24-24a4,4,0,0,1,0-5.66l24-24a4,4,0,0,1,5.66,5.66L89.66,132H172V104a4,4,0,0,1,8,0Zm48-48V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
