import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFirstAidFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA4djQwYTE2LDE2LDAsMCwxLTE2LDE2SDE2NHY1MmExNiwxNiwwLDAsMS0xNiwxNkgxMDhhMTYsMTYsMCwwLDEtMTYtMTZWMTY0SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjEwOEExNiwxNiwwLDAsMSw0MCw5Mkg5MlY0MGExNiwxNiwwLDAsMSwxNi0xNmg0MGExNiwxNiwwLDAsMSwxNiwxNlY5Mmg1MkExNiwxNiwwLDAsMSwyMzIsMTA4WiIvPjwvc3ZnPg==)
 */
export function PhFirstAidFillIcon(props: PhFirstAidFillIconProps) {
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
      <path d="M232,108v40a16,16,0,0,1-16,16H164v52a16,16,0,0,1-16,16H108a16,16,0,0,1-16-16V164H40a16,16,0,0,1-16-16V108A16,16,0,0,1,40,92H92V40a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92h52A16,16,0,0,1,232,108Z"/>
    </svg>
  );
}
