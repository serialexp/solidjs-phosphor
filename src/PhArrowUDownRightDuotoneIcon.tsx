import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTY4bC00OCw0OFYxMjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI5LjY2LDE2Mi4zNGwtNDgtNDhBOCw4LDAsMCwwLDE2OCwxMjB2NDBIODhhNDgsNDgsMCwwLDEsMC05Nmg4OGE4LDgsMCwwLDAsMC0xNkg4OGE2NCw2NCwwLDAsMCwwLDEyOGg4MHY0MGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0OC00OEE4LDgsMCwwLDAsMjI5LjY2LDE2Mi4zNFpNMTg0LDE5Ni42OVYxMzkuMzFMMjEyLjY5LDE2OFoiLz48L3N2Zz4=)
 */
export function PhArrowUDownRightDuotoneIcon(props: PhArrowUDownRightDuotoneIconProps) {
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
      <path d="M224,168l-48,48V120Z" opacity="0.2"/><path d="M229.66,162.34l-48-48A8,8,0,0,0,168,120v40H88a48,48,0,0,1,0-96h88a8,8,0,0,0,0-16H88a64,64,0,0,0,0,128h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,162.34ZM184,196.69V139.31L212.69,168Z"/>
    </svg>
  );
}
