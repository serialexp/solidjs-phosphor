import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTM2LjQ5bC0zMiwzMmExMiwxMiwwLDAsMS0xNy0xN0wyMDMsMTQwSDUzbDExLjUyLDExLjUxYTEyLDEyLDAsMCwxLTE3LDE3bC0zMi0zMmExMiwxMiwwLDAsMSwwLTE3bDMyLTMyYTEyLDEyLDAsMSwxLDE3LDE3TDUzLDExNkgyMDNsLTExLjUyLTExLjUxYTEyLDEyLDAsMCwxLDE3LTE3bDMyLDMyQTEyLDEyLDAsMCwxLDI0MC40OSwxMzYuNDlaIi8+PC9zdmc+)
 */
export function PhArrowsHorizontalBoldIcon(props: PhArrowsHorizontalBoldIconProps) {
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
      <path d="M240.49,136.49l-32,32a12,12,0,0,1-17-17L203,140H53l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L53,116H203l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,240.49,136.49Z"/>
    </svg>
  );
}
