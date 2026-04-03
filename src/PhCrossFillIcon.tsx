import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrossFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTJ2MjRhMTYsMTYsMCwwLDEtMTYsMTZIMTU2djkyYTE2LDE2LDAsMCwxLTE2LDE2SDExNmExNiwxNiwwLDAsMS0xNi0xNlYxMzJINTZhMTYsMTYsMCwwLDEtMTYtMTZWOTJBMTYsMTYsMCwwLDEsNTYsNzZoNDRWMzJhMTYsMTYsMCwwLDEsMTYtMTZoMjRhMTYsMTYsMCwwLDEsMTYsMTZWNzZoNDRBMTYsMTYsMCwwLDEsMjE2LDkyWiIvPjwvc3ZnPg==)
 */
export function PhCrossFillIcon(props: PhCrossFillIconProps) {
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
      <path d="M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z"/>
    </svg>
  );
}
