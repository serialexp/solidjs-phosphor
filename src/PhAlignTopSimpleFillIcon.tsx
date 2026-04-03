import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJhOCw4LDAsMCwxLTgsOEg1NmE4LDgsMCwwLDEsMC0xNkgyMDBBOCw4LDAsMCwxLDIwOCwzMlpNMTYwLDU2SDk2QTE2LDE2LDAsMCwwLDgwLDcyVjIyNGExNiwxNiwwLDAsMCwxNiwxNmg2NGExNiwxNiwwLDAsMCwxNi0xNlY3MkExNiwxNiwwLDAsMCwxNjAsNTZaIi8+PC9zdmc+)
 */
export function PhAlignTopSimpleFillIcon(props: PhAlignTopSimpleFillIconProps) {
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
      <path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM160,56H96A16,16,0,0,0,80,72V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V72A16,16,0,0,0,160,56Z"/>
    </svg>
  );
}
