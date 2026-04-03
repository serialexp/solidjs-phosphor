import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVinylRecordLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMC0xNDhhNTguMDcsNTguMDcsMCwwLDAtNTgsNTgsNiw2LDAsMCwxLTEyLDAsNzAuMDgsNzAuMDgsMCwwLDEsNzAtNzAsNiw2LDAsMCwxLDAsMTJabTcwLDU4YTcwLjA4LDcwLjA4LDAsMCwxLTcwLDcwLDYsNiwwLDAsMSwwLTEyLDU4LjA3LDU4LjA3LDAsMCwwLDU4LTU4LDYsNiwwLDAsMSwxMiwwWm0tNDAsMGEzMCwzMCwwLDEsMC0zMCwzMEEzMCwzMCwwLDAsMCwxNTgsMTI4Wm0tNDgsMGExOCwxOCwwLDEsMSwxOCwxOEExOCwxOCwwLDAsMSwxMTAsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhVinylRecordLightIcon(props: PhVinylRecordLightIconProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm0-148a58.07,58.07,0,0,0-58,58,6,6,0,0,1-12,0,70.08,70.08,0,0,1,70-70,6,6,0,0,1,0,12Zm70,58a70.08,70.08,0,0,1-70,70,6,6,0,0,1,0-12,58.07,58.07,0,0,0,58-58,6,6,0,0,1,12,0Zm-40,0a30,30,0,1,0-30,30A30,30,0,0,0,158,128Zm-48,0a18,18,0,1,1,18,18A18,18,0,0,1,110,128Z"/>
    </svg>
  );
}
