import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixVerticalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDIsNjBBMTAsMTAsMCwxLDEsOTIsNTAsMTAsMTAsMCwwLDEsMTAyLDYwWm02MiwxMGExMCwxMCwwLDEsMC0xMC0xMEExMCwxMCwwLDAsMCwxNjQsNzBaTTkyLDExOGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCw5MiwxMThabTcyLDBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTY0LDExOFpNOTIsMTg2YTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDkyLDE4NlptNzIsMGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCwxNjQsMTg2WiIvPjwvc3ZnPg==)
 */
export function PhDotsSixVerticalLightIcon(props: PhDotsSixVerticalLightIconProps) {
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
      <path d="M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"/>
    </svg>
  );
}
