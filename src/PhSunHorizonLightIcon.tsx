import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSunHorizonLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTU0SDE5Ny4yOGE3MC45MSw3MC45MSwwLDAsMCwuNzItMTAsNzAsNzAsMCwwLDAtMTQwLDAsNzAuOTEsNzAuOTEsMCwwLDAsLjcyLDEwSDE2YTYsNiwwLDAsMCwwLDEySDI0MGE2LDYsMCwwLDAsMC0xMlpNNzAsMTQ0YTU4LDU4LDAsMSwxLDExNS4xMywxMEg3MC44N0E1OC42Myw1OC42MywwLDAsMSw3MCwxNDRabTE0NCw1NmE2LDYsMCwwLDEtNiw2SDQ4YTYsNiwwLDAsMSwwLTEySDIwOEE2LDYsMCwwLDEsMjE0LDIwMFpNNzQuNjMsNDIuNjlhNiw2LDAsMCwxLDEwLjc0LTUuMzdsOCwxNmE2LDYsMCwwLDEtMTAuNzQsNS4zNlptLTU2LDUwLjYzYTYsNiwwLDAsMSw4LjA1LTIuNjlsMTYsOGE2LDYsMCwwLDEtNS4zNiwxMC43NGwtMTYtOEE2LDYsMCwwLDEsMTguNjMsOTMuMzJabTE5MiwxMy4zNmE2LDYsMCwwLDEsMi42OS04LjA1bDE2LThhNiw2LDAsMSwxLDUuMzYsMTAuNzRsLTE2LDhhNiw2LDAsMCwxLTguMDUtMi42OVptLTQ4LTUzLjM2LDgtMTZhNiw2LDAsMCwxLDEwLjc0LDUuMzdsLTgsMTZhNiw2LDAsMSwxLTEwLjc0LTUuMzZaIi8+PC9zdmc+)
 */
export function PhSunHorizonLightIcon(props: PhSunHorizonLightIconProps) {
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
      <path d="M240,154H197.28a70.91,70.91,0,0,0,.72-10,70,70,0,0,0-140,0,70.91,70.91,0,0,0,.72,10H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM70,144a58,58,0,1,1,115.13,10H70.87A58.63,58.63,0,0,1,70,144Zm144,56a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H208A6,6,0,0,1,214,200ZM74.63,42.69a6,6,0,0,1,10.74-5.37l8,16a6,6,0,0,1-10.74,5.36Zm-56,50.63a6,6,0,0,1,8.05-2.69l16,8a6,6,0,0,1-5.36,10.74l-16-8A6,6,0,0,1,18.63,93.32Zm192,13.36a6,6,0,0,1,2.69-8.05l16-8a6,6,0,1,1,5.36,10.74l-16,8a6,6,0,0,1-8.05-2.69Zm-48-53.36,8-16a6,6,0,0,1,10.74,5.37l-8,16a6,6,0,1,1-10.74-5.36Z"/>
    </svg>
  );
}
