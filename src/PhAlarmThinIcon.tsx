import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlarmThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNDRhOTIsOTIsMCwxLDAsOTIsOTJBOTIuMSw5Mi4xLDAsMCwwLDEyOCw0NFptMCwxNzZhODQsODQsMCwxLDEsODQtODRBODQuMDksODQuMDksMCwwLDEsMTI4LDIyMFpNNTguODMsMzQuODNsLTMyLDMyYTQsNCwwLDAsMS01LjY2LTUuNjZsMzItMzJhNCw0LDAsMCwxLDUuNjYsNS42NlptMTc2LDMyYTQsNCwwLDAsMS01LjY2LDBsLTMyLTMyYTQsNCwwLDAsMSw1LjY2LTUuNjZsMzIsMzJBNCw0LDAsMCwxLDIzNC44Myw2Ni44M1pNMTg4LDEzNmE0LDQsMCwwLDEtNCw0SDEyOGE0LDQsMCwwLDEtNC00VjgwYTQsNCwwLDAsMSw4LDB2NTJoNTJBNCw0LDAsMCwxLDE4OCwxMzZaIi8+PC9zdmc+)
 */
export function PhAlarmThinIcon(props: PhAlarmThinIconProps) {
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
      <path d="M128,44a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,44Zm0,176a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,220ZM58.83,34.83l-32,32a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,5.66Zm176,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,66.83ZM188,136a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V80a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,136Z"/>
    </svg>
  );
}
