import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemberOfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTM0SDU0LjI2QTc0LjA5LDc0LjA5LDAsMCwwLDEyOCwyMDJoNzJhNiw2LDAsMCwxLDAsMTJIMTI4YTg2LDg2LDAsMCwxLDAtMTcyaDcyYTYsNiwwLDAsMSwwLDEySDEyOGE3NC4wOSw3NC4wOSwwLDAsMC03My43NCw2OEgyMDBhNiw2LDAsMCwxLDAsMTJaIi8+PC9zdmc+)
 */
export function PhMemberOfLightIcon(props: PhMemberOfLightIconProps) {
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
      <path d="M200,134H54.26A74.09,74.09,0,0,0,128,202h72a6,6,0,0,1,0,12H128a86,86,0,0,1,0-172h72a6,6,0,0,1,0,12H128a74.09,74.09,0,0,0-73.74,68H200a6,6,0,0,1,0,12Z"/>
    </svg>
  );
}
