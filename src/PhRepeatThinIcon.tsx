import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRepeatThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCwxMjhBNjguMDcsNjguMDcsMCwwLDEsOTYsNjBIMjE0LjM0TDE5Ny4xNyw0Mi44M2E0LDQsMCwwLDEsNS42Ni01LjY2bDI0LDI0YTQsNCwwLDAsMSwwLDUuNjZsLTI0LDI0YTQsNCwwLDAsMS01LjY2LTUuNjZMMjE0LjM0LDY4SDk2YTYwLjA3LDYwLjA3LDAsMCwwLTYwLDYwLDQsNCwwLDAsMS04LDBabTE5Ni00YTQsNCwwLDAsMC00LDQsNjAuMDcsNjAuMDcsMCwwLDEtNjAsNjBINDEuNjZsMTcuMTctMTcuMTdhNCw0LDAsMCwwLTUuNjYtNS42NmwtMjQsMjRhNCw0LDAsMCwwLDAsNS42NmwyNCwyNGE0LDQsMCwxLDAsNS42Ni01LjY2TDQxLjY2LDE5NkgxNjBhNjguMDcsNjguMDcsMCwwLDAsNjgtNjhBNCw0LDAsMCwwLDIyNCwxMjRaIi8+PC9zdmc+)
 */
export function PhRepeatThinIcon(props: PhRepeatThinIconProps) {
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
      <path d="M28,128A68.07,68.07,0,0,1,96,60H214.34L197.17,42.83a4,4,0,0,1,5.66-5.66l24,24a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L214.34,68H96a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0Zm196-4a4,4,0,0,0-4,4,60.07,60.07,0,0,1-60,60H41.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L41.66,196H160a68.07,68.07,0,0,0,68-68A4,4,0,0,0,224,124Z"/>
    </svg>
  );
}
