import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLadderSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJWMjI0SDY0VjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE5MiwyNGE4LDgsMCwwLDAtOCw4VjY0SDcyVjMyYTgsOCwwLDAsMC0xNiwwVjIyNGE4LDgsMCwwLDAsMTYsMFYxOTJIMTg0djMyYTgsOCwwLDAsMCwxNiwwVjMyQTgsOCwwLDAsMCwxOTIsMjRabS04LDU2djQwSDcyVjgwWk03MiwxNzZWMTM2SDE4NHY0MFoiLz48L3N2Zz4=)
 */
export function PhLadderSimpleDuotoneIcon(props: PhLadderSimpleDuotoneIconProps) {
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
      <path d="M192,32V224H64V32Z" opacity="0.2"/><path d="M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z"/>
    </svg>
  );
}
