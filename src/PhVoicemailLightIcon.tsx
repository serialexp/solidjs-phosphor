import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVoicemailLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzRhNTQsNTQsMCwwLDAtMzMuODksOTZIODkuODlBNTQsNTQsMCwxLDAsNTYsMTgySDIwMGE1NCw1NCwwLDAsMCwwLTEwOFpNMTQsMTI4YTQyLDQyLDAsMSwxLDQyLDQyQTQyLDQyLDAsMCwxLDE0LDEyOFptMTg2LDQyYTQyLDQyLDAsMSwxLDQyLTQyQTQyLDQyLDAsMCwxLDIwMCwxNzBaIi8+PC9zdmc+)
 */
export function PhVoicemailLightIcon(props: PhVoicemailLightIconProps) {
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
      <path d="M200,74a54,54,0,0,0-33.89,96H89.89A54,54,0,1,0,56,182H200a54,54,0,0,0,0-108ZM14,128a42,42,0,1,1,42,42A42,42,0,0,1,14,128Zm186,42a42,42,0,1,1,42-42A42,42,0,0,1,200,170Z"/>
    </svg>
  );
}
