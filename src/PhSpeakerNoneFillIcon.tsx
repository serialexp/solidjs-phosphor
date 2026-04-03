import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerNoneFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02NCw4NHY4OGE0LDQsMCwwLDEtNCw0SDMyYTE2LDE2LDAsMCwxLTE2LTE2Vjk2QTE2LDE2LDAsMCwxLDMyLDgwSDYwQTQsNCwwLDAsMSw2NCw4NFptOTMuMTUtNTguMTVhOCw4LDAsMCwwLTEwLS4xNmwtNjUuNTcsNTFBNCw0LDAsMCwwLDgwLDc5Ljg0djk2LjMyYTQsNCwwLDAsMCwxLjU1LDMuMTVsNjUuNTcsNTFhOCw4LDAsMCwwLDksLjU2LDguMjksOC4yOSwwLDAsMCwzLjkxLTcuMThWMzIuMjVBOC4yNyw4LjI3LDAsMCwwLDE1Ny4xMiwyNS44NVoiLz48L3N2Zz4=)
 */
export function PhSpeakerNoneFillIcon(props: PhSpeakerNoneFillIconProps) {
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
      <path d="M64,84v88a4,4,0,0,1-4,4H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H60A4,4,0,0,1,64,84Zm93.15-58.15a8,8,0,0,0-10-.16l-65.57,51A4,4,0,0,0,80,79.84v96.32a4,4,0,0,0,1.55,3.15l65.57,51a8,8,0,0,0,9,.56,8.29,8.29,0,0,0,3.91-7.18V32.25A8.27,8.27,0,0,0,157.12,25.85Z"/>
    </svg>
  );
}
