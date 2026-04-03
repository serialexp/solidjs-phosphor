import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBarricadeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjhIMzJBMTIsMTIsMCwwLDAsMjAsODB2NzJhMTIsMTIsMCwwLDAsMTIsMTJINjB2MzZhNCw0LDAsMCwwLDgsMFYxNjRIMTg4djM2YTQsNCwwLDAsMCw4LDBWMTY0aDI4YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDIyNCw2OFptNCwxMnY1OC4zNEwxNjUuNjYsNzZIMjI0QTQsNCwwLDAsMSwyMjgsODBaTTMyLDc2SDgyLjM0bDgwLDgwSDEwMS42NkwyOCw4Mi4zNFY4MEE0LDQsMCwwLDEsMzIsNzZabS00LDc2VjkzLjY2TDkwLjM0LDE1NkgzMkE0LDQsMCwwLDEsMjgsMTUyWm0xOTYsNEgxNzMuNjZsLTgwLTgwaDYwLjY4TDIyOCwxNDkuNjZWMTUyQTQsNCwwLDAsMSwyMjQsMTU2WiIvPjwvc3ZnPg==)
 */
export function PhBarricadeThinIcon(props: PhBarricadeThinIconProps) {
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
      <path d="M224,68H32A12,12,0,0,0,20,80v72a12,12,0,0,0,12,12H60v36a4,4,0,0,0,8,0V164H188v36a4,4,0,0,0,8,0V164h28a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,12v58.34L165.66,76H224A4,4,0,0,1,228,80ZM32,76H82.34l80,80H101.66L28,82.34V80A4,4,0,0,1,32,76Zm-4,76V93.66L90.34,156H32A4,4,0,0,1,28,152Zm196,4H173.66l-80-80h60.68L228,149.66V152A4,4,0,0,1,224,156Z"/>
    </svg>
  );
}
