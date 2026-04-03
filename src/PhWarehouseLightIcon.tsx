import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWarehouseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg2SDIzMFY1Ni4yOGwxMS4yNi0yLjQxYTYsNiwwLDEsMC0yLjUyLTExLjc0bC0yMjQsNDhhNiw2LDAsMCwwLDIuNTIsMTEuNzRMMjYsMTAwdjg2SDE2YTYsNiwwLDAsMCwwLDEySDI0MGE2LDYsMCwwLDAsMC0xMlpNMzgsOTcuNDIsMjE4LDU4Ljg1VjE4NkgxOTBWMTI4YTYsNiwwLDAsMC02LTZINzJhNiw2LDAsMCwwLTYsNnY1OEgzOFpNMTc4LDE1NEg3OFYxMzRIMTc4Wk03OCwxNjZIMTc4djIwSDc4WiIvPjwvc3ZnPg==)
 */
export function PhWarehouseLightIcon(props: PhWarehouseLightIconProps) {
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
      <path d="M240,186H230V56.28l11.26-2.41a6,6,0,1,0-2.52-11.74l-224,48a6,6,0,0,0,2.52,11.74L26,100v86H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,97.42,218,58.85V186H190V128a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v58H38ZM178,154H78V134H178ZM78,166H178v20H78Z"/>
    </svg>
  );
}
