import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPhosphorLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMzZINzJhNCw0LDAsMCwwLTQsNFYxNjhhNzYuMDgsNzYuMDgsMCwwLDAsNzYsNzYsNCw0LDAsMCwwLDQtNFYxNzJoNGE2OCw2OCwwLDAsMCwwLTEzNlpNNzYsNTUuMjcsMTM3LjE2LDE2NEg3NlptNjQsOTcuNDZMNzguODQsNDRIMTQwWk03Ni4xMywxNzJIMTQwdjYzLjg4QTY4LjEsNjguMSwwLDAsMSw3Ni4xMywxNzJaTTE1MiwxNjRoLTRWNDRoNGE2MCw2MCwwLDAsMSwwLDEyMFoiLz48L3N2Zz4=)
 */
export function PhPhosphorLogoThinIcon(props: PhPhosphorLogoThinIconProps) {
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
      <path d="M152,36H72a4,4,0,0,0-4,4V168a76.08,76.08,0,0,0,76,76,4,4,0,0,0,4-4V172h4a68,68,0,0,0,0-136ZM76,55.27,137.16,164H76Zm64,97.46L78.84,44H140ZM76.13,172H140v63.88A68.1,68.1,0,0,1,76.13,172ZM152,164h-4V44h4a60,60,0,0,1,0,120Z"/>
    </svg>
  );
}
