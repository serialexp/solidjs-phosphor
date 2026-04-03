import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBrowsersBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMzJINzZBMjAsMjAsMCwwLDAsNTYsNTJWNzJIMzZBMjAsMjAsMCwwLDAsMTYsOTJWMjA0YTIwLDIwLDAsMCwwLDIwLDIwSDE4MGEyMCwyMCwwLDAsMCwyMC0yMFYxODRoMjBhMjAsMjAsMCwwLDAsMjAtMjBWNTJBMjAsMjAsMCwwLDAsMjIwLDMyWk0xNzYsOTZ2MTZINDBWOTZabTAsMTA0SDQwVjEzNkgxNzZabTQwLTQwSDIwMFY5MmEyMCwyMCwwLDAsMC0yMC0yMEg4MFY1NkgyMTZaIi8+PC9zdmc+)
 */
export function PhBrowsersBoldIcon(props: PhBrowsersBoldIconProps) {
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
      <path d="M220,32H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H180a20,20,0,0,0,20-20V184h20a20,20,0,0,0,20-20V52A20,20,0,0,0,220,32ZM176,96v16H40V96Zm0,104H40V136H176Zm40-40H200V92a20,20,0,0,0-20-20H80V56H216Z"/>
    </svg>
  );
}
