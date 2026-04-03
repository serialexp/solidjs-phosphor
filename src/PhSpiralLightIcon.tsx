import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpiralLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTQ0YTYsNiwwLDAsMS0xMiwwLDk4LjExLDk4LjExLDAsMCwwLTk4LTk4LDkwLjEsOTAuMSwwLDAsMC05MCw5MCw4Mi4xLDgyLjEsMCwwLDAsODIsODIsNzQuMDksNzQuMDksMCwwLDAsNzQtNzQsNjYuMDgsNjYuMDgsMCwwLDAtNjYtNjYsNTguMDcsNTguMDcsMCwwLDAtNTgsNTgsNTAuMDYsNTAuMDYsMCwwLDAsNTAsNTAsNDIsNDIsMCwwLDAsNDItNDIsMzQsMzQsMCwwLDAtMzQtMzQsMjYsMjYsMCwwLDAtMjYsMjYsMTgsMTgsMCwwLDAsMTgsMTgsMTAsMTAsMCwwLDAsMTAtMTAsMiwyLDAsMCwwLTItMiw2LDYsMCwwLDEsMC0xMiwxNCwxNCwwLDAsMSwxNCwxNCwyMiwyMiwwLDAsMS0yMiwyMiwzMCwzMCwwLDAsMS0zMC0zMCwzOCwzOCwwLDAsMSwzOC0zOCw0Ni4wNiw0Ni4wNiwwLDAsMSw0Niw0Niw1NC4wNiw1NC4wNiwwLDAsMS01NCw1NCw2Mi4wNyw2Mi4wNywwLDAsMS02Mi02Miw3MC4wOCw3MC4wOCwwLDAsMSw3MC03MCw3OC4wOSw3OC4wOSwwLDAsMSw3OCw3OCw4Ni4xLDg2LjEsMCwwLDEtODYsODYsOTQuMTEsOTQuMTEsMCwwLDEtOTQtOTRBMTAyLjEyLDEwMi4xMiwwLDAsMSwxMzYsMzQsMTEwLjEzLDExMC4xMywwLDAsMSwyNDYsMTQ0WiIvPjwvc3ZnPg==)
 */
export function PhSpiralLightIcon(props: PhSpiralLightIconProps) {
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
      <path d="M246,144a6,6,0,0,1-12,0,98.11,98.11,0,0,0-98-98,90.1,90.1,0,0,0-90,90,82.1,82.1,0,0,0,82,82,74.09,74.09,0,0,0,74-74,66.08,66.08,0,0,0-66-66,58.07,58.07,0,0,0-58,58,50.06,50.06,0,0,0,50,50,42,42,0,0,0,42-42,34,34,0,0,0-34-34,26,26,0,0,0-26,26,18,18,0,0,0,18,18,10,10,0,0,0,10-10,2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14,22,22,0,0,1-22,22,30,30,0,0,1-30-30,38,38,0,0,1,38-38,46.06,46.06,0,0,1,46,46,54.06,54.06,0,0,1-54,54,62.07,62.07,0,0,1-62-62,70.08,70.08,0,0,1,70-70,78.09,78.09,0,0,1,78,78,86.1,86.1,0,0,1-86,86,94.11,94.11,0,0,1-94-94A102.12,102.12,0,0,1,136,34,110.13,110.13,0,0,1,246,144Z"/>
    </svg>
  );
}
