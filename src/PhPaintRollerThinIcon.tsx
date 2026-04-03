import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaintRollerThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTJIMjEyVjY0YTEyLDEyLDAsMCwwLTEyLTEySDQ4QTEyLDEyLDAsMCwwLDM2LDY0VjkySDE2YTQsNCwwLDAsMCwwLDhIMzZ2MjhhMTIsMTIsMCwwLDAsMTIsMTJIMjAwYTEyLDEyLDAsMCwwLDEyLTEyVjEwMGgyMGE0LDQsMCwwLDEsNCw0djUwYTQsNCwwLDAsMS0yLjksMy44NEwxMzIuNywxODYuNUExMiwxMiwwLDAsMCwxMjQsMTk4djM0YTQsNCwwLDAsMCw4LDBWMTk4YTQsNCwwLDAsMSwyLjktMy44NEwyMzUuMywxNjUuNUExMiwxMiwwLDAsMCwyNDQsMTU0VjEwNEExMiwxMiwwLDAsMCwyMzIsOTJabS0yOCwzNmE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWNjRhNCw0LDAsMCwxLDQtNEgyMDBhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 */
export function PhPaintRollerThinIcon(props: PhPaintRollerThinIconProps) {
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
      <path d="M232,92H212V64a12,12,0,0,0-12-12H48A12,12,0,0,0,36,64V92H16a4,4,0,0,0,0,8H36v28a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V100h20a4,4,0,0,1,4,4v50a4,4,0,0,1-2.9,3.84L132.7,186.5A12,12,0,0,0,124,198v34a4,4,0,0,0,8,0V198a4,4,0,0,1,2.9-3.84L235.3,165.5A12,12,0,0,0,244,154V104A12,12,0,0,0,232,92Zm-28,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
