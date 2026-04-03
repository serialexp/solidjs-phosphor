import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNTQsMTMzLjdBNiw2LDAsMCwwLDIyNCwxMzBIMTgyVjQ4YTE0LDE0LDAsMCwwLTE0LTE0SDg4QTE0LDE0LDAsMCwwLDc0LDQ4djgySDMyYTYsNiwwLDAsMC00LjI0LDEwLjI0bDk2LDk2YTYsNiwwLDAsMCw4LjQ4LDBsOTYtOTZBNiw2LDAsMCwwLDIyOS41NCwxMzMuN1pNMTI4LDIyMy41MSw0Ni40OSwxNDJIODBhNiw2LDAsMCwwLDYtNlY0OGEyLDIsMCwwLDEsMi0yaDgwYTIsMiwwLDAsMSwyLDJ2ODhhNiw2LDAsMCwwLDYsNmgzMy41MVoiLz48L3N2Zz4=)
 */
export function PhArrowFatDownLightIcon(props: PhArrowFatDownLightIconProps) {
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
      <path d="M229.54,133.7A6,6,0,0,0,224,130H182V48a14,14,0,0,0-14-14H88A14,14,0,0,0,74,48v82H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v88a6,6,0,0,0,6,6h33.51Z"/>
    </svg>
  );
}
