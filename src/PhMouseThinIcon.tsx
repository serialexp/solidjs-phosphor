import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjBIMTEyQTYwLjA3LDYwLjA3LDAsMCwwLDUyLDgwdjk2YTYwLjA3LDYwLjA3LDAsMCwwLDYwLDYwaDMyYTYwLjA3LDYwLjA3LDAsMCwwLDYwLTYwVjgwQTYwLjA3LDYwLjA3LDAsMCwwLDE0NCwyMFptNTIsNjB2MjhIMTMyVjI4aDEyQTUyLjA2LDUyLjA2LDAsMCwxLDE5Niw4MFpNMTEyLDI4aDEydjgwSDYwVjgwQTUyLjA2LDUyLjA2LDAsMCwxLDExMiwyOFptMzIsMjAwSDExMmE1Mi4wNiw1Mi4wNiwwLDAsMS01Mi01MlYxMTZIMTk2djYwQTUyLjA2LDUyLjA2LDAsMCwxLDE0NCwyMjhaIi8+PC9zdmc+)
 */
export function PhMouseThinIcon(props: PhMouseThinIconProps) {
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
      <path d="M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z"/>
    </svg>
  );
}
