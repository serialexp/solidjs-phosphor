import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMTA2LjgzbC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2TDIxNC4zNCwxMDhIMTI4YTkyLjEsOTIuMSwwLDAsMC05Miw5Miw0LDQsMCwwLDEtOCwwQTEwMC4xMSwxMDAuMTEsMCwwLDEsMTI4LDEwMGg4Ni4zNEwxNzMuMTcsNTguODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0OCw0OEE0LDQsMCwwLDEsMjI2LjgzLDEwNi44M1oiLz48L3N2Zz4=)
 */
export function PhArrowBendUpRightThinIcon(props: PhArrowBendUpRightThinIconProps) {
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
      <path d="M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,108H128a92.1,92.1,0,0,0-92,92,4,4,0,0,1-8,0A100.11,100.11,0,0,1,128,100h86.34L173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83Z"/>
    </svg>
  );
}
