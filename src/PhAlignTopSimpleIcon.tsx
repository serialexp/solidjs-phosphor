import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJhOCw4LDAsMCwxLTgsOEg1NmE4LDgsMCwwLDEsMC0xNkgyMDBBOCw4LDAsMCwxLDIwOCwzMlpNMTc2LDcyVjIyNGExNiwxNiwwLDAsMS0xNiwxNkg5NmExNiwxNiwwLDAsMS0xNi0xNlY3MkExNiwxNiwwLDAsMSw5Niw1Nmg2NEExNiwxNiwwLDAsMSwxNzYsNzJabS0xNiwwSDk2VjIyNGg2NFoiLz48L3N2Zz4=)
 */
export function PhAlignTopSimpleIcon(props: PhAlignTopSimpleIconProps) {
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
      <path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z"/>
    </svg>
  );
}
