import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPowerLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIsMTI4VjQ4YTYsNiwwLDAsMSwxMiwwdjgwYTYsNiwwLDAsMS0xMiwwWm01Ny4yOC03N0E2LDYsMCwwLDAsMTcyLjcyLDYxQzE5Ni40MSw3Ni40NywyMTAsMTAwLjg4LDIxMCwxMjhhODIsODIsMCwwLDEtMTY0LDBjMC0yNy4xMiwxMy41OS01MS41MywzNy4yOC02N0E2LDYsMCwwLDAsNzYuNzIsNTFDNDkuNTcsNjguNjgsMzQsOTYuNzUsMzQsMTI4YTk0LDk0LDAsMCwwLDE4OCwwQzIyMiw5Ni43NSwyMDYuNDMsNjguNjgsMTc5LjI4LDUxWiIvPjwvc3ZnPg==)
 */
export function PhPowerLightIcon(props: PhPowerLightIconProps) {
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
      <path d="M122,128V48a6,6,0,0,1,12,0v80a6,6,0,0,1-12,0Zm57.28-77A6,6,0,0,0,172.72,61C196.41,76.47,210,100.88,210,128a82,82,0,0,1-164,0c0-27.12,13.59-51.53,37.28-67A6,6,0,0,0,76.72,51C49.57,68.68,34,96.75,34,128a94,94,0,0,0,188,0C222,96.75,206.43,68.68,179.28,51Z"/>
    </svg>
  );
}
