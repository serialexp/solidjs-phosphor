import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTipiFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNzQsMjExLjY5LDEzNy41LDUzLjVsMjEuMjQtMzMuMTlhOCw4LDAsMCwwLTEzLjQ4LTguNjJMMTI4LDM4LjY2bC0xNy4yNi0yN2E4LDgsMCwxLDAtMTMuNDgsOC42MkwxMTguNSw1My41LDE3LjI2LDIxMS42OUE4LDgsMCwwLDAsMjQsMjI0SDIzMmE4LDgsMCwwLDAsNi43NC0xMi4zMVptLTUwLTMuNjktNTQtODQuMzFhOCw4LDAsMCwwLTEzLjQ4LDBMNjcuMywyMDhIMzguNjJMMTI4LDY4LjM0LDIxNy4zOCwyMDhaIi8+PC9zdmc+)
 */
export function PhTipiFillIcon(props: PhTipiFillIconProps) {
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
      <path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31Zm-50-3.69-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z"/>
    </svg>
  );
}
