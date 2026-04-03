import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSignInThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzguODMsMTMwLjgzbC00MCw0MGE0LDQsMCwwLDEtNS42Ni01LjY2TDEyNi4zNCwxMzJIMjRhNCw0LDAsMCwxLDAtOEgxMjYuMzRMOTMuMTcsOTAuODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0MCw0MEE0LDQsMCwwLDEsMTM4LjgzLDEzMC44M1pNMjAwLDM2SDEzNmE0LDQsMCwwLDAsMCw4aDYwVjIxMkgxMzZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsNC00VjQwQTQsNCwwLDAsMCwyMDAsMzZaIi8+PC9zdmc+)
 */
export function PhSignInThinIcon(props: PhSignInThinIconProps) {
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
      <path d="M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM200,36H136a4,4,0,0,0,0,8h60V212H136a4,4,0,0,0,0,8h64a4,4,0,0,0,4-4V40A4,4,0,0,0,200,36Z"/>
    </svg>
  );
}
