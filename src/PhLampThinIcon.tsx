import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLampThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuNjgsMTUwLjQybC00OC0xMTJBNCw0LDAsMCwwLDE5MiwzNkg2NGE0LDQsMCwwLDAtMy42OCwyLjQybC00OCwxMTJBNCw0LDAsMCwwLDE2LDE1NkgxMjR2NTZIOTZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsMC04SDEzMlYxNTZoNjR2MzZhNCw0LDAsMCwwLDgsMFYxNTZoMzZhNCw0LDAsMCwwLDMuNjgtNS41OFpNMjIuMDcsMTQ4LDY2LjY0LDQ0SDE4OS4zNmw0NC41NywxMDRaIi8+PC9zdmc+)
 */
export function PhLampThinIcon(props: PhLampThinIconProps) {
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
      <path d="M243.68,150.42l-48-112A4,4,0,0,0,192,36H64a4,4,0,0,0-3.68,2.42l-48,112A4,4,0,0,0,16,156H124v56H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V156h64v36a4,4,0,0,0,8,0V156h36a4,4,0,0,0,3.68-5.58ZM22.07,148,66.64,44H189.36l44.57,104Z"/>
    </svg>
  );
}
