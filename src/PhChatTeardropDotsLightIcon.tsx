import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatTeardropDotsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDIsMTI4YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE0MiwxMjhaTTg4LDExOGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCw4OCwxMThabTg4LDBhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTc2LDExOFptNTQsNmE5OC4xMSw5OC4xMSwwLDAsMS05OCw5OEg0OGExNCwxNCwwLDAsMS0xNC0xNFYxMjRhOTgsOTgsMCwwLDEsMTk2LDBabS0xMiwwYTg2LDg2LDAsMCwwLTE3Miwwdjg0YTIsMiwwLDAsMCwyLDJoODRBODYuMSw4Ni4xLDAsMCwwLDIxOCwxMjRaIi8+PC9zdmc+)
 */
export function PhChatTeardropDotsLightIcon(props: PhChatTeardropDotsLightIconProps) {
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
      <path d="M142,128a10,10,0,1,1-10-10A10,10,0,0,1,142,128ZM88,118a10,10,0,1,0,10,10A10,10,0,0,0,88,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,176,118Zm54,6a98.11,98.11,0,0,1-98,98H48a14,14,0,0,1-14-14V124a98,98,0,0,1,196,0Zm-12,0a86,86,0,0,0-172,0v84a2,2,0,0,0,2,2h84A86.1,86.1,0,0,0,218,124Z"/>
    </svg>
  );
}
