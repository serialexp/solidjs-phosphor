import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParallelogramBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguNzgsNDUuMTRBMTkuOTIsMTkuOTIsMCwwLDAsMjMyLDM2SDg4LjgxQTIwLDIwLDAsMCwwLDcwLjU3LDQ3Ljc5bC02NC44LDE0NEEyMCwyMCwwLDAsMCwyNCwyMjBIMTY3LjE5YTIwLDIwLDAsMCwwLDE4LjI0LTExLjc5bDY0LjgtMTQ0QTE5LjksMTkuOSwwLDAsMCwyNDguNzgsNDUuMTRaTTE2NC42LDE5NkgzMC4yTDkxLjQsNjBIMjI1LjhaIi8+PC9zdmc+)
 */
export function PhParallelogramBoldIcon(props: PhParallelogramBoldIconProps) {
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
      <path d="M248.78,45.14A19.92,19.92,0,0,0,232,36H88.81A20,20,0,0,0,70.57,47.79l-64.8,144A20,20,0,0,0,24,220H167.19a20,20,0,0,0,18.24-11.79l64.8-144A19.9,19.9,0,0,0,248.78,45.14ZM164.6,196H30.2L91.4,60H225.8Z"/>
    </svg>
  );
}
