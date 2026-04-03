import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhScooterLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTM4YTM0LjMyLDM0LjMyLDAsMCwwLTQuODkuMzZMMTczLjY5LDM4LjFBNiw2LDAsMCwwLDE2OCwzNEgxMzZhNiw2LDAsMCwwLDAsMTJoMjcuNjhsMTguMjQsNTQuNzNMMTI1LjE2LDE3MEg3Ny45NGEzNCwzNCwwLDEsMC0xLjQ0LDEySDEyOGE2LDYsMCwwLDAsNC42NC0yLjJsNTMuNzYtNjUuNjIsOS4zMywyOEEzNCwzNCwwLDEsMCwyMTIsMTM4Wk00NCwxOTRhMjIsMjIsMCwxLDEsMjItMjJBMjIsMjIsMCwwLDEsNDQsMTk0Wm0xNjgsMGEyMiwyMiwwLDEsMSwyMi0yMkEyMiwyMiwwLDAsMSwyMTIsMTk0WiIvPjwvc3ZnPg==)
 */
export function PhScooterLightIcon(props: PhScooterLightIconProps) {
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
      <path d="M212,138a34.32,34.32,0,0,0-4.89.36L173.69,38.1A6,6,0,0,0,168,34H136a6,6,0,0,0,0,12h27.68l18.24,54.73L125.16,170H77.94a34,34,0,1,0-1.44,12H128a6,6,0,0,0,4.64-2.2l53.76-65.62,9.33,28A34,34,0,1,0,212,138ZM44,194a22,22,0,1,1,22-22A22,22,0,0,1,44,194Zm168,0a22,22,0,1,1,22-22A22,22,0,0,1,212,194Z"/>
    </svg>
  );
}
