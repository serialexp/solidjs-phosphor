import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMzJINjRBMTYsMTYsMCwwLDAsNDgsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDEwNCwzMlptMCwxNzZINjRWNDhoNDBaTTE5MiwzMkgxNTJhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDE5MiwzMlptMCwxNzZIMTUyVjQ4aDQwWiIvPjwvc3ZnPg==)
 */
export function PhColumnsIcon(props: PhColumnsIconProps) {
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
      <path d="M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z"/>
    </svg>
  );
}
