import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareInIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTM2djY0YTgsOCwwLDAsMS0xNiwwVjE1NS4zMkw0NS42NiwyMjEuNjZhOCw4LDAsMCwxLTExLjMyLTExLjMyTDEwMC42OCwxNDRINTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDEyOCwxMzZaTTIwOCwzMkg4MEExNiwxNiwwLDAsMCw2NCw0OFY5NmE4LDgsMCwwLDAsMTYsMFY0OEgyMDhWMTc2SDE2MGE4LDgsMCwwLDAsMCwxNmg0OGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaIi8+PC9zdmc+)
 */
export function PhArrowSquareInIcon(props: PhArrowSquareInIconProps) {
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
      <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/>
    </svg>
  );
}
