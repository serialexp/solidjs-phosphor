import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCoatHangerBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTY4LDE0OCw5NmwxOS4yLTE0LjRBMTIsMTIsMCwwLDAsMTcyLDcyYTQ0LDQ0LDAsMCwwLTg3LjY2LTUuNDgsMTIsMTIsMCwxLDAsMjMuODIsMywyMCwyMCwwLDAsMSwzOS4wOS0yLjkyTDEyMSw4Ni4yNGMtLjE1LjEtLjI5LjIxLS40My4zMkwxMiwxNjhhMjAsMjAsMCwwLDAsMTIsMzZIMjMyYTIwLDIwLDAsMCwwLDEyLTM2Wk0zNiwxODBsOTItNjksOTIsNjlaIi8+PC9zdmc+)
 */
export function PhCoatHangerBoldIcon(props: PhCoatHangerBoldIconProps) {
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
      <path d="M244,168,148,96l19.2-14.4A12,12,0,0,0,172,72a44,44,0,0,0-87.66-5.48,12,12,0,1,0,23.82,3,20,20,0,0,1,39.09-2.92L121,86.24c-.15.1-.29.21-.43.32L12,168a20,20,0,0,0,12,36H232a20,20,0,0,0,12-36ZM36,180l92-69,92,69Z"/>
    </svg>
  );
}
