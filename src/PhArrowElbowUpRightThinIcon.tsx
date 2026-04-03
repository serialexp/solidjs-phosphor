import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguODMsODIuODNsLTQ4LDQ4YTQsNCwwLDAsMS01LjY2LTUuNjZMMjA2LjM0LDg0SDc2VjIyNGE0LDQsMCwwLDEtOCwwVjgwYTQsNCwwLDAsMSw0LTRIMjA2LjM0TDE2NS4xNywzNC44M2E0LDQsMCwwLDEsNS42Ni01LjY2bDQ4LDQ4QTQsNCwwLDAsMSwyMTguODMsODIuODNaIi8+PC9zdmc+)
 */
export function PhArrowElbowUpRightThinIcon(props: PhArrowElbowUpRightThinIconProps) {
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
      <path d="M218.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,84H76V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H206.34L165.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,218.83,82.83Z"/>
    </svg>
  );
}
