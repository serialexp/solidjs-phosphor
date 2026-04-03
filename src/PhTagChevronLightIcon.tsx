import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagChevronLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDUsMTI0LjY3LDE5OS4zNyw1Ni4yM0ExNCwxNCwwLDAsMCwxODcuNzIsNTBIMzJhNiw2LDAsMCwwLTUsOS4zM0w3Mi43OSwxMjgsMjcsMTk2LjY3QTYsNiwwLDAsMCwzMiwyMDZIMTg3LjcyYTE0LDE0LDAsMCwwLDExLjY1LTYuMjNMMjQ1LDEzMS4zM0E2LDYsMCwwLDAsMjQ1LDEyNC42N1ptLTU1LjYxLDY4LjQ0YTIsMiwwLDAsMS0xLjY2Ljg5SDQzLjIxTDg1LDEzMS4zM2E2LDYsMCwwLDAsMC02LjY2TDQzLjIxLDYySDE4Ny43MmEyLDIsMCwwLDEsMS42Ni44OUwyMzIuNzksMTI4WiIvPjwvc3ZnPg==)
 */
export function PhTagChevronLightIcon(props: PhTagChevronLightIconProps) {
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
      <path d="M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H32a6,6,0,0,0-5,9.33L72.79,128,27,196.67A6,6,0,0,0,32,206H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H43.21L85,131.33a6,6,0,0,0,0-6.66L43.21,62H187.72a2,2,0,0,1,1.66.89L232.79,128Z"/>
    </svg>
  );
}
