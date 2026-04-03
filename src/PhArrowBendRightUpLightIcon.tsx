import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendRightUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsODQuMjRhNiw2LDAsMCwxLTguNDgsMEwxNTgsNDYuNDlWMTI4QTEwMi4xMiwxMDIuMTIsMCwwLDEsNTYsMjMwYTYsNiwwLDAsMSwwLTEyLDkwLjEsOTAuMSwwLDAsMCw5MC05MFY0Ni40OUwxMDguMjQsODQuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw0OC00OGE2LDYsMCwwLDEsOC40OCwwbDQ4LDQ4QTYsNiwwLDAsMSwyMDQuMjQsODQuMjRaIi8+PC9zdmc+)
 */
export function PhArrowBendRightUpLightIcon(props: PhArrowBendRightUpLightIconProps) {
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
      <path d="M204.24,84.24a6,6,0,0,1-8.48,0L158,46.49V128A102.12,102.12,0,0,1,56,230a6,6,0,0,1,0-12,90.1,90.1,0,0,0,90-90V46.49L108.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,204.24,84.24Z"/>
    </svg>
  );
}
