import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextBDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTYwYTQwLDQwLDAsMCwxLTQwLDQwSDgwVjQ4aDY4YTM2LDM2LDAsMCwxLDAsNzJoMTJBNDAsNDAsMCwwLDEsMjAwLDE2MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzguNDgsMTE1LjdBNDQsNDQsMCwwLDAsMTQ4LDQwSDgwYTgsOCwwLDAsMC04LDhWMjAwYTgsOCwwLDAsMCw4LDhoODBhNDgsNDgsMCwwLDAsMTguNDgtOTIuM1pNODgsNTZoNjBhMjgsMjgsMCwwLDEsMCw1Nkg4OFptNzIsMTM2SDg4VjEyOGg3MmEzMiwzMiwwLDAsMSwwLDY0WiIvPjwvc3ZnPg==)
 */
export function PhTextBDuotoneIcon(props: PhTextBDuotoneIconProps) {
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
      <path d="M200,160a40,40,0,0,1-40,40H80V48h68a36,36,0,0,1,0,72h12A40,40,0,0,1,200,160Z" opacity="0.2"/><path d="M178.48,115.7A44,44,0,0,0,148,40H80a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8h80a48,48,0,0,0,18.48-92.3ZM88,56h60a28,28,0,0,1,0,56H88Zm72,136H88V128h72a32,32,0,0,1,0,64Z"/>
    </svg>
  );
}
