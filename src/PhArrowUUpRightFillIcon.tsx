import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTM2Vjk2SDg4YTQ4LDQ4LDAsMCwwLDAsOTZoODhhOCw4LDAsMCwxLDAsMTZIODhBNjQsNjQsMCwwLDEsODgsODBoODBWNDBhOCw4LDAsMCwxLDEzLjY2LTUuNjZsNDgsNDhhOCw4LDAsMCwxLDAsMTEuMzJsLTQ4LDQ4QTgsOCwwLDAsMSwxNjgsMTM2WiIvPjwvc3ZnPg==)
 */
export function PhArrowUUpRightFillIcon(props: PhArrowUUpRightFillIconProps) {
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
      <path d="M168,136V96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80h80V40a8,8,0,0,1,13.66-5.66l48,48a8,8,0,0,1,0,11.32l-48,48A8,8,0,0,1,168,136Z"/>
    </svg>
  );
}
