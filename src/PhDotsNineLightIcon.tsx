import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsNineLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MCw2MEExMCwxMCwwLDEsMSw2MCw1MCwxMCwxMCwwLDAsMSw3MCw2MFptNTgtMTBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTI4LDUwWm02OCwyMGExMCwxMCwwLDEsMC0xMC0xMEExMCwxMCwwLDAsMCwxOTYsNzBaTTYwLDExOGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCw2MCwxMThabTY4LDBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTI4LDExOFptNjgsMGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCwxOTYsMTE4Wk02MCwxODZhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsNjAsMTg2Wm02OCwwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDEyOCwxODZabTY4LDBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTk2LDE4NloiLz48L3N2Zz4=)
 */
export function PhDotsNineLightIcon(props: PhDotsNineLightIconProps) {
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
      <path d="M70,60A10,10,0,1,1,60,50,10,10,0,0,1,70,60Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,50Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,70ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,186Z"/>
    </svg>
  );
}
