import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPentagonFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuMjYsMTA1LjE5bC0zMiwxMDcuNTQtLjA2LjE3QTE1Ljk0LDE1Ljk0LDAsMCwxLDE4NCwyMjRINzJBMTUuOTQsMTUuOTQsMCwwLDEsNTYuOCwyMTIuOWwtLjA2LS4xNy0zMi0xMDcuNTRhMTYsMTYsMCwwLDEsNS43LTE3LjYzbDg3LjkyLTY4LjMxLjE4LS4xNGExNS45MywxNS45MywwLDAsMSwxOC45MiwwbC4xOC4xNCw4Ny45Miw2OC4zMUExNiwxNiwwLDAsMSwyMzEuMjYsMTA1LjE5WiIvPjwvc3ZnPg==)
 */
export function PhPentagonFillIcon(props: PhPentagonFillIconProps) {
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
      <path d="M231.26,105.19l-32,107.54-.06.17A15.94,15.94,0,0,1,184,224H72A15.94,15.94,0,0,1,56.8,212.9l-.06-.17-32-107.54a16,16,0,0,1,5.7-17.63l87.92-68.31.18-.14a15.93,15.93,0,0,1,18.92,0l.18.14,87.92,68.31A16,16,0,0,1,231.26,105.19Z"/>
    </svg>
  );
}
