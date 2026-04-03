import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodeSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MC42Niw2NywyMiwxMjhsNjguNjQsNjFhNCw0LDAsMCwxLTUuMzIsNmwtNzItNjRhNCw0LDAsMCwxLDAtNmw3Mi02NGE0LDQsMCwxLDEsNS4zMiw2Wm0xNTIsNTgtNzItNjRhNCw0LDAsMSwwLTUuMzIsNkwyMzQsMTI4bC02OC42NCw2MWE0LDQsMCwwLDAsNS4zMiw2bDcyLTY0YTQsNCwwLDAsMCwwLTZaIi8+PC9zdmc+)
 */
export function PhCodeSimpleThinIcon(props: PhCodeSimpleThinIconProps) {
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
      <path d="M90.66,67,22,128l68.64,61a4,4,0,0,1-5.32,6l-72-64a4,4,0,0,1,0-6l72-64a4,4,0,1,1,5.32,6Zm152,58-72-64a4,4,0,1,0-5.32,6L234,128l-68.64,61a4,4,0,0,0,5.32,6l72-64a4,4,0,0,0,0-6Z"/>
    </svg>
  );
}
