import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyDollarThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTI0SDEzMlY1MmgxMmEzNiwzNiwwLDAsMSwzNiwzNiw0LDQsMCwwLDAsOCwwLDQ0LjA1LDQ0LjA1LDAsMCwwLTQ0LTQ0SDEzMlYyNGE0LDQsMCwwLDAtOCwwVjQ0SDExMmE0NCw0NCwwLDAsMCwwLDg4aDEydjcySDEwNGEzNiwzNiwwLDAsMS0zNi0zNiw0LDQsMCwwLDAtOCwwLDQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LDQ0aDIwdjIwYTQsNCwwLDAsMCw4LDBWMjEyaDIwYTQ0LDQ0LDAsMCwwLDAtODhabS00MCwwYTM2LDM2LDAsMCwxLDAtNzJoMTJ2NzJabTQwLDgwSDEzMlYxMzJoMjBhMzYsMzYsMCwwLDEsMCw3MloiLz48L3N2Zz4=)
 */
export function PhCurrencyDollarThinIcon(props: PhCurrencyDollarThinIconProps) {
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
      <path d="M152,124H132V52h12a36,36,0,0,1,36,36,4,4,0,0,0,8,0,44.05,44.05,0,0,0-44-44H132V24a4,4,0,0,0-8,0V44H112a44,44,0,0,0,0,88h12v72H104a36,36,0,0,1-36-36,4,4,0,0,0-8,0,44.05,44.05,0,0,0,44,44h20v20a4,4,0,0,0,8,0V212h20a44,44,0,0,0,0-88Zm-40,0a36,36,0,0,1,0-72h12v72Zm40,80H132V132h20a36,36,0,0,1,0,72Z"/>
    </svg>
  );
}
