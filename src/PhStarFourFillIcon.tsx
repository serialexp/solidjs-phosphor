import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStarFourFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4YTE1Ljc5LDE1Ljc5LDAsMCwxLTEwLjUsMTVsLTYzLjQ0LDIzLjA3TDE0MywyMjkuNWExNiwxNiwwLDAsMS0zMCwwTDg5Ljk0LDE2Ni4wNiwyNi41LDE0M2ExNiwxNiwwLDAsMSwwLTMwTDg5Ljk0LDg5Ljk0LDExMywyNi41YTE2LDE2LDAsMCwxLDMwLDBsMjMuMDcsNjMuNDRMMjI5LjUsMTEzQTE1Ljc5LDE1Ljc5LDAsMCwxLDI0MCwxMjhaIi8+PC9zdmc+)
 */
export function PhStarFourFillIcon(props: PhStarFourFillIconProps) {
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
      <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z"/>
    </svg>
  );
}
