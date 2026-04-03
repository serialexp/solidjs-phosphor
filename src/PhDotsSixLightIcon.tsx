import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MCw5MkExMCwxMCwwLDEsMSw2MCw4MiwxMCwxMCwwLDAsMSw3MCw5MlptNTgtMTBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTI4LDgyWm02OCwyMGExMCwxMCwwLDEsMC0xMC0xMEExMCwxMCwwLDAsMCwxOTYsMTAyWk02MCwxNTRhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsNjAsMTU0Wm02OCwwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDEyOCwxNTRabTY4LDBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTk2LDE1NFoiLz48L3N2Zz4=)
 */
export function PhDotsSixLightIcon(props: PhDotsSixLightIconProps) {
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
      <path d="M70,92A10,10,0,1,1,60,82,10,10,0,0,1,70,92Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,82Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,102ZM60,154a10,10,0,1,0,10,10A10,10,0,0,0,60,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,154Z"/>
    </svg>
  );
}
