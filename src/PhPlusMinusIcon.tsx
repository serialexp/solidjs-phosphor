import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlusMinusIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsNjEuNjZsLTE0NCwxNDRhOCw4LDAsMCwxLTExLjMyLTExLjMybDE0NC0xNDRhOCw4LDAsMCwxLDExLjMyLDExLjMyWk02NCwxMTJhOCw4LDAsMCwwLDE2LDBWODBoMzJhOCw4LDAsMCwwLDAtMTZIODBWMzJhOCw4LDAsMCwwLTE2LDBWNjRIMzJhOCw4LDAsMCwwLDAsMTZINjRabTE2MCw2NEgxNDRhOCw4LDAsMCwwLDAsMTZoODBhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhPlusMinusIcon(props: PhPlusMinusIconProps) {
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
      <path d="M205.66,61.66l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.32ZM64,112a8,8,0,0,0,16,0V80h32a8,8,0,0,0,0-16H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64Zm160,64H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
