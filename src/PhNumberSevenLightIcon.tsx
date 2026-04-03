import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSevenLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuNzUsNDkuNzJsLTQ4LDE2MGE2LDYsMCwxLDEtMTEuNS0zLjQ1TDE1OS45NCw1NEg4OGE2LDYsMCwwLDEsMC0xMmg4MGE2LDYsMCwwLDEsNS43NSw3LjcyWiIvPjwvc3ZnPg==)
 */
export function PhNumberSevenLightIcon(props: PhNumberSevenLightIconProps) {
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
      <path d="M173.75,49.72l-48,160a6,6,0,1,1-11.5-3.45L159.94,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,5.75,7.72Z"/>
    </svg>
  );
}
