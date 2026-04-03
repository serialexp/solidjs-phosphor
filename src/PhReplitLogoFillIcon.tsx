import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhReplitLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxNjBoNzJ2NTZhMTYsMTYsMCwwLDEtMTYsMTZINzJhMTYsMTYsMCwwLDEtMTYtMTZWMTc2QTE2LDE2LDAsMCwxLDcyLDE2MFpNMTI4LDI0SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjgwQTE2LDE2LDAsMCwwLDcyLDk2aDcyVjQwQTE2LDE2LDAsMCwwLDEyOCwyNFptODgsNzJIMTQ0djY0aDcyYTE2LDE2LDAsMCwwLDE2LTE2VjExMkExNiwxNiwwLDAsMCwyMTYsOTZaIi8+PC9zdmc+)
 */
export function PhReplitLogoFillIcon(props: PhReplitLogoFillIconProps) {
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
      <path d="M72,160h72v56a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V176A16,16,0,0,1,72,160ZM128,24H72A16,16,0,0,0,56,40V80A16,16,0,0,0,72,96h72V40A16,16,0,0,0,128,24Zm88,72H144v64h72a16,16,0,0,0,16-16V112A16,16,0,0,0,216,96Z"/>
    </svg>
  );
}
