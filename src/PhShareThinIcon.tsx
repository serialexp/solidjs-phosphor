import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShareThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMTA2LjgzbC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2TDIxNC4zNCwxMDhIMTY1YTkyLDkyLDAsMCwwLTg5LjExLDY5QTQsNCwwLDAsMSw3MiwxODBhMy44NywzLjg3LDAsMCwxLTEtLjEzQTQsNCwwLDAsMSw2OC4xMywxNzUsOTkuOTMsOTkuOTMsMCwwLDEsMTY1LDEwMGg0OS4zNkwxNzMuMTcsNTguODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0OCw0OEE0LDQsMCwwLDEsMjI2LjgzLDEwNi44M1pNMTkyLDIxMkgzNlY4OGE0LDQsMCwwLDAtOCwwVjIxNmE0LDQsMCwwLDAsNCw0SDE5MmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhShareThinIcon(props: PhShareThinIconProps) {
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
      <path d="M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,108H165a92,92,0,0,0-89.11,69A4,4,0,0,1,72,180a3.87,3.87,0,0,1-1-.13A4,4,0,0,1,68.13,175,99.93,99.93,0,0,1,165,100h49.36L173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83ZM192,212H36V88a4,4,0,0,0-8,0V216a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
