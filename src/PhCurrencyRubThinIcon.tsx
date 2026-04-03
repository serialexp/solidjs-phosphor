import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyRubThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMzZIODhhNCw0LDAsMCwwLTQsNFYxNDBINTZhNCw0LDAsMCwwLDAsOEg4NHYyNEg1NmE0LDQsMCwwLDAsMCw4SDg0djM2YTQsNCwwLDAsMCw4LDBWMTgwaDUyYTQsNCwwLDAsMCwwLThIOTJWMTQ4aDU2YTU2LDU2LDAsMCwwLDAtMTEyWm0wLDEwNEg5MlY0NGg1NmE0OCw0OCwwLDAsMSwwLDk2WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyRubThinIcon(props: PhCurrencyRubThinIconProps) {
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
      <path d="M148,36H88a4,4,0,0,0-4,4V140H56a4,4,0,0,0,0,8H84v24H56a4,4,0,0,0,0,8H84v36a4,4,0,0,0,8,0V180h52a4,4,0,0,0,0-8H92V148h56a56,56,0,0,0,0-112Zm0,104H92V44h56a48,48,0,0,1,0,96Z"/>
    </svg>
  );
}
