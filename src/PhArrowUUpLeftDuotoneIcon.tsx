import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw0MHY5NkwzMiw4OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjgsODBIODhWNDBhOCw4LDAsMCwwLTEzLjY2LTUuNjZsLTQ4LDQ4YTgsOCwwLDAsMCwwLDExLjMybDQ4LDQ4QTgsOCwwLDAsMCw4OCwxMzZWOTZoODBhNDgsNDgsMCwwLDEsMCw5Nkg4MGE4LDgsMCwwLDAsMCwxNmg4OGE2NCw2NCwwLDAsMCwwLTEyOFpNNzIsMTE2LjY5LDQzLjMxLDg4LDcyLDU5LjMxWiIvPjwvc3ZnPg==)
 */
export function PhArrowUUpLeftDuotoneIcon(props: PhArrowUUpLeftDuotoneIconProps) {
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
      <path d="M80,40v96L32,88Z" opacity="0.2"/><path d="M168,80H88V40a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,136V96h80a48,48,0,0,1,0,96H80a8,8,0,0,0,0,16h88a64,64,0,0,0,0-128ZM72,116.69,43.31,88,72,59.31Z"/>
    </svg>
  );
}
