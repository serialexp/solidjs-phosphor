import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTentIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuMzEsMTg4Ljc1bC02NC0xNDRBOCw4LDAsMCwwLDE4NCw0MEg3MmE4LDgsMCwwLDAtNy4yNyw0LjY5LjIxLjIxLDAsMCwwLDAsLjA2bDAsLjEyLDAsMEwuNjksMTg4Ljc1QTgsOCwwLDAsMCw4LDIwMEgyNDhhOCw4LDAsMCwwLDcuMzEtMTEuMjVaTTY0LDE4NEgyMC4zMUw2NCw4NS43Wm0xNiwwVjg1LjdMMTIzLjY5LDE4NFptNjEuMiwwTDg0LjMxLDU2SDE3OC44bDU2Ljg5LDEyOFoiLz48L3N2Zz4=)
 */
export function PhTentIcon(props: PhTentIconProps) {
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
      <path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Zm61.2,0L84.31,56H178.8l56.89,128Z"/>
    </svg>
  );
}
