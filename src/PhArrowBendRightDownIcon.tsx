import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendRightDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMTgxLjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzIsMGwtNDgtNDhhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE0NCwyMDQuNjlWMTI4QTg4LjEsODguMSwwLDAsMCw1Niw0MGE4LDgsMCwwLDEsMC0xNkExMDQuMTEsMTA0LjExLDAsMCwxLDE2MCwxMjh2NzYuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendRightDownIcon(props: PhArrowBendRightDownIconProps) {
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
      <path d="M205.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L144,204.69V128A88.1,88.1,0,0,0,56,40a8,8,0,0,1,0-16A104.11,104.11,0,0,1,160,128v76.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
