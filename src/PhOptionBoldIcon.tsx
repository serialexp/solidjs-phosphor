import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOptionBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTkyYTEyLDEyLDAsMCwxLTEyLDEySDE2MC45NGExOS44OSwxOS44OSwwLDAsMS0xNy44OC0xMS4wNkw5Mi41OCw5MkgzMmExMiwxMiwwLDAsMSwwLTI0SDk1LjA2YTE5Ljg5LDE5Ljg5LDAsMCwxLDE3Ljg4LDExLjA2TDE2My40MiwxODBIMjI0QTEyLDEyLDAsMCwxLDIzNiwxOTJaTTE1Miw5Mmg3MmExMiwxMiwwLDAsMCwwLTI0SDE1MmExMiwxMiwwLDAsMCwwLDI0WiIvPjwvc3ZnPg==)
 */
export function PhOptionBoldIcon(props: PhOptionBoldIconProps) {
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
      <path d="M236,192a12,12,0,0,1-12,12H160.94a19.89,19.89,0,0,1-17.88-11.06L92.58,92H32a12,12,0,0,1,0-24H95.06a19.89,19.89,0,0,1,17.88,11.06L163.42,180H224A12,12,0,0,1,236,192ZM152,92h72a12,12,0,0,0,0-24H152a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
