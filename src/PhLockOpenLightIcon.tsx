import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockOpenLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODJIOTRWNTZhMzQsMzQsMCwwLDEsMzQtMzRjMTYuMywwLDMxLDExLjY5LDM0LjEyLDI3LjE5YTYsNiwwLDAsMCwxMS43Ni0yLjM4QzE2OS41NSwyNS40OCwxNTAuMjYsMTAsMTI4LDEwQTQ2LjA2LDQ2LjA2LDAsMCwwLDgyLDU2VjgySDQ4QTE0LDE0LDAsMCwwLDM0LDk2VjIwOGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWOTZBMTQsMTQsMCwwLDAsMjA4LDgyWm0yLDEyNmEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWOTZhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMlptLTcyLTU2YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwxNTJaIi8+PC9zdmc+)
 */
export function PhLockOpenLightIcon(props: PhLockOpenLightIconProps) {
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
      <path d="M208,82H94V56a34,34,0,0,1,34-34c16.3,0,31,11.69,34.12,27.19a6,6,0,0,0,11.76-2.38C169.55,25.48,150.26,10,128,10A46.06,46.06,0,0,0,82,56V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"/>
    </svg>
  );
}
