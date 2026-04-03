import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjBIMTEyQTYwLjA3LDYwLjA3LDAsMCwwLDUyLDgwdjk2YTYwLjA3LDYwLjA3LDAsMCwwLDYwLDYwaDMyYTYwLjA3LDYwLjA3LDAsMCwwLDYwLTYwVjgwQTYwLjA3LDYwLjA3LDAsMCwwLDE0NCwyMFptNTIsMTU2YTUyLjA2LDUyLjA2LDAsMCwxLTUyLDUySDExMmE1Mi4wNiw1Mi4wNiwwLDAsMS01Mi01MlY4MGE1Mi4wNiw1Mi4wNiwwLDAsMSw1Mi01MmgzMmE1Mi4wNiw1Mi4wNiwwLDAsMSw1Miw1MlpNMTMyLDY0djQ4YTQsNCwwLDAsMS04LDBWNjRhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhMouseSimpleThinIcon(props: PhMouseSimpleThinIconProps) {
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
      <path d="M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,156a52.06,52.06,0,0,1-52,52H112a52.06,52.06,0,0,1-52-52V80a52.06,52.06,0,0,1,52-52h32a52.06,52.06,0,0,1,52,52ZM132,64v48a4,4,0,0,1-8,0V64a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
