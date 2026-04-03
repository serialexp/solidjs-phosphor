import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMzJhNiw2LDAsMCwxLTYsNkg1NmE2LDYsMCwwLDEsMC0xMkgyMDBBNiw2LDAsMCwxLDIwNiwzMlpNMTc0LDcyVjIyNGExNCwxNCwwLDAsMS0xNCwxNEg5NmExNCwxNCwwLDAsMS0xNC0xNFY3MkExNCwxNCwwLDAsMSw5Niw1OGg2NEExNCwxNCwwLDAsMSwxNzQsNzJabS0xMiwwYTIsMiwwLDAsMC0yLTJIOTZhMiwyLDAsMCwwLTIsMlYyMjRhMiwyLDAsMCwwLDIsMmg2NGEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 */
export function PhAlignTopSimpleLightIcon(props: PhAlignTopSimpleLightIconProps) {
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
      <path d="M206,32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,32ZM174,72V224a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14V72A14,14,0,0,1,96,58h64A14,14,0,0,1,174,72Zm-12,0a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2V224a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
