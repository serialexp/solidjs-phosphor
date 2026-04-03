import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTerminalWindowLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTI4YTYsNiwwLDAsMS0yLjI1LDQuNjlsLTQwLDMyYTYsNiwwLDAsMS03LjUtOS4zOEwxMTAuNCwxMjgsNzYuMjUsMTAwLjY5YTYsNiwwLDEsMSw3LjUtOS4zOGw0MCwzMkE2LDYsMCwwLDEsMTI2LDEyOFptNTAsMjZIMTM2YTYsNiwwLDAsMCwwLDEyaDQwYTYsNiwwLDAsMCwwLTEyWm01NC05OFYyMDBhMTQsMTQsMCwwLDEtMTQsMTRINDBhMTQsMTQsMCwwLDEtMTQtMTRWNTZBMTQsMTQsMCwwLDEsNDAsNDJIMjE2QTE0LDE0LDAsMCwxLDIzMCw1NlptLTEyLDBhMiwyLDAsMCwwLTItMkg0MGEyLDIsMCwwLDAtMiwyVjIwMGEyLDIsMCwwLDAsMiwySDIxNmEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 */
export function PhTerminalWindowLightIcon(props: PhTerminalWindowLightIconProps) {
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
      <path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
