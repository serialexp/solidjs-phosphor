import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatsTeardropFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjkuNTcsNzIuNTlBODAsODAsMCwwLDAsMTYsMTA0djY0YTE2LDE2LDAsMCwwLDE2LDE2SDg2LjY3QTgwLjE1LDgwLjE1LDAsMCwwLDE2MCwyMzJoNjRhMTYsMTYsMCwwLDAsMTYtMTZWMTUyQTgwLDgwLDAsMCwwLDE2OS41Nyw3Mi41OVpNMjI0LDIxNkgxNjBhNjQuMTQsNjQuMTQsMCwwLDEtNTUuNjgtMzIuNDNBNzkuOTMsNzkuOTMsMCwwLDAsMTc0LjcsODkuNzEsNjQsNjQsMCwwLDEsMjI0LDE1MloiLz48L3N2Zz4=)
 */
export function PhChatsTeardropFillIcon(props: PhChatsTeardropFillIconProps) {
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
      <path d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"/>
    </svg>
  );
}
