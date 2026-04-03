import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClubIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsODhjLS43OCwwLTEuNTYsMC0yLjMzLDBhNTYsNTYsMCwxLDAtMTA3LjM0LDBjLS43OCwwLTEuNTUsMC0yLjMzLDBBNTYsNTYsMCwxLDAsOTYuNTQsMTk0LjM1bC04LjIsMjcuMzVBOCw4LDAsMCwwLDk2LDIzMmg2NGE4LDgsMCwwLDAsNy42Ni0xMC4zbC04LjItMjcuMzVBNTYsNTYsMCwxLDAsMTg0LDg4Wm0wLDk2YTQwLDQwLDAsMCwxLTMzLjQtMTgsOCw4LDAsMCwwLTE0LjMzLDYuNzFsMTMsNDMuMjZoLTQyLjVsMTMtNDMuMjZBOCw4LDAsMCwwLDEwNS40LDE2NmE0MCw0MCwwLDEsMS0xOS45My01OS43MSw4LDgsMCwwLDAsOS4zMy0xMiw0MCw0MCwwLDEsMSw2Ni40LDAsOCw4LDAsMCwwLDkuMzMsMTJBNDAsNDAsMCwxLDEsMTg0LDE4NFoiLz48L3N2Zz4=)
 */
export function PhClubIcon(props: PhClubIconProps) {
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
      <path d="M184,88c-.78,0-1.56,0-2.33,0a56,56,0,1,0-107.34,0c-.78,0-1.55,0-2.33,0A56,56,0,1,0,96.54,194.35l-8.2,27.35A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3l-8.2-27.35A56,56,0,1,0,184,88Zm0,96a40,40,0,0,1-33.4-18,8,8,0,0,0-14.33,6.71l13,43.26h-42.5l13-43.26A8,8,0,0,0,105.4,166a40,40,0,1,1-19.93-59.71,8,8,0,0,0,9.33-12,40,40,0,1,1,66.4,0,8,8,0,0,0,9.33,12A40,40,0,1,1,184,184Z"/>
    </svg>
  );
}
