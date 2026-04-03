import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSixLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTA2YTUzLjc0LDUzLjc0LDAsMCwwLTE5Ljk0LDMuODNMMTQxLjIzLDUxYTYsNiwwLDEsMC0xMC40Ni01Ljg5bC00OS41NCw4OEE1NCw1NCwwLDEsMCwxMjgsMTA2Wm0wLDk2YTQyLDQyLDAsMSwxLDQyLTQyQTQyLDQyLDAsMCwxLDEyOCwyMDJaIi8+PC9zdmc+)
 */
export function PhNumberSixLightIcon(props: PhNumberSixLightIconProps) {
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
      <path d="M128,106a53.74,53.74,0,0,0-19.94,3.83L141.23,51a6,6,0,1,0-10.46-5.89l-49.54,88A54,54,0,1,0,128,106Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,202Z"/>
    </svg>
  );
}
