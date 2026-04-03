import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitForkLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNjRhMzAsMzAsMCwxLDAtMzYsMjkuNFYxMTJhMTAsMTAsMCwwLDEtMTAsMTBIODBhMTAsMTAsMCwwLDEtMTAtMTBWOTMuNGEzMCwzMCwwLDEsMC0xMiwwVjExMmEyMiwyMiwwLDAsMCwyMiwyMmg0MnYyOC42YTMwLDMwLDAsMSwwLDEyLDBWMTM0aDQyYTIyLDIyLDAsMCwwLDIyLTIyVjkzLjRBMzAuMDUsMzAuMDUsMCwwLDAsMjIyLDY0Wk00Niw2NEExOCwxOCwwLDEsMSw2NCw4MiwxOCwxOCwwLDAsMSw0Niw2NFpNMTQ2LDE5MmExOCwxOCwwLDEsMS0xOC0xOEExOCwxOCwwLDAsMSwxNDYsMTkyWk0xOTIsODJhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsMTkyLDgyWiIvPjwvc3ZnPg==)
 */
export function PhGitForkLightIcon(props: PhGitForkLightIconProps) {
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
      <path d="M222,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V93.4a30,30,0,1,0-12,0V112a22,22,0,0,0,22,22h42v28.6a30,30,0,1,0,12,0V134h42a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,222,64ZM46,64A18,18,0,1,1,64,82,18,18,0,0,1,46,64ZM146,192a18,18,0,1,1-18-18A18,18,0,0,1,146,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z"/>
    </svg>
  );
}
