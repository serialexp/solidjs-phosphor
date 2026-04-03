import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyNgnLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTM4SDE5OFYxMThoMThhNiw2LDAsMCwwLDAtMTJIMTk4VjQ2YTYsNiwwLDAsMC0xMiwwdjYwSDExOC40NEw2OC43Myw0Mi4zMUE2LDYsMCwwLDAsNTgsNDZ2NjBINDBhNiw2LDAsMCwwLDAsMTJINTh2MjBINDBhNiw2LDAsMCwwLDAsMTJINTh2NjBhNiw2LDAsMCwwLDEyLDBWMTUwaDY3LjU2bDQ5LjcxLDYzLjY5QTYsNiwwLDAsMCwxOTgsMjEwVjE1MGgxOGE2LDYsMCwwLDAsMC0xMlptLTMwLTIwdjIwSDE0My40MmwtMTUuNjEtMjBaTTcwLDYzLjQ0LDEwMy4yMiwxMDZINzBaTTcwLDEzOFYxMThoNDIuNThsMTUuNjEsMjBabTExNiw1NC41NkwxNTIuNzgsMTUwSDE4NloiLz48L3N2Zz4=)
 */
export function PhCurrencyNgnLightIcon(props: PhCurrencyNgnLightIconProps) {
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
      <path d="M216,138H198V118h18a6,6,0,0,0,0-12H198V46a6,6,0,0,0-12,0v60H118.44L68.73,42.31A6,6,0,0,0,58,46v60H40a6,6,0,0,0,0,12H58v20H40a6,6,0,0,0,0,12H58v60a6,6,0,0,0,12,0V150h67.56l49.71,63.69A6,6,0,0,0,198,210V150h18a6,6,0,0,0,0-12Zm-30-20v20H143.42l-15.61-20ZM70,63.44,103.22,106H70ZM70,138V118h42.58l15.61,20Zm116,54.56L152.78,150H186Z"/>
    </svg>
  );
}
