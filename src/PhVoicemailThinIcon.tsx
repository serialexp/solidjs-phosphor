import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVoicemailThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzZhNTIsNTIsMCwwLDAtMjcuNjYsOTZIODMuNjZBNTIsNTIsMCwxLDAsNTYsMTgwSDIwMGE1Miw1MiwwLDAsMCwwLTEwNFpNMTIsMTI4YTQ0LDQ0LDAsMSwxLDQ0LDQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDEyLDEyOFptMTg4LDQ0YTQ0LDQ0LDAsMSwxLDQ0LTQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDIwMCwxNzJaIi8+PC9zdmc+)
 */
export function PhVoicemailThinIcon(props: PhVoicemailThinIconProps) {
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
      <path d="M200,76a52,52,0,0,0-27.66,96H83.66A52,52,0,1,0,56,180H200a52,52,0,0,0,0-104ZM12,128a44,44,0,1,1,44,44A44.05,44.05,0,0,1,12,128Zm188,44a44,44,0,1,1,44-44A44.05,44.05,0,0,1,200,172Z"/>
    </svg>
  );
}
