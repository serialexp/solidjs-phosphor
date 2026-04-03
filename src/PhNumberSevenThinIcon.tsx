import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSevenThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuODMsNDkuMTVsLTQ4LDE2MEE0LDQsMCwwLDEsMTIwLDIxMmEzLjgyLDMuODIsMCwwLDEtMS4xNS0uMTcsNCw0LDAsMCwxLTIuNjgtNUwxNjIuNjIsNTJIODhhNCw0LDAsMCwxLDAtOGg4MGE0LDQsMCwwLDEsMy44Myw1LjE1WiIvPjwvc3ZnPg==)
 */
export function PhNumberSevenThinIcon(props: PhNumberSevenThinIconProps) {
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
      <path d="M171.83,49.15l-48,160A4,4,0,0,1,120,212a3.82,3.82,0,0,1-1.15-.17,4,4,0,0,1-2.68-5L162.62,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.83,5.15Z"/>
    </svg>
  );
}
