import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTY4SDE2MHYzMkgzMlY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCwxOTJoLThWMTY4YTgsOCwwLDAsMC04LThIMTYwYTgsOCwwLDAsMC04LDh2MjRINDBWNTZIMjE2djgwYTgsOCwwLDAsMCwxNiwwVjU2YTE2LDE2LDAsMCwwLTE2LTE2SDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE5MkgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZabS03Mi0xNmg0OHYxNkgxNjhaIi8+PC9zdmc+)
 */
export function PhChalkboardSimpleDuotoneIcon(props: PhChalkboardSimpleDuotoneIconProps) {
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
      <path d="M224,56V168H160v32H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z"/>
    </svg>
  );
}
