import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPrescriptionIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuMzEsMTg4bDIyLjM1LTIyLjM0YTgsOCwwLDAsMC0xMS4zMi0xMS4zMkwxNzIsMTc2LjY5bC00MS4xNS00MS4xNkE1Miw1MiwwLDAsMCwxMjQsMzJINzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDE2LDBWMTM2aDI4LjY5bDUyLDUyLTIyLjM1LDIyLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxNzIsMTk5LjMxbDIyLjM0LDIyLjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNODAsNDhoNDRhMzYsMzYsMCwwLDEsMCw3Mkg4MFoiLz48L3N2Zz4=)
 */
export function PhPrescriptionIcon(props: PhPrescriptionIconProps) {
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
      <path d="M183.31,188l22.35-22.34a8,8,0,0,0-11.32-11.32L172,176.69l-41.15-41.16A52,52,0,0,0,124,32H72a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V136h28.69l52,52-22.35,22.34a8,8,0,0,0,11.32,11.32L172,199.31l22.34,22.35a8,8,0,0,0,11.32-11.32ZM80,48h44a36,36,0,0,1,0,72H80Z"/>
    </svg>
  );
}
